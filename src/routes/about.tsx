import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/hs/PageShell";
import { Reveal, btnPrimary, btnOutline, EASE } from "@/components/hs/motion";
import {
  ShieldCheck,
  Cpu,
  Terminal,
  Layers,
  ArrowUpRight,
  Mail,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Code2,
  Lock,
  GitBranch,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us & Architecture — EigenHire" },
      {
        name: "description",
        content:
          "Meet the team building EigenHire: an auditable, evidence-first recruitment and AI interview platform.",
      },
      { property: "og:title", content: "About Us & Architecture — EigenHire" },
      {
        property: "og:description",
        content:
          "Systems engineers and researchers dedicated to transparent candidate evaluations and verifiable intelligence.",
      },
    ],
  }),
  component: AboutPage,
});

interface Founder {
  name: string;
  role: string;
  initials: string;
  discipline: string;
  status: string;
  skills: string[];
  bio: string;
  email: string;
  linkedin: string;
  github: string;
  leetcode?: string;
}

const founders: Founder[] = [
  {
    name: "Harsh Dhiman",
    role: "Lead Systems Architect",
    initials: "HD",
    discipline: "Distributed Engines & Resume AST",
    status: "Systems Lead · Active",
    skills: ["AST Compilers", "Semantic Alignment", "Distributed Ingestion", "TypeScript / Rust"],
    bio: "Architects the core ingestion pipelines, deterministic requirement normalization, and end-to-end evaluation engine, guaranteeing that candidate assessments stay mathematically grounded and transparent.",
    email: "harsh@eigenhire.online",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/harshhhhd",
  },
  {
    name: "Deepanshi Pokhriyal",
    role: "Backend & Pipeline Lead",
    initials: "DP",
    discipline: "Orchestration & Data Infrastructure",
    status: "Infrastructure · Active",
    skills: ["Streaming Workflows", "PostgreSQL Enclaves", "Schema Validation", "High-Throughput APIs"],
    bio: "Spearheads pipeline reliability, high-concurrency job matching services, and strict schema validation layers to power mission-critical enterprise recruitment workflows.",
    email: "deepanshi@eigenhire.online",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/ddeepanshii09",
  },
  {
    name: "Devansh Khanna",
    role: "AI Research & Rubrics Lead",
    initials: "DK",
    discipline: "Rubric Calibration & Deterministic NLP",
    status: "NLP Research · Active",
    skills: ["Semantic Alignment", "Rubric Calibration", "LLM Evaluation", "Zero-Shot Matching"],
    bio: "Researches objective multi-category rubric scoring, skill alias normalization catalogs, and semantic evidence alignment across diverse candidate profiles to guarantee fair evaluations.",
    email: "devansh@eigenhire.online",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/Noobda2007",
  },
  {
    name: "Kartik Nagar",
    role: "Platform Security & Governance",
    initials: "KN",
    discipline: "PII Redaction & Cryptographic Audit",
    status: "Security · Active",
    skills: ["PII De-Identification", "AES-256 Transport", "Tamper-Proof Logging", "DPDP & AI Act"],
    bio: "Ensures robust PII isolation boundaries, zero-trust candidate record shielding, and immutable audit logging so hiring teams operate with complete regulatory clarity.",
    email: "kartik@eigenhire.online",
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/Kartik-1983",
  },
];

const architecturePillars = [
  {
    index: "01",
    tag: "GROUNDED PROOF",
    title: "Citations Over Confidence Scores.",
    desc: "A numeric score without context is meaningless. EigenHire links every competency rating to concrete text spans in the resume or spoken interview responses, letting recruiters verify the underlying evidence instantly.",
    icon: Layers,
    stats: "Source-verified citations",
  },
  {
    index: "02",
    tag: "NON-INVASIVE METRICS",
    title: "Technical Signals, Not Phrenology.",
    desc: "We reject pseudo-scientific emotion tracking, eye-gaze honesty profiling, or facial tension scoring. Telemetry is restricted to verifiable operational events like audio integrity and frame presence.",
    icon: ShieldCheck,
    stats: "Zero psychological guesswork",
  },
  {
    index: "03",
    tag: "HUMAN AGENCY",
    title: "Recruiters Retain Final Authority.",
    desc: "Our models augment human recruiters; they never replace them. Every shortlist, interview pass, or hiring transition requires explicit human approval, accompanied by a documented audit trail.",
    icon: Cpu,
    stats: "100% human-governed decisions",
  },
];

