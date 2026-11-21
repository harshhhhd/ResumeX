"use client";

import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type VoiceState = "idle" | "listening" | "thinking" | "speaking";

export interface VoicePillProps {
  state: VoiceState;
  audioLevel?: number; // 0..1 from candidate mic
  ttsAnalyser?: AnalyserNode | null;
  isTtsSpeaking?: boolean;
  className?: string;
}

const BAR_COUNT = 9;
// Organic hump weights: center bars taller than edges
const HUMP = [0.45, 0.65, 0.85, 0.95, 1.0, 0.95, 0.85, 0.65, 0.45] as const;
const MIN_SCALE = 0.12;

export function VoicePill({
  state,
  audioLevel = 0,
  ttsAnalyser = null,
  isTtsSpeaking = false,
  className,
}: VoicePillProps) {
  const shouldReduceMotion = useReducedMotion();
  const barRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const stateRef = useRef(state);
  const audioLevelRef = useRef(audioLevel);
  const isTtsSpeakingRef = useRef(isTtsSpeaking);
  const ttsAnalyserRef = useRef(ttsAnalyser);

  // Keep refs synchronized
  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    audioLevelRef.current = audioLevel;
  }, [audioLevel]);

  useEffect(() => {
    isTtsSpeakingRef.current = isTtsSpeaking;
  }, [isTtsSpeaking]);

  useEffect(() => {
    ttsAnalyserRef.current = ttsAnalyser;
  }, [ttsAnalyser]);

  useEffect(() => {
    const bars = barRefs.current;
    if (bars.length === 0) return;

    if (shouldReduceMotion) {
      // Static presentation for reduced motion
      bars.forEach((bar, i) => {
        if (!bar) return;
        const targetScale =
          state === "speaking"
            ? MIN_SCALE + (1 - MIN_SCALE) * HUMP[i]
            : state === "listening"
              ? MIN_SCALE + 0.3 * HUMP[i]
              : MIN_SCALE;
        bar.style.transform = `scaleY(${targetScale.toFixed(3)})`;
        bar.style.opacity = state === "speaking" ? "0.9" : state === "listening" ? "0.7" : "0.5";
      });
      return;
    }

    // Smoothed bar values for spring/morphing transitions
    const currentScales = new Float32Array(BAR_COUNT).fill(MIN_SCALE);
    const currentOpacities = new Float32Array(BAR_COUNT).fill(0.5);

    let animFrame: number;
    let lastTime = performance.now();
    const freqData = new Uint8Array(64);

    const loop = (now: number) => {
      // Pause if document hidden
      if (document.hidden) {
        animFrame = requestAnimationFrame(loop);
        return;
      }

      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      const curState = stateRef.current;
      const curLevel = audioLevelRef.current;
      const isSpeakingTts = isTtsSpeakingRef.current;
      const analyser = ttsAnalyserRef.current;

      const rawTtsAmps: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];

      if (curState === "speaking") {
        if (analyser) {
          analyser.getByteFrequencyData(freqData);
          // Group into 9 frequency bands
          const step = Math.floor(freqData.length / BAR_COUNT);
          for (let i = 0; i < BAR_COUNT; i++) {
            let sum = 0;
            for (let j = 0; j < step; j++) {
              sum += freqData[i * step + j] || 0;
            }
            rawTtsAmps[i] = Math.min(1, (sum / step / 128) * 1.2);
          }
        } else if (isSpeakingTts) {
          // Procedural speech amplitude simulation fallback
          const t = now * 0.008;
          for (let i = 0; i < BAR_COUNT; i++) {
            const wave =
              0.35 + 0.45 * Math.abs(Math.sin(t + i * 0.35)) + 0.2 * Math.sin(t * 2.3 + i * 0.2);
            rawTtsAmps[i] = Math.max(0.1, Math.min(1, wave));
          }
        }
      }

      for (let i = 0; i < BAR_COUNT; i++) {
        let targetScale = MIN_SCALE;
        let targetOpacity = 0.5;

        if (curState === "speaking") {
          const amp = rawTtsAmps[i] * HUMP[i];
          targetScale = Math.max(MIN_SCALE, Math.min(1, MIN_SCALE + amp * (1 - MIN_SCALE)));
          targetOpacity = 0.85;
        } else if (curState === "thinking") {
          targetScale = MIN_SCALE;
          // Left-to-right traveling wave pulse
          const pulse = Math.sin(now * 0.007 - i * 0.45);
          targetOpacity = 0.25 + 0.55 * Math.max(0, pulse);
        } else if (curState === "listening") {
          const amp = Math.min(0.65, curLevel * 0.8) * HUMP[i];
          targetScale = Math.max(MIN_SCALE, MIN_SCALE + amp);
          targetOpacity = 0.65;
        } else {
          // Idle breathing
          const breath = 0.5 + 0.5 * Math.sin(now * 0.002);
          targetScale = MIN_SCALE + 0.03 * breath;
          targetOpacity = 0.45 + 0.15 * breath;
        }

        // Fast attack (~60ms), smooth release (~160ms)
        const attackFactor = Math.min(1, dt * 16.6); // ~60ms
        const releaseFactor = Math.min(1, dt * 6.25); // ~160ms

        if (targetScale > currentScales[i]) {
          currentScales[i] += (targetScale - currentScales[i]) * attackFactor;
        } else {
          currentScales[i] += (targetScale - currentScales[i]) * releaseFactor;
        }

        currentOpacities[i] += (targetOpacity - currentOpacities[i]) * releaseFactor;

        const bar = bars[i];
        if (bar) {
          bar.style.transform = `scaleY(${currentScales[i].toFixed(3)})`;
          bar.style.opacity = currentOpacities[i].toFixed(3);
        }
      }

      animFrame = requestAnimationFrame(loop);
    };

    animFrame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animFrame);
    };
  }, [shouldReduceMotion, state]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "inline-flex h-12 sm:h-14 items-center justify-center rounded-full bg-[#141414] border border-[rgba(255,255,255,0.12)] px-6 sm:px-7 gap-1.5 transition-colors",
        className,
      )}
    >
      {Array.from({ length: BAR_COUNT }).map((_, i) => (
        <span
          key={i}
          ref={(el) => {
            barRefs.current[i] = el;
          }}
          className="h-6 sm:h-7 w-[3.5px] rounded-full bg-[#f5f5f5] origin-center transition-opacity"
          style={{
            transform: `scaleY(${MIN_SCALE})`,
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
}

export default VoicePill;
