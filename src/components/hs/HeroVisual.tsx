import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { EASE } from "./motion";
import {
  CheckCircle2,
  FileText,
  RotateCw,
  ShieldCheck,
  Sparkles,
  Layers,
  Cpu,
  ArrowRight,
  Terminal,
} from "lucide-react";

// Phases: 0 init, 1 ast scan, 2 evidence match, 3 score roll, 4 hold, 5 reset
const PHASE_AT = [0, 800, 2200, 4600, 6200, 8600];
const LOOP = 9200;

interface EvidenceBlock {
  id: string;
  line: string;
  domain: string;
  text: string;
  highlight: string;
  matchedReqId: string;
}

const evidenceList: EvidenceBlock[] = [
  {
    id: "e1",
    line: "L12-16",
    domain: "Distributed Architecture",
    text: "Architected event-driven microservices using FastAPI & Go, scaling throughput to 42k req/sec at <20ms p99.",
    highlight: "FastAPI & Go",
    matchedReqId: "r1",
  },
  {
    id: "e2",
    line: "L24-28",
    domain: "Relational Persistence",
    text: "Engineered normalized PostgreSQL schema with automated read-replicas, partitioning, and pgvector indexes.",
    highlight: "PostgreSQL",
    matchedReqId: "r2",
  },
  {
    id: "e3",
    line: "L34-38",
    domain: "Infrastructure & Cloud",
    text: "Containerized multi-stage workloads using Docker on multi-region AWS ECS clusters with zero-downtime CI/CD.",
    highlight: "Docker on AWS",
    matchedReqId: "r3",
  },
];

interface RequirementItem {
  id: string;
  name: string;
  category: string;
  weight: string;
  score: number;
  status: "verified" | "partial" | "unclear";
  receipt: string;
}

const requirements: RequirementItem[] = [
  {
    id: "r1",
    name: "High-Throughput REST & Event Services",
    category: "Backend Engine",
    weight: "40% weight",
    score: 96,
    status: "verified",
    receipt: "Line 12 citation confirmed",
  },
  {
    id: "r2",
    name: "Relational & Vector Data Design (PostgreSQL)",
    category: "Data Layer",
    weight: "25% weight",
    score: 94,
    status: "verified",
    receipt: "Line 24 citation confirmed",
  },
  {
    id: "r3",
    name: "Containerized Cloud Orchestration (Docker / AWS)",
    category: "DevOps",
    weight: "20% weight",
    score: 91,
    status: "verified",
    receipt: "Line 34 citation confirmed",
  },
  {
    id: "r4",
    name: "System Reliability & Observability",
    category: "Production",
    weight: "15% weight",
    score: 88,
    status: "verified",
    receipt: "Contextual fit verified",
  },
];

