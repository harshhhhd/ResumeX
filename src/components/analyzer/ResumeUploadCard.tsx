// Candidate Resume Upload & Intake Component — Redesigned
import { useState } from "react";
import {
  FileText,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  X,
  User,
  Mail,
  Loader2,
  AlertCircle,
  ShieldCheck,
  UploadCloud,
  Code2,
  FileCode,
  Check,
} from "lucide-react";
import { FileUpload } from "@/components/ui/file-upload";
import { extractTextFromDocument, extractContactInfo } from "@/lib/document-parser";

export interface ResumeUploadData {
  candidateName: string;
  candidateEmail: string;
  preferredLanguage: "en" | "hi" | "code_mixed";
  resumeText: string;
  resumeBase64?: string;
  fileName: string;
}

interface ResumeUploadCardProps {
  onAnalyze: (data: ResumeUploadData) => void;
  isLoading: boolean;
  jobTitle: string;
  companyName: string;
  defaultName?: string;
  defaultEmail?: string;
}

const DEMO_RESUME = `Aarav Sharma
aarav.sharma@example.com | +91 98765 43210 | Bengaluru, India
GitHub: github.com/aaravsharma | Portfolio: aarav.dev

PROFESSIONAL SUMMARY
Senior Frontend & Full Stack Engineer with 4+ years of hands-on experience architecting modern React, TypeScript, and Next.js web applications. Strong expertise in building modular UI component systems, RESTful API integrations, responsive Tailwind CSS layouts, and client-side performance optimization. Passionate about developer tooling, clean code architectures, and high-fidelity user experiences.

TECHNICAL SKILLS
- Languages: TypeScript, JavaScript (ES6+), Python, HTML5, CSS3, SQL
- Frontend: React 18/19, Next.js, TanStack Router, Redux Toolkit, React Query, Tailwind CSS, Framer Motion
- Backend: Node.js, Express, FastAPI, PostgreSQL, Supabase, Redis
- Tools & DevOps: Git, GitHub Actions, Docker, Vite, Webpack, Vitest, Jest

WORK EXPERIENCE
Senior Frontend Engineer | TechSpire Solutions (Bengaluru, India)
June 2022 – Present
- Architected the core candidate dashboard using React, TypeScript, and Tailwind CSS, reducing bundle size by 38% and boosting Lighthouse score to 96.
- Led integration of complex REST and GraphQL endpoints with automated React Query cache synchronization.
- Mentored 4 junior engineers on clean component decomposition and state management patterns.
- Partnered closely with product designers to establish an accessible, WCAG AA-compliant design token library.

Software Engineer | Innovate Labs (Remote)
July 2020 – May 2022
- Developed scalable customer-facing web applications using React, Node.js, and PostgreSQL.
- Implemented real-time collaboration features using WebSockets and background sync.
- Configured CI/CD automated test pipelines using GitHub Actions, ensuring zero-regression releases.

SELECTED PROJECTS
- HireFlow: AI-assisted recruitment portal built with React, TypeScript, Tailwind CSS, and Supabase. Features real-time applicant tracking and automated resume parsing.
- PulseUI: Accessible open-source component library in React & Tailwind CSS with 1,200+ GitHub stars.

EDUCATION
Bachelor of Technology in Computer Science & Engineering
National Institute of Technology Karnataka (NITK Surathkal) | 2016 – 2020 | CGPA: 8.7/10`;

