// EigenHire Score Tone Utilities
// Provides unified green/yellow/red color mappings for score visualizations across the app.
// Uses inline hex / rgba values to prevent Tailwind CSS purge issues.

import { SCORE_THRESHOLDS } from "./scoring";

export type ScoreTier = "high" | "mid" | "low";

export const scoreTier = (n: number): ScoreTier =>
  n >= SCORE_THRESHOLDS.high ? "high" : n >= SCORE_THRESHOLDS.mid ? "mid" : "low";

export const TIER_COLORS = {
  high: {
    solid: "#4ade80",
    end: "#22c55e",
    soft: "rgba(74,222,128,0.12)",
    border: "rgba(74,222,128,0.30)",
    label: "Strong",
  },
  mid: {
    solid: "#facc15",
    end: "#eab308",
    soft: "rgba(250,204,21,0.12)",
    border: "rgba(250,204,21,0.30)",
    label: "Moderate",
  },
  low: {
    solid: "#f87171",
    end: "#ef4444",
    soft: "rgba(248,113,113,0.12)",
    border: "rgba(248,113,113,0.30)",
    label: "Developing",
  },
} as const;

export const scoreTone = (n: number) => {
  const t = TIER_COLORS[scoreTier(n)];
  return {
    ...t,
    color: t.solid,
    badgeBg: t.soft,
  };
};