const telemetryStats = [
  { label: "Parsing Engine", value: "Instant", sub: "Deterministic AST normalization" },
  { label: "Evaluation Rubric", value: "Multi-Criteria", sub: "Customizable category weights" },
  { label: "PII Isolation", value: "Active Gate", sub: "Demographic attributes stripped" },
  { label: "Decision Trail", value: "Verifiable", sub: "Immutable recruiter audit records" },
];

function AboutPage() {
  return (
    <PageShell>
      {/* 1. Asymmetric Editorial Hero Section */}
      <section className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-[#12141c]/90 px-4 py-1.5 text-[12px] font-mono font-medium text-blue-400 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
                </span>
                <span>EIGENHIRE COLLECTIVE // SYSTEM FOUNDATIONS</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="text-display mt-6 font-semibold tracking-tight text-white leading-[0.98]">
                Building the evidence standard for talent.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="text-lead mt-8 text-zinc-400 max-w-[620px] leading-relaxed">
                Recruitment shouldn't rely on gut feeling or impenetrable neural nets. We engineer
                verifiable matching pipelines that trace qualifications directly to authentic proof,
                normalize noisy resumes with precision, and keep human judgment at the center of
                every hire.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link to="/contact" className={btnPrimary}>
                  Initiate conversation
                  <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </Link>
                <a
                  href="#pillars"
                  className={btnOutline}
                >
                  Core philosophy
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Live Architectural Telemetry Console */}
          <Reveal delay={0.2}>
            <div className="relative rounded-2xl border border-white/12 bg-gradient-to-b from-[#141724]/90 to-[#0c0e17]/95 p-6 backdrop-blur-2xl shadow-[0_24px_50px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.15)]">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-zinc-400">
                    eigenhire-core-telemetry.sys
                  </span>
                </div>
                <span className="rounded-md bg-blue-500/15 border border-blue-500/30 px-2.5 py-0.5 font-mono text-[11px] text-blue-400">
                  SYSTEM READY
                </span>
              </div>

              {/* Console Body */}
              <div className="mt-6 space-y-4 font-mono text-[12px]">
                <div className="flex items-center justify-between py-2 border-b border-white/[0.05]">
                  <span className="text-zinc-500">$ foundation</span>
                  <span className="text-zinc-200">evidence_driven_recruitment</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/[0.05]">
                  <span className="text-zinc-500">$ privacy_enclave</span>
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 size={13} />
                    zero_pii_bias_mitigation
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/[0.05]">
                  <span className="text-zinc-500">$ parsing_engine</span>
                  <span className="text-blue-400">deterministic_ast_v2</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/[0.05]">
                  <span className="text-zinc-500">$ reviewer_control</span>
                  <span className="text-zinc-200">sovereign_override_logged</span>
                </div>
              </div>

              {/* Telemetry Stat Grid */}
              <div className="mt-6 grid grid-cols-2 gap-3 pt-4 border-t border-white/[0.08]">
                {telemetryStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/[0.06] bg-black/40 p-3.5 backdrop-blur-sm"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                      {stat.label}
                    </span>
                    <p className="mt-1 font-mono text-[20px] font-bold text-white tracking-tight">
                      {stat.value}
                    </p>
                    <span className="text-[11px] text-zinc-400">{stat.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Interactive Founder Dossiers (Futuristic Layout) */}
      <section className="container-x mt-36">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[12px] text-blue-400 uppercase tracking-widest">
              <Code2 size={14} />
              <span>Engineering Core // Leadership</span>
            </div>
            <h2 className="text-h2 mt-3 font-semibold text-white tracking-tight">
              The team behind the telemetry.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-[14px] text-zinc-400 max-w-[420px]">
            Systems engineers and researchers dedicated to transparent evaluation, distributed
            speed, and objective merit.
          </p>
        </div>

        {/* Dossiers Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.08}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-b from-[#131623]/80 via-[#0e101a]/90 to-[#090b12] p-7 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.7),0_0_30px_rgba(37,99,235,0.12)]">
                {/* Background Ambient Flare */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-40" />

                <div>
                  {/* Header Row: Initials Badge, Name, Status */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 text-[18px] font-mono font-bold text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]">
                        {f.initials}
                        <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#0a0a0a]">
                          <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                      </div>
                      <div>
                        <h3 className="text-[22px] font-semibold tracking-tight text-white group-hover:text-blue-300 transition-colors">
                          {f.name}
                        </h3>
                        <p className="text-[13px] font-medium text-blue-400">{f.role}</p>
                      </div>
                    </div>

                    <span className="hidden sm:inline-flex rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-zinc-400">
                      {f.discipline}
                    </span>
                  </div>

                  {/* Bio */}
                  <p className="mt-5 text-[14px] leading-relaxed text-zinc-300">
                    {f.bio}
                  </p>

                  {/* Skills / Focus Tags */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {f.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-white/[0.08] bg-black/40 px-2.5 py-1 font-mono text-[11px] text-zinc-400 transition-colors group-hover:border-white/20 group-hover:text-zinc-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Communication Bar */}
                <div className="mt-8 border-t border-white/[0.08] pt-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={`mailto:${f.email}`}
                      className="inline-flex items-center gap-2 font-mono text-[12px] text-zinc-400 transition-colors hover:text-white"
                    >
                      <Mail size={13} className="text-blue-400" />
                      <span>{f.email}</span>
                    </a>

                    <div className="flex items-center gap-2">
                      <a
                        href={f.linkedin}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${f.name} LinkedIn`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-400 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
                      >
                        <ExternalLink size={13} />
                      </a>
                      <a
                        href={f.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${f.name} GitHub`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-400 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
                      >
                        <GitBranch size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. Core Architectural Tenets (Pillars Grid) */}
      <section id="pillars" className="container-x mt-36">
        <div className="border-t border-white/[0.08] pt-16">
          <div className="max-w-[680px]">
            <span className="font-mono text-[12px] text-blue-400 uppercase tracking-widest">
              Operating Doctrine
            </span>
            <h2 className="text-h2 mt-3 font-semibold text-white tracking-tight">
              Three non-negotiable design principles.
            </h2>
            <p className="mt-3 text-[15px] text-zinc-400">
              How our architectural rules prevent bias, protect candidate dignity, and eliminate black
              boxes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {architecturePillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.index} delay={idx * 0.1}>
                  <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#12141c]/80 p-8 backdrop-blur-xl shadow-[0_12px_32px_rgba(0,0,0,0.6)] hover:border-white/20 transition-all">
                    <div>
                      <div className="flex items-center justify-between text-zinc-500 font-mono text-[13px]">
                        <span>[ {p.index} ]</span>
                        <Icon size={18} className="text-blue-400" />
                      </div>
                      <span className="mt-6 inline-block font-mono text-[11px] font-semibold text-blue-400 tracking-wider">
                        {p.tag}
                      </span>
                      <h3 className="text-[20px] font-semibold tracking-tight text-white mt-1">
                        {p.title}
                      </h3>
                      <p className="mt-4 text-[14px] leading-relaxed text-zinc-400">
                        {p.desc}
                      </p>
                    </div>

                    <div className="mt-8 border-t border-white/[0.08] pt-4">
                      <span className="font-mono text-[12px] text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 size={13} />
                        {p.stats}
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Open Architecture & Pilot Dispatch Banner */}
      <section className="container-x mt-36">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-[#121626] via-[#0d101d] to-[#08090f] p-8 md:p-14 shadow-[0_24px_60px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.15)]">
            <div className="relative z-10 max-w-[760px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 font-mono text-[11px] text-blue-400">
                <Sparkles size={12} />
                <span>ENTERPRISE COLLABORATION</span>
              </div>

              <h2 className="text-h2 mt-4 font-semibold text-white tracking-tight">
                Bring auditable clarity to your recruitment pipeline.
              </h2>

              <p className="mt-4 text-[16px] leading-relaxed text-zinc-300">
                We work alongside forward-thinking hiring teams across software engineering,
                operations, and product roles. Test our deterministic parsing, explore custom rubric
                weighting, or benchmark qualification matching against your current funnel with zero
                commitments.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to="/contact" className={btnPrimary}>
                  Start a collaboration
                  <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </Link>
                <Link to="/privacy" className={btnOutline}>
                  Inspect ethics manifesto
                </Link>
              </div>
            </div>

            {/* Subtle decorative glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -right-20 h-[300px] w-[300px] rounded-full bg-blue-600/20 blur-[100px]"
            />
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
