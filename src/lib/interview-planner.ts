// EigenHire Job-Grounded Interview Planner
// Generates role-grounded, level-calibrated 5-phase interview plans from job descriptions and candidate resumes.
// Never imports dataset dumps at runtime.

import { QUESTION_TEMPLATES, type InterviewLanguage } from "./interview-i18n";
import type { InterviewQuestion } from "./ai-interview";

export interface PlanContext {
  language?: InterviewLanguage;
  jobId?: string;
  company?: string;
  verificationQuestions?: string[];
  analysis?: {
    executive_summary?: string;
    strengths?: { skill_or_area: string; evidence_quote: string }[];
    gaps?: {
      requirement: string;
      type?: "mandatory" | "preferred" | string | undefined;
      severity?: string | undefined;
    }[];
    verification_questions?: string[];
  };
}

export type RoleLevel = "entry" | "mid" | "senior";

/**
 * Parses experience string and title to determine seniority level.
 * - Title contains fresher, intern, entry, junior or max years <= 1 -> "entry"
 * - Title contains senior, lead, staff, principal or years >= 5 -> "senior"
 * - Otherwise -> "mid"
 */
export function detectLevel(experience = "", title = ""): RoleLevel {
  const t = title.toLowerCase();
  const exp = experience.toLowerCase();

  if (/\b(fresher|intern|entry|junior|trainee|associate)\b/.test(t)) {
    return "entry";
  }
  if (/\b(senior|lead|staff|principal|architect|director|vp|head)\b/.test(t)) {
    return "senior";
  }

  // Parse years of experience from experience string
  const rangeMatch = exp.match(/(\d+)\s*(?:-|to)\s*(\d+)/);
  if (rangeMatch && rangeMatch[2]) {
    const maxYears = parseInt(rangeMatch[2], 10);
    if (maxYears <= 1) return "entry";
    if (maxYears >= 5) return "senior";
    return "mid";
  }

  const singleMatch = exp.match(/(\d+)\+?\s*year/);
  if (singleMatch && singleMatch[1]) {
    const years = parseInt(singleMatch[1], 10);
    if (years <= 1) return "entry";
    if (years >= 5) return "senior";
    return "mid";
  }

  if (exp.includes("fresher") || exp.includes("entry") || exp.includes("0 year")) {
    return "entry";
  }

  return "mid";
}

interface TechStackItem {
  name: string;
  canonical_name?: string;
  requirement_type?: "mandatory" | "preferred" | string;
  category?: string;
}

interface StructuredJobLike {
  title?: string;
  company?: string;
  company_name?: string;
  experience?: string;
  tech_stack?: TechStackItem[];
  qualifications?: {
    mandatory?: string[];
    preferred?: string[];
  };
  responsibilities?: string[];
  about_role?: string;
}

/**
 * Extracts mandatory and preferred skills and responsibilities from a job posting.
 */