export function HeroVisual({ start }: { start: boolean }) {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [selectedReq, setSelectedReq] = useState<string | null>(null);

  // 3D tilt & skew motion values
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const skewX = useMotionValue(0);
  const skewY = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 140, damping: 20 });
  const sry = useSpring(ry, { stiffness: 140, damping: 20 });
  const sSkewX = useSpring(skewX, { stiffness: 140, damping: 20 });
  const sSkewY = useSpring(skewY, { stiffness: 140, damping: 20 });
  const cardRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);

  // Manual replay
  const replay = () => {
    setCycle((c) => c + 1);
  };

  // State machine loop
  useEffect(() => {
    if (reduce) {
      setPhase(4);
      return;
    }
    if (!start) {
      setPhase(0);
      return;
    }

    let timers: ReturnType<typeof setTimeout>[] = [];

    const schedule = () => {
      timers = PHASE_AT.map((at, i) =>
        setTimeout(() => {
          setPhase(i);
        }, at),
      );

      timers.push(
        setTimeout(() => {
          if (isHoveredRef.current) {
            setPhase(4);
            return;
          }
          schedule();
        }, LOOP),
      );
    };

    schedule();
    return () => timers.forEach(clearTimeout);
  }, [start, reduce, cycle]);

  const onCardMove = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== "mouse" || !cardRef.current) return;
    isHoveredRef.current = true;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    const dx = (e.clientX - cardCenterX) / (rect.width * 0.5);
    const dy = (e.clientY - cardCenterY) / (rect.height * 0.5);

    const px = Math.max(-1, Math.min(1, dx));
    const py = Math.max(-1, Math.min(1, dy));

    const maxTilt = 7;
    rx.set(-py * maxTilt);
    ry.set(px * maxTilt);
    skewX.set(-px * 1.0);
    skewY.set(py * 0.8);
  };

  const onCardLeave = () => {
    isHoveredRef.current = false;
    rx.set(0);
    ry.set(0);
    skewX.set(0);
    skewY.set(0);
  };

  const isScanning = phase >= 1 && phase < 5;
  const isMatching = phase >= 2 && phase < 5;
  const isScored = phase >= 3 && phase < 5;

  // Score rolling animation
  const score = useMotionValue(reduce ? 94 : 0);
  const rounded = useTransform(score, (v) => Math.round(v).toString());

  useEffect(() => {
    const c = animate(score, isScored ? 94 : 0, {
      duration: reduce ? 0 : isScored ? 1.4 : 0.5,
      ease: EASE,
    });
    return () => c.stop();
  }, [isScored, reduce, score]);

  return (
    <div style={{ perspective: 1200 }} className="relative w-full max-w-[1040px] mx-auto">
      <motion.div
        ref={cardRef}
        onPointerMove={onCardMove}
        onPointerLeave={onCardLeave}
        style={{
          rotateX: srx,
          rotateY: sry,
          skewX: sSkewX,
          skewY: sSkewY,
          transformStyle: "preserve-3d",
        }}
        className="overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-[#141724]/95 via-[#0e101a]/95 to-[#080a11]/98 backdrop-blur-2xl text-left shadow-[0_32px_80px_rgba(0,0,0,0.85),inset_0_1px_0_0_rgba(255,255,255,0.15)] transition-shadow duration-300"
        role="region"
        aria-label="Interactive sample evaluation dossier showing deterministic resume parsing and evidence matching."
      >
        {/* Futuristic Command Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] px-6 py-4 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
            </span>
            <span className="font-mono text-[12px] font-semibold text-white tracking-wide">
              EIGENHIRE // VERIFICATION TERMINAL
            </span>
            <span className="hidden sm:inline text-zinc-600 font-mono">|</span>
            <span className="hidden sm:inline font-mono text-[11px] text-zinc-400">
              Sample report · illustrative
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 font-mono text-[11px] text-emerald-400">
              Zero-PII Isolation Enforced
            </span>

            <button
              type="button"
              onClick={replay}
              className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-zinc-300 transition-all hover:bg-white/10 hover:text-white cursor-pointer"
              title="Replay sequence"
            >
              <RotateCw size={12} className={phase === 1 ? "animate-spin" : ""} />
              <span>Replay</span>
            </button>
          </div>
        </div>

        {/* Main Body Grid */}
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.1fr_1fr] items-start">
          {/* Left Panel: Ingested Candidate Resume & AST Proof Spans */}
          <div className="relative rounded-2xl border border-white/[0.08] bg-black/40 p-5 backdrop-blur-md overflow-hidden">
            {/* Candidate Header Pill */}
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400">
                  <FileText size={16} />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-white">candidate_dossier.pdf</h4>
                  <p className="text-[11px] text-zinc-400 font-mono">AST Extracted · 6 YOE Senior Backend</p>
                </div>
              </div>
              <span className="rounded-md bg-white/[0.06] border border-white/[0.08] px-2 py-0.5 font-mono text-[10px] text-zinc-300">
                L12 - L48
              </span>
            </div>

            {/* Sweep Laser Bar during AST Scanning */}
            {isScanning && !reduce && (
              <motion.div
                className="pointer-events-none absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_16px_rgba(59,130,246,0.9)] z-20"
                initial={{ top: "15%", opacity: 0 }}
                animate={{
                  top: ["15%", "85%", "15%"],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}

            {/* Evidence Spans Feed */}
            <div className="space-y-3.5">
              {evidenceList.map((ev, i) => {
                const isTargeted = selectedReq ? ev.matchedReqId === selectedReq : false;
                const isLit = isMatching || isScored;

                return (
                  <motion.div
                    key={ev.id}
                    className={`relative rounded-xl border p-3.5 transition-all duration-300 ${
                      isTargeted
                        ? "border-blue-400/80 bg-blue-500/15 shadow-[0_0_20px_rgba(37,99,235,0.25)]"
                        : isLit
                        ? "border-white/[0.12] bg-[#12141c]/90"
                        : "border-white/[0.05] bg-black/30 opacity-70"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mb-1.5">
                      <span className="text-blue-400 font-semibold">{ev.line}</span>
                      <span>{ev.domain}</span>
                    </div>

                    <p className="text-[13px] leading-relaxed text-zinc-300 font-[400]">
                      {ev.text.split(ev.highlight)[0]}
                      <span className="inline-block rounded px-1.5 py-0.5 font-mono text-[12px] font-semibold text-white bg-blue-600/30 border border-blue-500/40 mx-0.5">
                        {ev.highlight}
                      </span>
                      {ev.text.split(ev.highlight)[1]}
                    </p>

                    {isLit && (
                      <div className="mt-2.5 flex items-center justify-between border-t border-white/[0.05] pt-2 text-[11px] font-mono">
                        <span className="text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 size={12} />
                          Verbatim receipt grounded
                        </span>
                        <span className="text-zinc-500">Confidence: 98%</span>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Live Requirement Matrix & Compatibility Score */}
          <div className="space-y-5">
            {/* Requirements Heading */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-blue-400 uppercase tracking-wider">
                Requirement Calibration Matrix
              </span>
              <span className="font-mono text-[11px] text-zinc-500">4 / 4 Gates Evaluated</span>
            </div>

            {/* Requirement Rows */}
            <div className="space-y-2.5">
              {requirements.map((req, idx) => {
                const isSelected = selectedReq === req.id;
                const isLit = isMatching || isScored;

                return (
                  <div
                    key={req.id}
                    onClick={() => setSelectedReq(isSelected ? null : req.id)}
                    className={`group cursor-pointer rounded-xl border p-3.5 transition-all duration-300 ${
                      isSelected
                        ? "border-blue-400/80 bg-blue-500/10 shadow-[0_0_16px_rgba(37,99,235,0.2)]"
                        : "border-white/[0.08] bg-black/40 hover:border-white/20 hover:bg-white/[0.03]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] text-zinc-500">0{idx + 1}</span>
                        <h5 className="text-[13px] font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {req.name}
                        </h5>
                      </div>
                      <span className="font-mono text-[11px] text-zinc-400">{req.weight}</span>
                    </div>

                    {/* Progress Bar & Status Receipt */}
                    <div className="mt-2.5 flex items-center justify-between gap-3">
                      <div className="relative h-1.5 flex-1 rounded-full bg-white/[0.08] overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: isLit ? `${req.score}%` : 0 }}
                          transition={{ duration: 0.8, delay: idx * 0.15, ease: EASE }}
                        />
                      </div>
                      <span className="font-mono text-[11px] font-semibold text-emerald-400 shrink-0">
                        {isLit ? `${req.score}%` : "--%"}
                      </span>
                    </div>

                    <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                      <span>{req.category}</span>
                      <span className={isLit ? "text-blue-400" : "text-zinc-600"}>
                        {isLit ? req.receipt : "Evaluating..."}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Score & Decision Card */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#121522] to-[#0a0c14] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.6)]">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                    Calculated Compatibility
                  </span>
                  <p className="mt-0.5 text-[12px] text-zinc-400">
                    Weighted across 4 mandatory criteria with line citations
                  </p>
                </div>

                {/* Score Number Display */}
                <div className="text-right">
                  <div className="flex items-baseline justify-end font-mono">
                    <motion.span className="text-[34px] font-bold text-white tracking-tight">
                      {rounded}
                    </motion.span>
                    <span className="ml-1 text-[16px] text-zinc-500 font-normal">/ 100</span>
                  </div>
                </div>
              </div>

              {/* Status Ribbon */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.08] pt-3 font-mono text-[11px]">
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck size={14} />
                  All mandatory gates met
                </span>
                <span className="text-blue-400">Human Shortlist Ready &rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
