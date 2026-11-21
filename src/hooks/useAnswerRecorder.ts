// EigenHire Real Audio Recorder Hook
// Captures candidate audio in real time using MediaRecorder with cloned audio tracks.
// Supports peak level tracking, 120s max duration cap, and clean unmount cancellation.

import { useState, useRef, useCallback, useEffect } from "react";
import type { QuestionPhase } from "@/components/interview/AnswerRecorder";

export { type QuestionPhase };

export interface RecordResult {
  blob: Blob;
  durationMs: number;
  peakLevel: number;
}

export interface UseAnswerRecorderOptions {
  stream: MediaStream | null;
  audioLevel?: number; // 0..1 live smoothed audio level from useMediaSession
  maxDurationSeconds?: number;
  onAutoStop?: (result: RecordResult) => void;
  onMaxDurationReached?: () => void;
}

export function useAnswerRecorder({
  stream,
  audioLevel = 0,
  maxDurationSeconds = 120,
  onAutoStop,
  onMaxDurationReached,
}: UseAnswerRecorderOptions) {
  const [isRecording, setIsRecording] = useState(false);
  const [elapsedMs, setElapsedMs] = useState(0);
  const [micMutedError, setMicMutedError] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const clonedStreamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const startTimeRef = useRef<number>(0);
  const peakLevelRef = useRef<number>(0);
  const timerIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hardCapTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stopResolverRef = useRef<((res: RecordResult) => void) | null>(null);
  const audioLevelRef = useRef(audioLevel);

  useEffect(() => {
    audioLevelRef.current = audioLevel;
    if (isRecording && audioLevel > peakLevelRef.current) {
      peakLevelRef.current = audioLevel;
    }
  }, [audioLevel, isRecording]);

  const cleanup = useCallback(() => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
    if (hardCapTimeoutRef.current) {
      clearTimeout(hardCapTimeoutRef.current);
      hardCapTimeoutRef.current = null;
    }
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      try {
        mediaRecorderRef.current.stop();
      } catch {
        // ignore
      }
      mediaRecorderRef.current = null;
    }
    if (clonedStreamRef.current) {
      clonedStreamRef.current.getTracks().forEach((t) => {
        try {
          t.stop();
        } catch {
          // ignore
        }
      });
      clonedStreamRef.current = null;
    }
    setIsRecording(false);
  }, []);

  const cancel = useCallback(() => {
    stopResolverRef.current = null;
    cleanup();
    chunksRef.current = [];
    setElapsedMs(0);
    peakLevelRef.current = 0;
  }, [cleanup]);

  const stop = useCallback((): Promise<RecordResult> => {
    return new Promise<RecordResult>((resolve) => {
      if (!mediaRecorderRef.current || mediaRecorderRef.current.state === "inactive") {
        const duration = startTimeRef.current > 0 ? Date.now() - startTimeRef.current : 0;
        resolve({
          blob: new Blob(chunksRef.current, { type: "audio/webm" }),
          durationMs: duration,
          peakLevel: peakLevelRef.current,
        });
        cancel();
        return;
      }

      stopResolverRef.current = resolve;
      try {
        mediaRecorderRef.current.stop();
      } catch {
        const duration = startTimeRef.current > 0 ? Date.now() - startTimeRef.current : 0;
        resolve({
          blob: new Blob(chunksRef.current, { type: "audio/webm" }),
          durationMs: duration,
          peakLevel: peakLevelRef.current,
        });
        cancel();
      }
    });
  }, [cancel]);

  const start = useCallback(() => {
    cancel();
    setMicMutedError(false);

    if (!stream) {
      setMicMutedError(true);
      return false;
    }

    const audioTracks = stream.getAudioTracks();
    if (audioTracks.length === 0 || !audioTracks[0]?.enabled) {
      setMicMutedError(true);
      return false;
    }

    try {
      // Clone audio tracks so camera toggles don't break recording
      const clonedTracks = audioTracks.map((t) => t.clone());
      const clonedStream = new MediaStream(clonedTracks);
      clonedStreamRef.current = clonedStream;

      // Select first supported mime type
      const mimeTypes = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", ""];
      let selectedMime = "";
      if (typeof MediaRecorder !== "undefined" && MediaRecorder.isTypeSupported) {
        for (const m of mimeTypes) {
          if (m && MediaRecorder.isTypeSupported(m)) {
            selectedMime = m;
            break;
          }
        }
      }

      const options = selectedMime ? { mimeType: selectedMime } : undefined;
      const recorder = new MediaRecorder(clonedStream, options);
      mediaRecorderRef.current = recorder;
      chunksRef.current = [];
      peakLevelRef.current = 0;
      startTimeRef.current = Date.now();

      recorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        const duration = Date.now() - startTimeRef.current;
        const mimeType = selectedMime || "audio/webm";
        const finalBlob = new Blob(chunksRef.current, { type: mimeType });
        const result: RecordResult = {
          blob: finalBlob,
          durationMs: duration,
          peakLevel: peakLevelRef.current,
        };

        const resolver = stopResolverRef.current;
        stopResolverRef.current = null;
        cleanup();

        if (resolver) {
          resolver(result);
        } else if (onAutoStop) {
          onAutoStop(result);
        }
      };

      // Start recording with 250ms timeslice
      recorder.start(250);
      setIsRecording(true);

      // Elapsed timer
      timerIntervalRef.current = setInterval(() => {
        setElapsedMs(Date.now() - startTimeRef.current);
      }, 100);

      // Max duration hard cap
      hardCapTimeoutRef.current = setTimeout(() => {
        onMaxDurationReached?.();
        stop().catch(() => {});
      }, maxDurationSeconds * 1000);

      return true;
    } catch (err) {
      console.warn("MediaRecorder start failed:", err);
      setMicMutedError(true);
      cleanup();
      return false;
    }
  }, [stream, cancel, cleanup, stop, onAutoStop, onMaxDurationReached, maxDurationSeconds]);

  // Clean unmount safety
  useEffect(() => {
    return () => {
      cancel();
    };
  }, [cancel]);

  const stopRecording = useCallback(async () => {
    const res = await stop();
    return res.blob;
  }, [stop]);

  return {
    isRecording,
    elapsedMs,
    durationSeconds: Math.floor(elapsedMs / 1000),
    peakLevel: peakLevelRef.current,
    micMutedError,
    start,
    startRecording: start,
    stop,
    stopRecording,
    cancel,
    cancelRecording: cancel,
  };
}
