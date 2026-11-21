import { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  Cpu,
  Layers,
  FileCheck2,
  Sliders,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Fingerprint,
} from "lucide-react";
import { Reveal, EASE } from "./motion";

function GlowCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.10] bg-[#0c0e15]/85 p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] ${className}`}
    >
      {/* Specular Radial Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.12), transparent 40%)`,
        }}
        aria-hidden="true"
      />
      {/* Top Edge Specular Highlight */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function BentoShowcase() {
  const reduce = useReducedMotion();
  const [activeSkill, setActiveSkill] = useState<"fastapi" | "postgres" | "docker">("fastapi");
  const [technicalWeight, setTechnicalWeight] = useState(40);

  const skillEvidence = {
    fastapi: {
      line: 14,
      snippet: 'Architected high-throughput microservices using FastAPI & Pydantic with <20ms p99 latency.',
      status: 'Passed · High Relevance',
      score: '96%',
    },
    postgres: {
      line: 22,
      snippet: 'Designed normalized PostgreSQL schema, indexing strategies, and automated read-replicas.',
      status: 'Passed · Mandatory Gate Met',
      score: '92%',
    },
    docker: {
      line: 38,
      snippet: 'Containerized multi-stage Python workloads and deployed production ECS clusters with Terraform.',
      status: 'Passed · Production Evidence',
      score: '88%',
    },
  };

  return (
    <section id="capabilities" className="container-x py-24 sm:py-32">
      {/* Header */}
      <Reveal>
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-[#141414] px-3.5 py-1 text-[11px] font-[600] text-[#f5f5f5] uppercase tracking-wider mb-4">
            <Sparkles size={12} className="text-[#0066ff]" />
            <span>Architecture & Capabilities</span>
          </div>
          <h2 className="text-h2 text-[#f5f5f5]">
            Engineered for proof. Not black boxes.
          </h2>
          <p className="mt-4 text-[17px] text-[#8a8a8a] max-w-[620px] font-[300] leading-relaxed">
            Every match is supported by verified source spans, customizable multi-criteria rubrics, and an immutable recruiter audit log.
          </p>
        </div>
      </Reveal>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Card 1: Evidence Source Span Tracer (Spans 7 cols) */}
        <Reveal className="md:col-span-7">
          <GlowCard className="h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-white/[0.06] border border-white/[0.10]">
                    <FileCheck2 size={18} className="text-[#f5f5f5]" />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-[650] text-[#f5f5f5]">Evidence Span Tracer</h3>
                    <p className="text-[12px] text-[#8a8a8a]">Interactive resume evidence grounding</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1a1a1a] px-3 py-1 text-[11px] font-[600] text-[#0066ff] border border-[#0066ff]/25">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0066ff]" />
                  Verifiable
                </span>
              </div>

              <p className="text-[13px] text-[#8a8a8a] mb-5">
                Click any candidate requirement to reveal its verified resume line span and grounding score.
              </p>

              {/* Skill Pill Selector */}
              <div className="flex flex-wrap gap-2 mb-6">
                {(["fastapi", "postgres", "docker"] as const).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveSkill(key)}
                    className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-[12px] font-[600] transition-all cursor-pointer ${
                      activeSkill === key
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_2px_12px_rgba(37,99,235,0.4)] border border-blue-400/30"
                        : "bg-white/[0.04] text-zinc-400 border border-white/[0.08] hover:border-white/[0.2] hover:text-white"
                    }`}
                  >
                    <CheckCircle2 size={13} className={activeSkill === key ? "text-white" : "text-zinc-500"} />
                    <span className="capitalize">{key === "fastapi" ? "FastAPI" : key === "postgres" ? "PostgreSQL" : "Docker"}</span>
                  </button>
                ))}
              </div>

              {/* Source Span Box */}
              <div className="rounded-[16px] border border-white/[0.10] bg-[#0c0c0e] p-4 space-y-3 font-mono text-[12px]">
                <div className="flex items-center justify-between text-[#707070] text-[11px] pb-2 border-b border-white/[0.06]">
                  <span>RESUME_SOURCE_SPAN : LINE {skillEvidence[activeSkill].line}</span>
                  <span className="text-[#0066ff] font-semibold">{skillEvidence[activeSkill].score} MATCH</span>
                </div>
                <p className="text-[#f5f5f5] leading-relaxed font-sans text-[13px]">
                  "{skillEvidence[activeSkill].snippet}"
                </p>
                <div className="flex items-center gap-2 pt-1 text-[11px] text-[#8a8a8a]">
                  <ShieldCheck size={13} className="text-[#0066ff]" />
                  <span>Status: <strong className="text-[#f5f5f5] font-semibold">{skillEvidence[activeSkill].status}</strong></span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[12px] text-[#707070]">
              <span>Zero hallucinations · Explicit text citations</span>
              <span className="text-[#f5f5f5] font-semibold">Deterministic</span>
            </div>
          </GlowCard>
        </Reveal>

        {/* Card 2: Multi-Criteria Rubric Breakdown (Spans 5 cols) */}
        <Reveal className="md:col-span-5" delay={0.1}>
          <GlowCard className="h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-white/[0.06] border border-white/[0.10]">
                  <Sliders size={18} className="text-[#f5f5f5]" />
                </div>
                <div>
                  <h3 className="text-[17px] font-[650] text-[#f5f5f5]">Hybrid Scoring Matrix</h3>
                  <p className="text-[12px] text-[#8a8a8a]">Configurable 6-factor weight rubric</p>
                </div>
              </div>

              <div className="space-y-3.5 my-6">
                <div>
                  <div className="flex justify-between text-[12px] mb-1.5">
                    <span className="text-[#f5f5f5] font-[500]">Technical Skills (Mandatory)</span>
                    <span className="text-[#8a8a8a] font-mono">40%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/[0.06] overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-[#0066ff]"
                      initial={{ width: 0 }}
                      animate={{ width: "40%" }}
                      transition={{ duration: 1, ease: EASE }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[12px] mb-1.5">
                    <span className="text-[#f5f5f5] font-[500]">Relevant Experience Depth</span>
                    <span className="text-[#8a8a8a] font-mono">20%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/[0.06] overflow-hidden">
                    <motion.div
                      className="h-full bg-[#f5f5f5]"
                      initial={{ width: 0 }}
                      animate={{ width: "20%" }}
                      transition={{ duration: 1, ease: EASE, delay: 0.1 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[12px] mb-1.5">
                    <span className="text-[#f5f5f5] font-[500]">Project Relevance</span>
                    <span className="text-[#8a8a8a] font-mono">15%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/[0.06] overflow-hidden">
                    <motion.div
                      className="h-full bg-[#8a8a8a]"
                      initial={{ width: 0 }}
                      animate={{ width: "15%" }}
                      transition={{ duration: 1, ease: EASE, delay: 0.2 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[12px] mb-1.5">
                    <span className="text-[#f5f5f5] font-[500]">Responsibilities & Evidence Quality</span>
                    <span className="text-[#8a8a8a] font-mono">25%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/[0.06] overflow-hidden">
                    <motion.div
                      className="h-full bg-white/40"
                      initial={{ width: 0 }}
                      animate={{ width: "25%" }}
                      transition={{ duration: 1, ease: EASE, delay: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[12px] text-[#707070]">
              <span>Candidate gates: Explicit rules only</span>
              <span className="text-[#0066ff] font-semibold">Audit Ready</span>
            </div>
          </GlowCard>
        </Reveal>

        {/* Card 3: Immutable Recruiter Audit Ledger (Spans 12 cols) */}
        <Reveal className="md:col-span-12" delay={0.15}>
          <GlowCard className="h-full flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-white/[0.06] border border-white/[0.10]">
                    <Fingerprint size={18} className="text-[#f5f5f5]" />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-[650] text-[#f5f5f5]">Immutable Audit Ledger</h3>
                    <p className="text-[12px] text-[#8a8a8a]">Complete transparency & recruiter accountability</p>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full self-start sm:self-auto">
                  100% AUDITABLE
                </span>
              </div>

              <p className="text-[13px] text-[#8a8a8a] mb-5 max-w-[720px]">
                Every threshold filter, skill alias normalization, candidate score calculation, and recruiter manual override is permanently logged with tamper-proof timestamps.
              </p>

              {/* Ledger Events Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-2">
                <div className="rounded-[14px] bg-[#0c0c0e] border border-white/[0.06] p-4 text-[12px] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-[#707070] font-mono mb-2">
                      <span>STEP 01</span>
                      <span className="text-emerald-400">00:02ms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                      <span className="text-[#f5f5f5] font-semibold">PII Isolation & Bias Scrub</span>
                    </div>
                    <p className="mt-2 text-[11px] text-zinc-400 leading-relaxed">
                      Names and demographic attributes removed before semantic matching space evaluation.
                    </p>
                  </div>
                  <span className="mt-3 text-[10px] text-zinc-500 font-mono">Enclave Gate Met</span>
                </div>

                <div className="rounded-[14px] bg-[#0c0c0e] border border-white/[0.06] p-4 text-[12px] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-[#707070] font-mono mb-2">
                      <span>STEP 02</span>
                      <span className="text-blue-400">00:07ms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#0066ff] shrink-0" />
                      <span className="text-[#f5f5f5] font-semibold">Skill Alias Normalization</span>
                    </div>
                    <p className="mt-2 text-[11px] text-zinc-400 leading-relaxed">
                      Normalized &apos;Postgres&apos; &rarr; &apos;PostgreSQL&apos; and verified 3 repository project source receipts.
                    </p>
                  </div>
                  <span className="mt-3 text-[10px] text-zinc-500 font-mono">AST Match Verified</span>
                </div>

                <div className="rounded-[14px] bg-[#0c0c0e] border border-white/[0.06] p-4 text-[12px] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-[#707070] font-mono mb-2">
                      <span>STEP 03</span>
                      <span className="text-amber-400">Human Action</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-400 shrink-0" />
                      <span className="text-[#f5f5f5] font-semibold">Recruiter Manual Override</span>
                    </div>
                    <p className="mt-2 text-[11px] text-zinc-400 leading-relaxed">
                      Candidate manually shortlisted for interview based on strong portfolio evidence.
                    </p>
                  </div>
                  <span className="mt-3 text-[10px] text-zinc-500 font-mono">Logged by Recruiter #4810</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[12px] text-[#707070]">
              <span>Compliance & regulatory audit readiness</span>
              <span className="text-[#f5f5f5] font-semibold">Full Trace Verification</span>
            </div>
          </GlowCard>
        </Reveal>
      </div>
    </section>
  );
}