export function ResumeUploadCard({
  onAnalyze,
  isLoading,
  jobTitle,
  companyName,
  defaultName = "",
  defaultEmail = "",
}: ResumeUploadCardProps) {
  const [activeTab, setActiveTab] = useState<"upload" | "text">("upload");
  const [candidateName, setCandidateName] = useState(defaultName);
  const [candidateEmail, setCandidateEmail] = useState(defaultEmail);
  const [resumeText, setResumeText] = useState("");
  const [resumeBase64, setResumeBase64] = useState<string>("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractionSuccess, setExtractionSuccess] = useState<string | null>(null);

  const handleFile = async (file: File) => {
    setFileError(null);
    setExtractionSuccess(null);
    if (!file) return;

    const validExtensions = [".pdf", ".docx", ".txt", ".md"];
    const ext = "." + file.name.split(".").pop()?.toLowerCase();

    if (
      !validExtensions.includes(ext) &&
      !file.type.includes("pdf") &&
      !file.type.includes("text")
    ) {
      setFileError("Please upload a PDF, DOCX, or TXT document.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setFileError("File size exceeds 10MB limit.");
      return;
    }

    try {
      setIsExtracting(true);
      setUploadedFile(file);
      setUploadedFileName(file.name);

      const arrayBuffer = await file.arrayBuffer();

      // Convert array buffer to base64
      let binary = "";
      const bytes = new Uint8Array(arrayBuffer);
      const len = bytes.byteLength;
      for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      const b64 = btoa(binary);
      setResumeBase64(b64);

      // Extract real text from document
      const extractedText = await extractTextFromDocument(arrayBuffer, file.name);

      if (!extractedText || extractedText.trim().length < 20) {
        throw new Error(
          "No readable text could be extracted from this document. It might be scanned as an image. Please paste your resume text in the 'Paste text / Edit' tab.",
        );
      }

      setResumeText(extractedText);

      // Heuristically detect candidate contact info if user hasn't typed anything
      const detected = extractContactInfo(extractedText);
      if (detected.name && !candidateName) {
        setCandidateName(detected.name);
      }
      if (detected.email && !candidateEmail) {
        setCandidateEmail(detected.email);
      }

      setExtractionSuccess(
        `Parsed ${extractedText.length.toLocaleString()} characters from "${file.name}"${
          detected.name ? ` · Identified: ${detected.name}` : ""
        }`,
      );
    } catch (err: unknown) {
      console.error("Resume file extraction failure:", err);
      const msg =
        err instanceof Error
          ? err.message
          : "Failed to parse document text. Please paste your resume text.";
      setFileError(msg);
    } finally {
      setIsExtracting(false);
    }
  };

  const handleLoadDemo = () => {
    const demoBlob = new Blob([DEMO_RESUME], { type: "text/plain" });
    const demoFile = new File([demoBlob], "Aarav_Sharma_Resume.txt", { type: "text/plain" });
    setUploadedFile(demoFile);
    setCandidateName("Aarav Sharma");
    setCandidateEmail("aarav.sharma@example.com");
    setUploadedFileName("Aarav_Sharma_Demo_Resume.pdf");
    setResumeText(DEMO_RESUME);
    setExtractionSuccess(
      'Loaded demo profile: Aarav Sharma (Senior Frontend & Full Stack Engineer)',
    );
    setActiveTab("text");
  };

  const handleClearFile = () => {
    setUploadedFile(null);
    setUploadedFileName(null);
    setResumeText("");
    setResumeBase64("");
    setExtractionSuccess(null);
    setFileError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalContent = resumeText.trim();

    if (!finalContent || finalContent.length < 30) {
      setFileError(
        "Please upload a resume file with readable text or paste your resume content in the 'Paste text / Edit' tab.",
      );
      return;
    }

    onAnalyze({
      candidateName: candidateName.trim() || "Candidate",
      candidateEmail: candidateEmail.trim(),
      preferredLanguage: "en",
      resumeText: finalContent,
      resumeBase64: resumeBase64 || undefined,
      fileName: uploadedFileName || "pasted-resume.txt",
    });
  };

  return (
    <div className="rounded-3xl border border-white/12 bg-gradient-to-b from-[#141724]/95 via-[#0e101a]/95 to-[#080a11]/98 p-7 sm:p-9 backdrop-blur-2xl shadow-[0_28px_70px_rgba(0,0,0,0.85),inset_0_1px_0_0_rgba(255,255,255,0.15)] space-y-7">
      {/* Top Telemetry Header & Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-[11px] font-mono font-medium text-blue-400 border border-blue-500/30">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              STAGE 02 // DETERMINISTIC INTAKE
            </span>
          </div>
          <h2 className="text-[24px] sm:text-[30px] font-semibold tracking-tight text-white">
            Submit candidate resume.
          </h2>
          <p className="mt-1 text-[14px] text-zinc-400">
            Our AST parser extracts qualification receipts and generates transparent match metrics against{" "}
            <span className="text-white font-medium">{jobTitle}</span>.
          </p>
        </div>

        {/* 1-Click Demo Profile Button */}
        <button
          type="button"
          onClick={handleLoadDemo}
          className="inline-flex h-10 items-center gap-2 self-start sm:self-center rounded-xl bg-white/[0.06] hover:bg-white/10 border border-white/12 px-4 text-[12px] font-mono font-medium text-white transition-all hover:border-blue-400/40 hover:shadow-[0_0_16px_rgba(37,99,235,0.25)] shrink-0 active:scale-[0.98] cursor-pointer"
        >
          <Sparkles size={14} className="text-blue-400" />
          <span>Load sample profile</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Candidate Information 2-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2 rounded-2xl border border-white/[0.08] bg-black/40 p-4 backdrop-blur-sm focus-within:border-blue-500/60 transition-colors">
            <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <User size={12} className="text-blue-400" />
                <span>Candidate Name</span>
              </span>
              <span className="text-zinc-600 font-normal">Auto-detected from file</span>
            </label>
            <input
              type="text"
              required
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              placeholder="e.g. Aarav Sharma"
              className="w-full h-9 bg-transparent border-0 text-[14px] font-medium text-white placeholder:text-zinc-600 focus:outline-none"
            />
          </div>

          <div className="space-y-2 rounded-2xl border border-white/[0.08] bg-black/40 p-4 backdrop-blur-sm focus-within:border-blue-500/60 transition-colors">
            <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Mail size={12} className="text-blue-400" />
                <span>Contact Email</span>
              </span>
              <span className="text-zinc-600 font-normal">For evaluation updates</span>
            </label>
            <input
              type="email"
              value={candidateEmail}
              onChange={(e) => setCandidateEmail(e.target.value)}
              placeholder="e.g. aarav.sharma@example.com"
              className="w-full h-9 bg-transparent border-0 text-[14px] font-medium text-white placeholder:text-zinc-600 focus:outline-none"
            />
          </div>
        </div>

        {/* Input Mode Tabs: Upload Document vs Paste Text */}
        <div className="space-y-3.5">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-1.5 bg-black/50 p-1.5 rounded-xl border border-white/[0.08]">
              <button
                type="button"
                onClick={() => setActiveTab("upload")}
                className={`h-8 px-4 rounded-lg font-mono text-[12px] font-medium transition-all cursor-pointer ${
                  activeTab === "upload"
                    ? "bg-blue-600 text-white shadow-[0_2px_12px_rgba(37,99,235,0.4)]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Document Upload
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("text")}
                className={`h-8 px-4 rounded-lg font-mono text-[12px] font-medium transition-all cursor-pointer ${
                  activeTab === "text"
                    ? "bg-blue-600 text-white shadow-[0_2px_12px_rgba(37,99,235,0.4)]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Verbatim Text (
                {resumeText ? `${resumeText.length.toLocaleString()} chars` : "empty"})
              </button>
            </div>

            {uploadedFileName && (
              <span className="text-[12px] font-mono text-zinc-300 flex items-center gap-2 bg-black/50 px-3.5 py-1.5 rounded-xl border border-white/[0.08]">
                <FileText size={13} className="text-blue-400" />
                <span className="font-semibold text-white truncate max-w-[220px]">
                  {uploadedFileName}
                </span>
                <button
                  type="button"
                  onClick={handleClearFile}
                  className="hover:text-rose-400 ml-1 text-zinc-500 transition-colors cursor-pointer"
                  title="Remove file"
                >
                  <X size={13} />
                </button>
              </span>
            )}
          </div>

          {/* Extraction status banner */}
          {isExtracting && (
            <div className="rounded-xl bg-blue-500/10 p-4 border border-blue-500/20 flex items-center justify-center gap-2.5 font-mono text-[12px] text-blue-300">
              <Loader2 size={16} className="animate-spin text-blue-400" />
              <span>Parsing and extracting semantic entities from {uploadedFileName}...</span>
            </div>
          )}

          {extractionSuccess && !isExtracting && (
            <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/25 px-4 py-3 flex items-center justify-between gap-2 font-mono text-[12px] text-emerald-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="shrink-0" />
                <span>{extractionSuccess}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab("text")}
                className="underline hover:text-emerald-300 text-[11px] font-semibold shrink-0 cursor-pointer"
              >
                Review extracted text &rarr;
              </button>
            </div>
          )}

          {activeTab === "upload" ? (
            <div className="pt-1">
              <FileUpload
                onChange={(files) => {
                  if (files.length > 0) {
                    handleFile(files[0]);
                  }
                }}
                onFileRemove={() => handleClearFile()}
                files={uploadedFile ? [uploadedFile] : []}
                accept={{
                  "application/pdf": [".pdf"],
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
                    ".docx",
                  ],
                  "text/plain": [".txt", ".md"],
                }}
                disabled={isExtracting}
                title="Upload resume document"
                description="Drag or drop your PDF, DOCX, or TXT resume here or click to browse"
              />
            </div>
          ) : (
            <div className="space-y-2">
              <textarea
                rows={10}
                value={resumeText}
                onChange={(e) => {
                  setResumeText(e.target.value);
                  const detected = extractContactInfo(e.target.value);
                  if (detected.name && !candidateName) setCandidateName(detected.name);
                  if (detected.email && !candidateEmail) setCandidateEmail(detected.email);
                }}
                placeholder="Paste the text of the resume here (Summary, Skills, Work Experience, Education, Projects)..."
                className="w-full p-4 rounded-2xl bg-black/50 border border-white/10 text-[13px] font-mono leading-relaxed text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/80 transition-colors"
              />
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Deterministic AST parser compares this exact text against requirements.</span>
                <span>{resumeText.length.toLocaleString()} characters</span>
              </div>
            </div>
          )}

          {fileError && (
            <div className="rounded-xl bg-rose-500/10 border border-rose-500/20 p-3.5 flex items-center gap-2 font-mono text-[12px] text-rose-300">
              <AlertCircle size={15} className="shrink-0 text-rose-400" />
              <span>{fileError}</span>
            </div>
          )}
        </div>

        {/* Action Button & Responsible AI Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-3 gap-4 border-t border-white/[0.08]">
          <div className="flex items-center gap-2 text-[12px] text-zinc-400 font-mono">
            <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
            <span>
              PII Boundary: Evaluated strictly against role criteria. No demographic traits used.
            </span>
          </div>

          <button
            type="submit"
            disabled={isLoading || isExtracting}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#2563eb] to-[#1d4ed8] hover:from-[#3b82f6] hover:to-[#2563eb] px-7 text-[14px] font-semibold text-white shadow-[0_0_24px_rgba(37,99,235,0.4),inset_0_1px_0_0_rgba(255,255,255,0.3)] transition-all active:scale-[0.98] disabled:opacity-60 cursor-pointer border border-blue-400/30 shrink-0"
          >
            {isLoading ? (
              <>
                <Loader2 size={16} className="animate-spin text-white" />
                <span>Computing compatibility matrix...</span>
              </>
            ) : (
              <>
                <Sparkles size={16} />
                <span>Analyze qualifications & verify fit</span>
                <ArrowRight size={15} />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
