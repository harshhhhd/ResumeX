export interface WordToken {
  index: number;
  text: string;
  start: number;
  end: number;
}

/**
 * Tokenize string into non-whitespace words with exact character start/end offsets.
 * Works seamlessly with Latin, Devanagari (Hindi), and other unicode scripts.
 */
export function tokenizeForHighlight(text: string): WordToken[] {
  if (!text) return [];
  const regex = /\S+/g;
  const tokens: WordToken[] = [];
  let match: RegExpExecArray | null;
  let index = 0;

  while ((match = regex.exec(text)) !== null) {
    tokens.push({
      index,
      text: match[0],
      start: match.index,
      end: match.index + match[0].length,
    });
    index++;
  }

  return tokens;
}

/**
 * Estimate duration of spoken text in milliseconds.
 * Approx text.length / (15 * rate) * 1000, minimum 800ms.
 */
export function estimateSpeechDurationMs(text: string, rate = 1): number {
  const safeRate = rate > 0 ? rate : 1;
  const length = text?.trim().length || 0;
  const calculated = (length / (15 * safeRate)) * 1000;
  return Math.max(800, Math.round(calculated));
}

/**
 * Builds cumulative END timestamp in ms for each token.
 * Distributes (durationMs - leadInMs - tailMs) proportionally to token weights.
 * Last value is guaranteed to be durationMs - tailMs.
 */
export function buildWordSchedule(
  tokens: WordToken[],
  durationMs: number,
  leadInMs = 120,
  tailMs = 150,
): number[] {
  if (!tokens || tokens.length === 0) {
    return [];
  }

  const effectiveDuration = Math.max(durationMs, leadInMs + tailMs + 50);
  const speakTime = effectiveDuration - leadInMs - tailMs;

  const weights = tokens.map((token) => {
    let weight = Math.max(2, token.text.length);
    if (/[,;:]$/.test(token.text)) {
      weight += 3;
    }
    if (/[.?!…।]$/.test(token.text)) {
      weight += 6;
    }
    return weight;
  });

  const totalWeight = weights.reduce((sum, w) => sum + w, 0);
  const schedule: number[] = new Array(tokens.length);
  let accumulatedTime = leadInMs;

  for (let i = 0; i < tokens.length; i++) {
    if (i === tokens.length - 1) {
      // Pin the final token end time to exactly durationMs - tailMs
      schedule[i] = effectiveDuration - tailMs;
    } else {
      const tokenDuration = (weights[i] / totalWeight) * speakTime;
      accumulatedTime += tokenDuration;
      schedule[i] = Math.round(accumulatedTime);
    }
  }

  // Ensure strict monotonicity
  for (let i = 1; i < schedule.length; i++) {
    if (schedule[i] <= schedule[i - 1]) {
      schedule[i] = schedule[i - 1] + 1;
    }
  }

  return schedule;
}

/**
 * Returns the word token index active at elapsedMs.
 * elapsedMs < 0 -> -1
 * otherwise the first i where elapsedMs < schedule[i]
 * if past the end -> schedule.length - 1
 */
export function wordIndexAtTime(schedule: number[], elapsedMs: number): number {
  if (!schedule || schedule.length === 0 || elapsedMs < 0) {
    return -1;
  }

  for (let i = 0; i < schedule.length; i++) {
    if (elapsedMs < schedule[i]) {
      return i;
    }
  }

  return schedule.length - 1;
}

/**
 * Returns the word token index active at charIndex.
 * Finds the token containing charIndex, or the last token whose start <= charIndex.
 */
export function wordIndexAtChar(tokens: WordToken[], charIndex: number): number {
  if (!tokens || tokens.length === 0) {
    return -1;
  }

  if (charIndex <= tokens[0].start) {
    return 0;
  }

  // Check if charIndex is inside a token
  for (let i = 0; i < tokens.length; i++) {
    if (charIndex >= tokens[i].start && charIndex < tokens[i].end) {
      return i;
    }
  }

  // If between tokens or past last token, pick the last token with start <= charIndex
  for (let i = tokens.length - 1; i >= 0; i--) {
    if (tokens[i].start <= charIndex) {
      return i;
    }
  }

  return 0;
}