function extractJobElements(posting: Record<string, unknown> = {}, targetJobTitle = "") {
  const structured = (posting.generated_posting || posting) as StructuredJobLike;

  const techStack = Array.isArray(structured.tech_stack) ? structured.tech_stack : [];
  const mandatorySkills: string[] = [];
  const preferredSkills: string[] = [];

  for (const item of techStack) {
    const name = item.canonical_name || item.name;
    if (!name) continue;
    if (item.requirement_type === "mandatory") {
      mandatorySkills.push(name);
    } else {
      preferredSkills.push(name);
    }
  }

  const mandatoryQuals = structured.qualifications?.mandatory || [];
  const preferredQuals = structured.qualifications?.preferred || [];

  // Fallback to qualifications if tech_stack is empty
  if (mandatorySkills.length === 0 && mandatoryQuals.length > 0) {
    mandatorySkills.push(...mandatoryQuals.slice(0, 3));
  }
  if (preferredSkills.length === 0 && preferredQuals.length > 0) {
    preferredSkills.push(...preferredQuals.slice(0, 3));
  }

  // Fallback from job title if still empty
  if (mandatorySkills.length === 0) {
    const lowerTitle = `${targetJobTitle} ${structured.title || posting.title || ""}`.toLowerCase();
    if (lowerTitle.includes("frontend") || lowerTitle.includes("react")) {
      mandatorySkills.push("React", "TypeScript", "Web Performance");
      preferredSkills.push("Tailwind CSS", "State Management");
    } else if (lowerTitle.includes("backend") || lowerTitle.includes("python")) {
      mandatorySkills.push("Python", "API Architecture", "PostgreSQL");
      preferredSkills.push("Docker", "Distributed Systems");
    } else if (lowerTitle.includes("data") || lowerTitle.includes("ml")) {
      mandatorySkills.push("Python", "SQL", "Data Pipelines");
      preferredSkills.push("Machine Learning", "Cloud Services");
    } else if (lowerTitle.includes("dba") || lowerTitle.includes("database")) {
      mandatorySkills.push("PostgreSQL", "Database Architecture", "SQL Query Optimization");
      preferredSkills.push("High Availability", "Replication");
    } else {
      mandatorySkills.push("Core Software Engineering", "System Design");
      preferredSkills.push("Cloud Infrastructure");
    }
  }

  const responsibilities = Array.isArray(structured.responsibilities)
    ? structured.responsibilities
    : [];

  const company =
    (posting.company_name as string) || structured.company || structured.company_name || "Company";

  return {
    mandatorySkills,
    preferredSkills,
    responsibilities,
    company,
  };
}

/**
 * Builds expected keywords based on the skill and context.
 */
function buildSkillKeywords(skill: string, extra: string[] = []): string[] {
  const normalized = skill.toLowerCase();
  const base = [skill];
  if (normalized.includes("python")) {
    base.push("interpreter", "GIL", "memory", "asyncio", "typing");
  } else if (normalized.includes("react")) {
    base.push("hooks", "re-render", "state", "virtual DOM", "lifecycle");
  } else if (normalized.includes("typescript")) {
    base.push("generics", "type inference", "interfaces", "union types");
  } else if (normalized.includes("sql") || normalized.includes("postgres")) {
    base.push("indexing", "transactions", "ACID", "query planner", "locks");
  } else if (normalized.includes("dsa") || normalized.includes("algorithm")) {
    base.push("time complexity", "space complexity", "Big O", "hash table", "binary search");
  } else if (normalized.includes("docker") || normalized.includes("container")) {
    base.push("image layers", "volumes", "isolation", "multi-stage build");
  }
  return Array.from(new Set([...base, ...extra]));
}

/**
 * Builds an objective ideal answer outline tailored to the specific skill and level.
 */
function buildIdealAnswerOutline(skill: string, level: RoleLevel): string {
  if (level === "entry") {
    return `1. Clearly defines ${skill} and its foundational mechanics.\n2. Identifies a realistic pitfall (such as common runtime errors or misuse).\n3. Explains how to prevent or test for the issue.\n4. Shows awareness of debugging tools and clean coding practices.`;
  }
  if (level === "senior") {
    return `1. Evaluates architectural trade-offs when integrating ${skill} at scale.\n2. Contrasts alternative libraries or system designs.\n3. Details production observability, telemetry, and fault-tolerance patterns.\n4. Mentions organizational maintainability and automated rollback safety.`;
  }
  return `1. Outlines real-world project context where ${skill} was utilized.\n2. Explains the core technical challenge and selected approach.\n3. Discusses trade-offs made against alternative approaches.\n4. Quantifies the technical outcome, latency impact, or operational result.`;
}

/**
 * Deterministic, instant 5-question planner grounded exclusively in the job and candidate profile.
 */
