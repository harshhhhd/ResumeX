import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

export const SaveInterviewScorecardSchema = z.object({
  jobId: z.string(),
  studentId: z.string(),
  candidateName: z.string().optional(),
  candidateEmail: z.string().optional(),
  targetJobTitle: z.string().optional(),
  scorecard: z.record(z.unknown()),
  overallScore: z.number().optional(),
});

export type SaveInterviewScorecardInput = z.infer<typeof SaveInterviewScorecardSchema>;

export const saveInterviewScorecardServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => SaveInterviewScorecardSchema.parse(data))
  .handler(async ({ data }) => {
    try {
      const supabaseUrl = process.env.VITE_SUPABASE_URL || "https://vglqudbftkybegdrqdec.supabase.co/";
      const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || "";
      const recruiterEmail = "eigenhire_recruiter@recruiters.eigenhire.online";
      const recruiterPassword = "Hs_Recruiter!2026_xK9mP2vL";

      const client = createClient(supabaseUrl, supabaseKey);
      const { error: authErr } = await client.auth.signInWithPassword({
        email: recruiterEmail,
        password: recruiterPassword,
      });

      if (authErr) {
        console.warn("[saveInterviewScorecardServerFn] Recruiter auth failed:", authErr.message);
      }

      // Query existing application for this job & student
      const { data: existingApp } = await client
        .from("applications")
        .select("id, match_report, match_score")
        .eq("job_id", data.jobId)
        .eq("student_id", data.studentId)
        .maybeSingle();

      const existingReport = (existingApp?.match_report || {}) as Record<string, unknown>;
      const score = data.overallScore ?? (data.scorecard as any)?.overallScore ?? 80;

      const updatedReport = {
        ...existingReport,
        candidate_name: data.candidateName || existingReport.candidate_name,
        candidate_email: data.candidateEmail || existingReport.candidate_email,
        target_role: data.targetJobTitle || existingReport.target_role,
        interview_scorecard: data.scorecard,
        overallScore: score,
        stage: "interview_completed",
      };

      if (existingApp?.id) {
        const { error: updateErr } = await client
          .from("applications")
          .update({
            match_report: updatedReport,
            match_score: existingApp.match_score ?? score,
            status: "under_review",
            result_published: true,
          })
          .eq("id", existingApp.id);

        if (updateErr) {
          console.error("[saveInterviewScorecardServerFn] Update error:", updateErr);
          return { success: false, error: updateErr.message };
        }
        return { success: true };
      } else {
        const { error: insertErr } = await client
          .from("applications")
          .insert({
            job_id: data.jobId,
            student_id: data.studentId,
            match_score: score,
            match_report: updatedReport,
            status: "under_review",
            result_published: true,
          });

        if (insertErr) {
          console.error("[saveInterviewScorecardServerFn] Insert error:", insertErr);
          return { success: false, error: insertErr.message };
        }
        return { success: true };
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("[saveInterviewScorecardServerFn] Catastrophic failure:", msg);
      return { success: false, error: msg };
    }
  });
