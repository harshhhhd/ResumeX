import { useState } from "react";
import { Bookmark, MapPin, Users } from "lucide-react";
import type { Job, StructuredJobListing } from "@/types/database.types";
import { CompanyLogo } from "@/components/CompanyLogo";
import { type ApplicationRecord, getApplicationCardStatus } from "@/lib/applications";

interface JobCardProps {
  job: Job;
  isSelected?: boolean;
  onSelect: (job: Job) => void;
  isRecruiter?: boolean;
  application?: ApplicationRecord | null;
  isBookmarked?: boolean;
  onToggleBookmark?: (jobId: string) => void;
  onEdit?: (job: Job) => void;
  onToggleStatus?: (job: Job) => void;
  applicantCount?: number;
}

export function JobCard({
  job,
  isSelected = false,
  onSelect,
  isRecruiter = false,
  application = null,
  isBookmarked: externalBookmarked,
  onToggleBookmark,
  applicantCount,
}: JobCardProps) {
  const [internalBookmarked, setInternalBookmarked] = useState(false);
  const isBookmarked = externalBookmarked !== undefined ? externalBookmarked : internalBookmarked;

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onToggleBookmark) {
      onToggleBookmark(job.id);
    } else {
      setInternalBookmarked(!internalBookmarked);
    }
  };

  // Parse structured data safely
  const structured = (job.generated_posting || {}) as Partial<StructuredJobListing>;
  const isDraft = job.status === "draft";

  // Check if job is "New" (created within last 5 days)
  const isNew = (() => {
    const createdDate = new Date(job.created_at).getTime();
    const now = Date.now();
    return now - createdDate < 5 * 24 * 60 * 60 * 1000;
  })();

  const salaryDisplay = job.salary_display || structured.salary?.display || "Salary not specified";

  const workMode = job.work_mode || structured.work_mode;
  const location = job.location || structured.location || "Location not specified";
  const employmentType = job.job_type || structured.employment_type || "Full-time";

  const topTech = (structured.tech_stack || []).slice(0, 3);
  const applicationStatus = getApplicationCardStatus(application);

  return (
    <article
      onClick={() => onSelect(job)}
      className={`group relative cursor-pointer rounded-[18px] p-5 text-left border transition-all duration-200 ${
        isSelected
          ? "bg-gradient-to-b from-[#141824] to-[#0c0e15] border-blue-500/50 shadow-[0_12px_32px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.15)] ring-1 ring-blue-500/20"
          : "bg-gradient-to-b from-[#10121a]/90 to-[#0a0c12]/90 border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.06)] hover:border-white/[0.18] hover:from-[#141722] hover:to-[#0d0f16] hover:shadow-[0_12px_28px_rgba(0,0,0,0.6)] hover:-translate-y-0.5"
      }`}
    >
      {/* Active Selection Accent Pillar */}
      {isSelected && (
        <span
          className="absolute left-0 top-5 bottom-5 w-1 rounded-r-full bg-[#0066ff] shadow-[0_0_14px_#0066ff]"
          aria-hidden="true"
        />
      )}
      {/* Top Chips Row */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          {isNew && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-blue-500/15 text-blue-400 text-[10px] font-mono font-[700] uppercase tracking-wide border border-blue-500/30">
              NEW
            </span>
          )}

          {/* Applied Status Pill vs Accent Easily Apply */}
          {!isRecruiter && applicationStatus ? (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[11px] font-[600] border border-emerald-500/25">
              {applicationStatus}
            </span>
          ) : !isRecruiter ? (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-[#0066ff]/15 text-[#60a5fa] text-[11px] font-[600] border border-[#0066ff]/30">
              Easily apply
            </span>
          ) : null}

          {workMode && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/[0.05] text-zinc-400 text-[11px] font-[500] border border-white/[0.06] capitalize">
              {workMode}
            </span>
          )}

          {isRecruiter && (
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-[600] border ${
                isDraft
                  ? "bg-zinc-800/60 text-zinc-400 border-white/[0.08]"
                  : "bg-blue-500/15 text-blue-400 border-blue-500/30"
              }`}
            >
              {isDraft ? "Draft" : "Published"}
            </span>
          )}

          {isRecruiter && (
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-[600] border transition-all ${
                applicantCount !== undefined && applicantCount > 0
                  ? "bg-white/[0.08] text-white border-white/20 font-[650]"
                  : "bg-white/[0.03] text-zinc-400 border-white/[0.06]"
              }`}
            >
              <Users
                size={11}
                className={applicantCount !== undefined && applicantCount > 0 ? "text-white" : "text-zinc-500"}
              />
              <span>
                {applicantCount !== undefined
                  ? `${applicantCount} Candidate${applicantCount !== 1 ? "s" : ""}`
                  : "Applicants"}
              </span>
            </span>
          )}
        </div>

        {/* Bookmark Icon Button */}
        <button
          type="button"
          onClick={handleBookmarkClick}
          aria-label={isBookmarked ? "Remove bookmark" : "Bookmark job"}
          className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
        >
          <Bookmark size={15} className={isBookmarked ? "fill-white text-white" : ""} />
        </button>
      </div>

      {/* Job Title & Company */}
      <h3 className="text-[17px] font-[650] leading-snug tracking-tight text-white group-hover:text-blue-200 transition-colors">
        {job.title}
      </h3>

      <div className="mt-1.5 flex items-center gap-2 text-[13px] text-zinc-400 font-[450]">
        <CompanyLogo name={job.company_name} size="xs" />
        <span className="font-[600] text-zinc-200">{job.company_name}</span>
        <span>•</span>
        <span className="inline-flex items-center gap-1">
          <MapPin size={12} className="text-zinc-500" />
          <span>{location}</span>
        </span>
      </div>

      {/* Salary & Details Chips */}
      <div className="mt-3.5 flex items-center gap-2 flex-wrap">
        <span className="inline-flex items-center px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-[12px] font-mono font-[600] border border-blue-500/25">
          {salaryDisplay}
        </span>

        {employmentType && (
          <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white/[0.04] text-zinc-400 text-[12px] font-[450] border border-white/[0.06]">
            {employmentType}
          </span>
        )}
      </div>

      {/* Tech Stack Previews */}
      {topTech.length > 0 && (
        <div className="mt-3.5 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 flex-wrap">
          {topTech.map((tech, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white/[0.04] text-[11px] font-mono text-zinc-300 border border-white/[0.06]"
            >
              <span>{tech.canonical_name || tech.name}</span>
            </span>
          ))}
          {structured.tech_stack && structured.tech_stack.length > 3 && (
            <span className="text-[11px] font-mono text-zinc-500">
              +{structured.tech_stack.length - 3} more
            </span>
          )}
        </div>
      )}
    </article>
  );
}