export function generateInterviewQuestions(
  targetJobTitle: string,
  jobPosting: Record<string, unknown> = {},
  ctx: PlanContext = {},
): InterviewQuestion[] {
  const language: InterviewLanguage = ctx.language || "en";
  const {
    mandatorySkills,
    preferredSkills,
    responsibilities,
    company: postCompany,
  } = extractJobElements(jobPosting, targetJobTitle);

  const company = ctx.company || postCompany;
  const level = detectLevel(
    (jobPosting.experience as string) ||
      (jobPosting.generated_posting as StructuredJobLike)?.experience ||
      "",
    targetJobTitle,
  );

  const isDsa =
    /\b(dsa|data structure|algorithm)\b/i.test(targetJobTitle) ||
    mandatorySkills.some((s) => /\b(dsa|data structure|algorithm)\b/i.test(s));

  // --- Slot 1: Intro (phase: "intro") ---
  const q1Text = QUESTION_TEMPLATES.intro[language](targetJobTitle, company);
  const q1: InterviewQuestion = {
    id: "q1_intro",
    phase: "intro",
    phaseLabel: "Candidate Introduction & Role Interest",
    question: q1Text,
    contextHint:
      "Deliver a structured 2-minute overview covering your technical journey, core competencies, and why this position aligns with your goals.",
    expectedKeywords: [targetJobTitle, "experience", "project", "architecture", "impact", "team"],
    idealAnswerOutline:
      "1. Concise summary of professional/academic software engineering background.\n2. Highlight of primary technical skills and strongest project domain.\n3. Specific reasons for wanting to join this role and team.\n4. Structured, articulate verbal delivery.",
    groundedIn: `role:${targetJobTitle}`,
  };

  // --- Slot 2: Technical Depth (phase: "technical") ---
  const primarySkill =
    mandatorySkills[0] || (isDsa ? "Data Structures & Algorithms" : "Core Software Engineering");
  let q2Text: string;
  if (isDsa) {
    q2Text = QUESTION_TEMPLATES.dsaConcept[language](primarySkill);
  } else if (level === "entry") {
    q2Text = QUESTION_TEMPLATES.concept[language](primarySkill);
  } else {
    q2Text = QUESTION_TEMPLATES.tradeOff[language](primarySkill);
  }

  const q2: InterviewQuestion = {
    id: "q2_technical",
    phase: "technical",
    phaseLabel: "Core Domain & Technical Depth",
    question: q2Text,
    contextHint: `Demonstrate depth of knowledge in ${primarySkill}, discussing core internal mechanisms, edge cases, and algorithmic complexity.`,
    expectedKeywords: buildSkillKeywords(primarySkill, [
      "trade-offs",
      "performance",
      "error handling",
    ]),
    idealAnswerOutline: buildIdealAnswerOutline(primarySkill, level),
    groundedIn: `tech_stack:${primarySkill} (mandatory)`,
  };

  // --- Slot 3: Project & Resume Verification (phase: "architecture") ---
  let q3Text: string;
  let q3GroundedIn = "tech_stack:mandatory";
  const evidenceQuote = ctx.analysis?.strengths?.find(
    (s) => s.evidence_quote && s.evidence_quote.trim().length > 10,
  )?.evidence_quote;

  const secondarySkill = mandatorySkills[1] || preferredSkills[0] || primarySkill;

  if (evidenceQuote) {
    const trimmedQuote =
      evidenceQuote.length > 90 ? `${evidenceQuote.slice(0, 87)}...` : evidenceQuote;
    q3Text = QUESTION_TEMPLATES.resumeVerification[language](trimmedQuote);
    q3GroundedIn = `resume:${trimmedQuote}`;
  } else {
    q3Text = QUESTION_TEMPLATES.applied[language](secondarySkill);
    q3GroundedIn = `tech_stack:${secondarySkill} (mandatory)`;
  }

  const q3: InterviewQuestion = {
    id: "q3_architecture",
    phase: "architecture",
    phaseLabel: "Project & Design Depth",
    question: q3Text,
    contextHint:
      "Highlight personal technical ownership, specific architectural decisions, trade-offs made, and measurable outcomes.",
    expectedKeywords: buildSkillKeywords(secondarySkill, [
      "architecture",
      "design",
      "bottlenecks",
      "ownership",
      "outcome",
    ]),
    idealAnswerOutline:
      "1. Clarifies individual contribution vs team scope.\n2. Explains technical design choices and trade-offs made.\n3. Highlights production constraints and how they were resolved.\n4. Reflects critically on retrospective improvements.",
    groundedIn: q3GroundedIn,
  };

  // --- Slot 4: Scenario (phase: "scenario") ---
  const mainResponsibility =
    responsibilities[0] ||
    `building and maintaining reliable software systems for ${targetJobTitle}`;
  const q4Text = QUESTION_TEMPLATES.scenario[language](mainResponsibility);

  const q4: InterviewQuestion = {
    id: "q4_scenario",
    phase: "scenario",
    phaseLabel: "Situational Judgment & Problem Solving",
    question: q4Text,
    contextHint:
      "Demonstrate structured triage: isolating the blast radius, stabilizing production, identifying root causes, and communicating transparently.",
    expectedKeywords: [
      "triage",
      "monitoring",
      "logs",
      "rollback",
      "communication",
      "stakeholders",
      "root cause",
      "post-mortem",
    ],
    idealAnswerOutline:
      "1. Immediate containment: assess blast radius, mitigate impact, or execute rollback.\n2. Root-cause isolation: inspect telemetry, logs, and recent deployments.\n3. Transparent communication: concise updates to team leads and stakeholders.\n4. Prevention: write a blameless post-mortem and add automated regression tests.",
    groundedIn: `responsibilities:${mainResponsibility.slice(0, 60)}`,
  };

  // --- Slot 5: Closing (phase: "closing") ---
  let q5Text: string;
  let q5GroundedIn = "growth:learning";
  const criticalGap = ctx.analysis?.gaps?.find(
    (g) => g.requirement && g.requirement.trim().length > 3,
  )?.requirement;

  const targetClosingSkill =
    criticalGap || preferredSkills[0] || (isDsa ? "System Design" : "Modern Software Engineering");

  if (criticalGap) {
    q5Text = QUESTION_TEMPLATES.gapProbe[language](criticalGap);
    q5GroundedIn = `gap:${criticalGap}`;
  } else {
    q5Text = QUESTION_TEMPLATES.closingLearning[language](targetClosingSkill);
    q5GroundedIn = `tech_stack:${targetClosingSkill} (preferred)`;
  }

  const q5: InterviewQuestion = {
    id: "q5_closing",
    phase: "closing",
    phaseLabel: "Engineering Growth & Wrap-up",
    question: q5Text,
    contextHint:
      "Discuss continuous professional learning, experimentation with new tooling, and how you evaluate long-term code maintainability.",
    expectedKeywords: [
      targetClosingSkill,
      "learning",
      "exploration",
      "best practices",
      "trade-offs",
      "maintainability",
    ],
    idealAnswerOutline:
      "1. Explains motivation for learning or adopting this technology.\n2. Cites a concrete example of hands-on experimentation.\n3. Assesses practical trade-offs and when it is or is not appropriate to use.\n4. Demonstrates self-driven engineering curiosity.",
    groundedIn: q5GroundedIn,
  };

  return [q1, q2, q3, q4, q5];
}

