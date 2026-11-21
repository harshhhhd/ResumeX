import { describe, it, expect } from "vitest";
import {
  computeComposite,
  aggregateScorecard,
  RUBRIC_WEIGHTS,
  SCORE_THRESHOLDS,
  type RubricScores,
} from "@/lib/scoring";
import { scoreTier, scoreTone } from "@/lib/score-tone";

describe("Scoring Engine (src/lib/scoring.ts)", () => {
  it("returns 80 when all rubric dimensions are 80", () => {
    const rubric: RubricScores = {
      technicalCorrectness: 80,
      problemSolving: 80,
      projectUnderstanding: 80,
      relevanceCompleteness: 80,
      communicationClarity: 80,
      behavioralEvidence: 80,
    };
    expect(computeComposite(rubric)).toBe(80);
  });

  it("renormalizes weights correctly when some dimensions are null", () => {
    // Only technicalCorrectness (weight 0.35) and communicationClarity (0.10)
    // Values: 100 and 50
    // Normalized: (100 * 0.35 + 50 * 0.10) / (0.35 + 0.10) = (35 + 5) / 0.45 = 40 / 0.45 = 88.888... -> 89
    const rubric: RubricScores = {
      technicalCorrectness: 100,
      problemSolving: null,
      projectUnderstanding: null,
      relevanceCompleteness: null,
      communicationClarity: 50,
      behavioralEvidence: null,
    };
    expect(computeComposite(rubric)).toBe(89);
  });

  it("returns 0 when all dimensions are null", () => {
    const rubric: RubricScores = {
      technicalCorrectness: null,
      problemSolving: null,
      projectUnderstanding: null,
      relevanceCompleteness: null,
      communicationClarity: null,
      behavioralEvidence: null,
    };
    expect(computeComposite(rubric)).toBe(0);
  });

  it("includes unanswered questions as 0 in the overall mean", () => {
    const answers = [
      {
        compositeScore: 80,
        rubric: {
          technicalCorrectness: 80,
          problemSolving: 80,
          projectUnderstanding: 80,
          relevanceCompleteness: 80,
          communicationClarity: 80,
          behavioralEvidence: 80,
        },
      },
      {
        compositeScore: 0,
        rubric: {
          technicalCorrectness: 0,
          problemSolving: 0,
          projectUnderstanding: 0,
          relevanceCompleteness: 0,
          communicationClarity: 0,
          behavioralEvidence: 0,
        },
      },
    ];

    const scorecard = aggregateScorecard(answers);
    // (80 + 0) / 2 = 40
    expect(scorecard.overallScore).toBe(40);
    expect(scorecard.fitVerdict).toBe("Developing Fit");
  });

  it("ensures overall equals rounded mean of composite scores", () => {
    const answers = [
      {
        compositeScore: 85,
        rubric: {
          technicalCorrectness: 90,
          problemSolving: 85,
          projectUnderstanding: 80,
          relevanceCompleteness: 85,
          communicationClarity: 80,
          behavioralEvidence: 85,
        },
      },
      {
        compositeScore: 72,
        rubric: {
          technicalCorrectness: 70,
          problemSolving: 75,
          projectUnderstanding: 70,
          relevanceCompleteness: 75,
          communicationClarity: 70,
          behavioralEvidence: 75,
        },
      },
      {
        compositeScore: 91,
        rubric: {
          technicalCorrectness: 95,
          problemSolving: 90,
          projectUnderstanding: 90,
          relevanceCompleteness: 90,
          communicationClarity: 85,
          behavioralEvidence: 90,
        },
      },
      {
        compositeScore: 64,
        rubric: {
          technicalCorrectness: 60,
          problemSolving: 65,
          projectUnderstanding: 65,
          relevanceCompleteness: 70,
          communicationClarity: 60,
          behavioralEvidence: 65,
        },
      },
      {
        compositeScore: 78,
        rubric: {
          technicalCorrectness: 80,
          problemSolving: 75,
          projectUnderstanding: 75,
          relevanceCompleteness: 80,
          communicationClarity: 75,
          behavioralEvidence: 80,
        },
      },
    ];

    const mean = (85 + 72 + 91 + 64 + 78) / 5; // 390 / 5 = 78
    const scorecard = aggregateScorecard(answers);
    expect(scorecard.overallScore).toBe(Math.round(mean));
    expect(scorecard.overallScore).toBe(78);
    expect(scorecard.fitVerdict).toBe("Strong Fit");
  });

  it("maps categories accurately without fabrication", () => {
    const answers = [
      {
        compositeScore: 80,
        rubric: {
          technicalCorrectness: 80,
          problemSolving: 70,
          projectUnderstanding: 60,
          relevanceCompleteness: 75,
          communicationClarity: 90,
          behavioralEvidence: 65,
        },
      },
    ];

    const scorecard = aggregateScorecard(answers);
    expect(scorecard.categories.technicalAccuracy).toBe(80);
    expect(scorecard.categories.communicationClarity).toBe(90);
    expect(scorecard.categories.problemSolving).toBe(70);
    // practicalEvidence = mean of projectUnderstanding (60) and behavioralEvidence (65) = 62.5 -> 63
    expect(scorecard.categories.practicalEvidence).toBe(63);
  });
});

describe("Score Tone Thresholds (src/lib/score-tone.ts)", () => {
  it("matches thresholds accurately: 75->high, 74->mid, 50->mid, 49->low", () => {
    expect(scoreTier(75)).toBe("high");
    expect(scoreTier(74)).toBe("mid");
    expect(scoreTier(50)).toBe("mid");
    expect(scoreTier(49)).toBe("low");

    expect(scoreTone(76).solid).toBe("#4ade80");
    expect(scoreTone(62).solid).toBe("#facc15");
    expect(scoreTone(37).solid).toBe("#f87171");
  });
});
