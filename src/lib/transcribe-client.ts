// EigenHire Audio Transcription Client
// Captures and transmits candidate speech audio to the EigenHire STT pipeline
// with multi-language (en, hi, hinglish) support and graceful fallback.

import type { InterviewLanguage } from "./interview-i18n";

export interface TranscribeResponse {
  transcript: string;
  provider: string;
}

/**
 * Converts a Blob to a Base64 string using FileReader.
 * 100% reliable across all modern browsers and audio container formats (WebM/Opus, MP4, WAV).
 */
export function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = reader.result as string;
      const base64 = dataUrl.split(",")[1] || "";
      resolve(base64);
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(blob);
  });
}

/**
 * Transcribes audio via server STT endpoint, with graceful client fallback.
 */
export async function transcribeAudioBlob(
  blob: Blob,
  language: InterviewLanguage = "en",
  fallbackText = "",
): Promise<TranscribeResponse> {
  try {
    const audioBase64 = await blobToBase64(blob);

    if (!audioBase64 || audioBase64.length === 0) {
      return {
        transcript: fallbackText,
        provider: "client_fallback",
      };
    }

    // Determine clean MIME type (e.g., audio/webm or audio/mp4)
    const rawMime = blob.type || "audio/webm";
    const mimeType = rawMime.split(";")[0] || "audio/webm";

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000);

    const resp = await fetch("/api/speech/transcribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        audioBase64,
        mimeType,
        language,
        fallbackText,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (resp.ok) {
      const data = await resp.json();
      return {
        transcript: data.transcript || fallbackText,
        provider: data.provider || "server",
      };
    } else {
      const errorText = await resp.text().catch(() => "");
      console.warn(`[speech/transcribe] status ${resp.status}: ${errorText.slice(0, 300)}`);
      return {
        transcript: fallbackText,
        provider: "client_fallback",
      };
    }
  } catch (err) {
    console.warn("[speech/transcribe] Transcription network error, using fallback text:", err);
    return {
      transcript: fallbackText,
      provider: "client_fallback",
    };
  }
}