/**
 * Blocklist of companies from old dataset dumps that must never be mentioned
 * unless the job itself is with that company.
 */
const DATASET_COMPANY_BLOCKLIST = [
  "square",
  "mastercard",
  "paypal",
  "goldman sachs",
  "goldman",
  "aws",
  "netflix",
  "uber",
  "airbnb",
  "meta",
  "google",
  "amazon",
  "microsoft",
  "apple",
  "twitter",
  "stripe",
  "lyft",
  "pinterest",
  "spotify",
];

export interface PlanValidationResult {
  valid: boolean;
  errors: string[];
}

/**
 * Validates an LLM-generated plan against strict groundedness and language rules.
 */
export function validatePlan(
  questions: InterviewQuestion[],
  targetJobTitle: string,
  jobPosting: Record<string, unknown> = {},
  ctx: PlanContext = {},
): PlanValidationResult {
  const errors: string[] = [];

  if (!Array.isArray(questions) || questions.length !== 5) {
    errors.push(`Plan must have exactly 5 questions, received ${questions?.length || 0}`);
    return { valid: false, errors };
  }

  const expectedIds = ["q1_intro", "q2_technical", "q3_architecture", "q4_scenario", "q5_closing"];
  const expectedPhases = ["intro", "technical", "architecture", "scenario", "closing"];

  const { mandatorySkills, preferredSkills, responsibilities, company } = extractJobElements(
    jobPosting,
    targetJobTitle,
  );
  const normalizedCompany = (company || "").toLowerCase();
  const language = ctx.language || "en";

  const allJobTerms = [
    targetJobTitle.toLowerCase(),
    ...mandatorySkills.map((s) => s.toLowerCase()),
    ...preferredSkills.map((s) => s.toLowerCase()),
    ...responsibilities.map((r) => r.toLowerCase()),
  ];

  const seenQuestions = new Set<string>();

  for (let i = 0; i < 5; i++) {
    const q = questions[i];
    if (!q) {
      errors.push(`Question at index ${i} is missing`);
      continue;
    }

    if (q.id !== expectedIds[i]) {
      errors.push(`Question ${i + 1} id must be "${expectedIds[i]}", received "${q.id}"`);
    }
    if (q.phase !== expectedPhases[i]) {
      errors.push(`Question ${i + 1} phase must be "${expectedPhases[i]}", received "${q.phase}"`);
    }

    const words = q.question.trim().split(/\s+/).filter(Boolean);
    if (words.length > 40) {
      errors.push(`Question ${i + 1} exceeds 40 words (${words.length} words)`);
    }

    // Near-duplicate check
    const normalizedQ = q.question.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (seenQuestions.has(normalizedQ)) {
      errors.push(`Question ${i + 1} is a duplicate of an earlier question`);
    }
    seenQuestions.add(normalizedQ);

    // Blocklist check: cannot mention third-party companies from old dataset unless it is this job's company
    const lowerQ = q.question.toLowerCase();
    for (const blocked of DATASET_COMPANY_BLOCKLIST) {
      if (lowerQ.includes(blocked) && !normalizedCompany.includes(blocked)) {
        errors.push(`Question ${i + 1} mentions blocked company "${blocked}"`);
      }
    }

    // Script check
    const devanagariMatches = q.question.match(/[\u0900-\u097F]/g) || [];
    const latinMatches = q.question.match(/[a-zA-Z]/g) || [];
    const totalLetters = devanagariMatches.length + latinMatches.length;

    if (language === "hi") {
      const devanagariRatio = totalLetters > 0 ? devanagariMatches.length / totalLetters : 0;
      if (devanagariRatio < 0.45) {
        errors.push(
          `Question ${i + 1} should be in Hindi (Devanagari), but has low Devanagari ratio (${(devanagariRatio * 100).toFixed(0)}%)`,
        );
      }
    } else if (language === "hinglish") {
      const devanagariRatio = totalLetters > 0 ? devanagariMatches.length / totalLetters : 0;
      if (devanagariRatio > 0.15) {
        errors.push(
          `Question ${i + 1} in Hinglish must be in Roman script, found Devanagari characters`,
        );
      }
      const hasHinglishMarkers =
        /\b(aap|kya|kaise|mein|hai|hain|ko|ke|ki|aur|karna|hoga|karein|apna|apne|bhi|se)\b/i.test(
          q.question,
        );
      if (!hasHinglishMarkers && i > 0) {
        errors.push(`Question ${i + 1} does not contain common Hinglish markers`);
      }
    }
  }

  // Grounding check for technical & scenario questions
  const techQuestion = questions[1]?.question.toLowerCase() || "";
  const hasJobSkill = allJobTerms.some(
    (term) =>
      techQuestion.includes(term) || term.includes("software") || term.includes("developer"),
  );
  if (!hasJobSkill) {
    errors.push(
      "Technical question does not contain any skills or role terms from the job posting",
    );
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
