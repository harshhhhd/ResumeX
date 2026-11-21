// EigenHire Pure Scoring Engine — One Source of Truth
// Pure functions, no I/O. Computes question composite scores and session aggregations.

export const RUBRIC_WEIGHTS = {
  technicalCorrectness: 0.35,
  problemSolving: 0.2,
  projectUnderstanding: 0.15,
  relevanceCompleteness: 0.1,
  communicationClarity: 0.1,
  behavioralEvidence: 0.1,
} as const;

export type RubricKey = keyof typeof RUBRIC_WEIGHTS;
export type RubricScores = Record<RubricKey, number | null>;

export const SCORE_THRESHOLDS = {
  high: 75,
  mid: 50,
} as const;

export type FitVerdict = "Strong Fit" | "Moderate Fit" | "Developing Fit";

/**
 * Computes the weighted composite score for a single answer across non-null rubric dimensions.
 * Weights are renormalized across the non-null dimensions.
 * Clamped to 0..100 and rounded to an integer.
 * If all dimensions are null, returns 0.
 */
export function computeComposite(rubric: RubricScores): number {
  let weightedSum = 0;
  let totalWeight = 0;

  for (const key of Object.keys(RUBRIC_WEIGHTS) as RubricKey[]) {
    const val = rubric[key];
    if (val !== null && typeof val === "number" && !isNaN(val)) {
      const weight = RUBRIC_WEIGHTS[key];
      weightedSum += Math.max(0, Math.min(100, val)) * weight;
      totalWeight += weight;
    }
  }

  if (totalWeight <= 0) {
    return 0;
  }

  const normalized = weightedSum / totalWeight;
  return Math.min(100, Math.max(0, Math.round(normalized)));
}

/**
 * Aggregates all answer records into overall scores, categories, and verdict.
 * Unanswered questions (compositeScore = 0 with all zero rubric dimensions) are included in the overall mean.
 */
export function aggregateScorecard(answers: { compositeScore: number; rubric: RubricScores }[]): {
  overallScore: number;
  categories: {
    technicalAccuracy: number;
    communicationClarity: number;
    problemSolving: number;
    practicalEvidence: number;
  };
  fitVerdict: FitVerdict;
} {
  if (!answers || answers.length === 0) {
    return {
      overallScore: 0,
      categories: {
        technicalAccuracy: 0,
        communicationClarity: 0,
        problemSolving: 0,
        practicalEvidence: 0,
      },
      fitVerdict: "Developing Fit",
    };
  }

  // 1. Overall score: rounded mean of compositeScores across all questions
  const totalComposite = answers.reduce((sum, a) => sum + (a.compositeScore || 0), 0);
  const overallScore = Math.min(100, Math.max(0, Math.round(totalComposite / answers.length)));

  // Helper for mean over non-null values
  const meanOfDimension = (key: RubricKey): number => {
    let sum = 0;
    let count = 0;
    for (const a of answers) {
      const val = a.rubric[key];
      if (val !== null && typeof val === "number" && !isNaN(val)) {
        sum += val;
        count++;
      }
    }
    return count > 0 ? Math.min(100, Math.max(0, Math.round(sum / count))) : 0;
  };

  // Helper for practical evidence: mean across available projectUnderstanding and behavioralEvidence
  const meanOfMultiple = (keys: RubricKey[]): number => {
    let sum = 0;
    let count = 0;
    for (const a of answers) {
      for (const k of keys) {
        const val = a.rubric[k];
        if (val !== null && typeof val === "number" && !isNaN(val)) {
          sum += val;
          count++;
        }
      }
    }
    return count > 0 ? Math.min(100, Math.max(0, Math.round(sum / count))) : 0;
  };

  const categories = {
    technicalAccuracy: meanOfDimension("technicalCorrectness"),
    communicationClarity: meanOfDimension("communicationClarity"),
    problemSolving: meanOfDimension("problemSolving"),
    practicalEvidence: meanOfMultiple(["projectUnderstanding", "behavioralEvidence"]),
  };

  const fitVerdict: FitVerdict =
    overallScore >= SCORE_THRESHOLDS.high
      ? "Strong Fit"
      : overallScore >= SCORE_THRESHOLDS.mid
        ? "Moderate Fit"
        : "Developing Fit";

  return {
    overallScore,
    categories,
    fitVerdict,
  };
}
