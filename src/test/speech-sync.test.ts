import { describe, expect, it } from "vitest";
import {
  tokenizeForHighlight,
  estimateSpeechDurationMs,
  buildWordSchedule,
  wordIndexAtTime,
  wordIndexAtChar,
} from "../lib/speech-sync";

describe("speech-sync utility", () => {
  it("tokenizes text with multiple spaces, newlines, and Hindi text", () => {
    const englishText = "Hello,   world!\nThis  is a test.";
    const enTokens = tokenizeForHighlight(englishText);

    expect(enTokens.length).toBe(6);
    expect(enTokens[0]!.text).toBe("Hello,");
    expect(enTokens[1]!.text).toBe("world!");
    expect(enTokens[2]!.text).toBe("This");
    expect(enTokens[3]!.text).toBe("is");
    expect(enTokens[4]!.text).toBe("a");
    expect(enTokens[5]!.text).toBe("test.");

    // Verify character offsets
    for (const t of enTokens) {
      expect(englishText.slice(t.start, t.end)).toBe(t.text);
    }

    const hindiText = "नमस्ते, आप  कैसे हैं? मैं ठीक हूँ।";
    const hiTokens = tokenizeForHighlight(hindiText);

    expect(hiTokens.length).toBe(7);
    expect(hiTokens[0]!.text).toBe("नमस्ते,");
    expect(hiTokens[6]!.text).toBe("हूँ।");
    for (const t of hiTokens) {
      expect(hindiText.slice(t.start, t.end)).toBe(t.text);
    }
  });

  it("estimates speech duration with min 800ms", () => {
    expect(estimateSpeechDurationMs("")).toBe(800);
    expect(estimateSpeechDurationMs("Hi")).toBe(800);
    const longText =
      "This is a longer sentence intended to verify the estimated duration scaling behavior.";
    const dur1 = estimateSpeechDurationMs(longText, 1);
    const dur2 = estimateSpeechDurationMs(longText, 2);
    expect(dur1).toBeGreaterThan(1500);
    expect(dur2).toBeLessThan(dur1);
  });

  it("builds a monotonic schedule whose last value is durationMs - tailMs", () => {
    const text = "Tell me about your experience with React, TypeScript, and state management.";
    const tokens = tokenizeForHighlight(text);
    const duration = 4000;
    const leadIn = 120;
    const tail = 150;

    const schedule = buildWordSchedule(tokens, duration, leadIn, tail);

    expect(schedule.length).toBe(tokens.length);
    // Last value must be duration - tail
    expect(schedule[schedule.length - 1]!).toBe(duration - tail);

    // Strictly monotonic check
    for (let i = 1; i < schedule.length; i++) {
      expect(schedule[i]!).toBeGreaterThan(schedule[i - 1]!);
    }

    // Lead-in check: first token ends after leadIn
    expect(schedule[0]!).toBeGreaterThan(leadIn);
  });

  it("handles wordIndexAtTime boundaries correctly", () => {
    const schedule = [300, 600, 950, 1400, 2000];

    // Negative elapsed time
    expect(wordIndexAtTime(schedule, -50)).toBe(-1);

    // Before first token end
    expect(wordIndexAtTime(schedule, 0)).toBe(0);
    expect(wordIndexAtTime(schedule, 299)).toBe(0);

    // At or after first token end, before second token end
    expect(wordIndexAtTime(schedule, 300)).toBe(1);
    expect(wordIndexAtTime(schedule, 599)).toBe(1);

    // Middle
    expect(wordIndexAtTime(schedule, 600)).toBe(2);
    expect(wordIndexAtTime(schedule, 949)).toBe(2);

    // Near and past end
    expect(wordIndexAtTime(schedule, 1999)).toBe(4);
    expect(wordIndexAtTime(schedule, 2000)).toBe(4);
    expect(wordIndexAtTime(schedule, 3500)).toBe(4);
  });

  it("handles wordIndexAtChar at token edges and spaces", () => {
    const text = "Hi there world";
    const tokens = tokenizeForHighlight(text);
    // tokens:
    // 0: "Hi", start: 0, end: 2
    // 1: "there", start: 3, end: 8
    // 2: "world", start: 9, end: 14

    // Inside token 0
    expect(wordIndexAtChar(tokens, 0)).toBe(0);
    expect(wordIndexAtChar(tokens, 1)).toBe(0);

    // On space between token 0 and token 1 (char 2)
    // "or the last token whose start <= charIndex" -> token 0
    expect(wordIndexAtChar(tokens, 2)).toBe(0);

    // At start of token 1 (char 3)
    expect(wordIndexAtChar(tokens, 3)).toBe(1);
    expect(wordIndexAtChar(tokens, 7)).toBe(1);

    // Space after token 1 (char 8) -> token 1
    expect(wordIndexAtChar(tokens, 8)).toBe(1);

    // Start of token 2 (char 9) -> token 2
    expect(wordIndexAtChar(tokens, 9)).toBe(2);

    // Past end (char 20) -> token 2
    expect(wordIndexAtChar(tokens, 20)).toBe(2);
  });
});
