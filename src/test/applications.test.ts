import { describe, it, expect, beforeEach } from "vitest";
import {
  recordJobOpened,
  recordResumeUploaded,
  recordConsentAndLanguage,
  recordInterviewStarted,
  recordInterviewProgress,
  recordInterviewCompleted,
  getApplication,
  findApplicationForJob,
  listApplications,
  getApplicationCardStatus,
  getApplicationCtaLabel,
  getApplicationProgressTracker,
} from "@/lib/applications";
import type { InterviewScorecard } from "@/lib/ai-interview";

describe("Application State & Persistence Repository", () => {
  const userId = "test_candidate_123";
  const jobId = "job_fe_456";

  beforeEach(() => {
    localStorage.clear();
  });

  it("records job opened idempotently", () => {
    const app1 = recordJobOpened(userId, jobId);
    expect(app1.stage).toBe("applied");
    expect(app1.userId).toBe(userId);
    expect(app1.jobId).toBe(jobId);

    const app2 = recordJobOpened(userId, jobId);
    expect(app2.id).toBe(app1.id);
    expect(app2.stage).toBe("applied");
  });

  it("records resume upload and progresses stage", () => {
    recordJobOpened(userId, jobId);
    const updated = recordResumeUploaded(
      userId,
      jobId,
      {
        fileName: "Aarav_Resume.pdf",
        parsedSummary: "4 years React and TypeScript",
      },
      "en",
    );

    expect(updated.stage).toBe("resume_uploaded");
    expect(updated.resume.fileName).toBe("Aarav_Resume.pdf");
    expect(updated.language).toBe("en");

    const retrieved = getApplication(userId, jobId);
    expect(retrieved).not.toBeNull();
    expect(retrieved?.stage).toBe("resume_uploaded");
  });

  it("records consent, language selection, and interview lifecycle", () => {
    recordResumeUploaded(
      userId,
      jobId,
      {
        fileName: "Aarav_Resume.pdf",
      },
      "en",
    );

    const withConsent = recordConsentAndLanguage(userId, jobId, "hi");
    expect(withConsent.stage).toBe("interview_pending");
    expect(withConsent.language).toBe("hi");
    expect(withConsent.consent?.acceptedAt).toBeDefined();

    const inProgress = recordInterviewStarted(userId, jobId, "sess_abc");
    expect(inProgress.stage).toBe("interview_in_progress");
    expect(inProgress.interviewSessionId).toBe("sess_abc");

    const stepped = recordInterviewProgress(userId, jobId, {
      currentIdx: 3,
      answers: { q1: "test answer" },
      durations: { q1: 25 },
      sessionSeconds: 120,
    });
    expect(stepped.stage).toBe("interview_in_progress");
    expect(stepped.interviewProgress?.currentIdx).toBe(3);

    const mockScorecard: InterviewScorecard = {
      candidateName: "Aarav Sharma",
      targetJobTitle: "Frontend Engineer",
      overallScore: 84,
      fitVerdict: "Strong Fit",
      completedAt: new Date().toISOString(),
      durationFormatted: "12m 30s",
      evaluationSource: "deterministic",
      modelUsed: "deterministic",
      lowConfidence: false,
      language: "en",
      categories: {
        technicalAccuracy: 85,
        communicationClarity: 82,
        problemSolving: 85,
        practicalEvidence: 84,
      },
      answers: [],
      keyTakeaways: ["Clean architecture"],
      gaps: ["None critical"],
      recruiterVerificationNotes: ["Verify deep async patterns"],
    };

    const completed = recordInterviewCompleted(userId, jobId, mockScorecard);
    expect(completed.stage).toBe("interview_completed");
    expect(completed.resultSummary?.overallScore).toBe(84);
    expect(completed.resultSummary?.fitVerdict).toBe("Strong Fit");

    const allApps = listApplications(userId);
    expect(allApps).toHaveLength(1);
    expect(allApps[0]!.stage).toBe("interview_completed");
  });

  it("generates correct card statuses and detail progress trackers", () => {
    const resumeApp = recordResumeUploaded(
      userId,
      jobId,
      {
        fileName: "Aarav.pdf",
      },
      "en",
    );

    const cardStatus = getApplicationCardStatus(resumeApp);
    expect(cardStatus).toBe("Resume uploaded");

    const ctaLabel = getApplicationCtaLabel(resumeApp);
    expect(ctaLabel).toBe("Continue to interview");

    const tracker = getApplicationProgressTracker(resumeApp);
    expect(tracker.steps[0]!.state).toBe("done"); // Applied
    expect(tracker.steps[1]!.state).toBe("done"); // Resume
    expect(tracker.steps[2]!.state).toBe("current"); // Interview
    expect(tracker.steps[3]!.state).toBe("upcoming"); // Results
  });

  it("finds applications synchronously via findApplicationForJob without flash", () => {
    recordResumeUploaded(
      userId,
      jobId,
      {
        fileName: "Synchronous_Resume.pdf",
      },
      "hi",
    );

    const found = findApplicationForJob(jobId, userId);
    expect(found).not.toBeNull();
    expect(found?.resume.fileName).toBe("Synchronous_Resume.pdf");
    expect(found?.language).toBe("hi");

    // Also finds across user keys when preferredUserId is omitted
    const foundAny = findApplicationForJob(jobId);
    expect(foundAny).not.toBeNull();
    expect(foundAny?.jobId).toBe(jobId);
  });
});
