import {
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { EASE, Magnetic, btnOutline, btnPrimary, useReady } from "./motion";
import { HeroVisual } from "./HeroVisual";

const words = ["Hire", "on", "proof,", "not", "intuition."];
const proofLetters = ["p", "r", "o", "o", "f"];

function ProofWord({
  reduce,
  ready,
  delay,
}: {
  reduce?: boolean;
  ready: boolean;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [entered, setEntered] = useState(false);

  return (
    <span
      className={`inline-block pb-[0.08em] align-bottom ${
        entered ? "overflow-visible" : "overflow-hidden"
      }`}
    >
      <motion.span
        className="relative inline-block"
        initial={{ y: reduce ? 0 : "110%", opacity: reduce ? 0 : 1 }}
        animate={ready ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: reduce ? 0.4 : 0.9, ease: EASE, delay: reduce ? 0 : delay }}
        onAnimationComplete={() => setEntered(true)}
      >
        <span
          className="group relative inline-block cursor-pointer select-none"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Stadium pill backplate (scales proportionally with display font size via em units) */}
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-x-[0.22em] -inset-y-[0.08em] -z-10 rounded-full border border-hairline-strong bg-surface transition-all duration-300"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? "scale(1)" : "scale(0.96)",
            }}
          />

          {/* Individual letters with spring stagger wave */}
          <span className="relative inline-flex">
            {proofLetters.map((char, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                animate={hovered && !reduce ? { y: -8 } : { y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 18,
                  delay: idx * 0.02,
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>

          {/* Underline */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute bottom-[0.04em] left-0 h-[2px] w-full origin-left bg-foreground"
            initial={{ scaleX: reduce ? 1 : 0 }}
            animate={ready ? { scaleX: 1 } : {}}
            transition={{ duration: reduce ? 0.4 : 0.9, ease: EASE, delay: reduce ? 0 : 0.9 }}
          />
        </span>
        <span>,</span>
      </motion.span>
      <span>&nbsp;</span>
    </span>
  );
}

export function Hero() {
  const ready = useReady();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const isVisualInView = useInView(visualRef, { amount: 0.25 });
  const [hasScrolled, setHasScrolled] = useState(false);

  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });
  const mask = useMotionTemplate`radial-gradient(220px circle at ${sx}px ${sy}px, black, transparent)`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setHasScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (window.scrollY > 30) {
      setHasScrolled(true);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldStartVisual = ready && isVisualInView && (hasScrolled || window.scrollY > 30);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches || reduce) return;
    const el = ref.current;
    if (!el) return;
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    mx.set(w * 0.3);
    my.set(h * 0.3);
    const a = animate(mx, [w * 0.2, w * 0.8, w * 0.5, w * 0.2], {
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    });
    const b = animate(my, [h * 0.25, h * 0.4, h * 0.15, h * 0.25], {
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    });
    return () => {
      a.stop();
      b.stop();
    };
  }, [reduce, mx, my]);

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  const t = (d: number) => ({ duration: reduce ? 0.4 : 0.9, ease: EASE, delay: reduce ? 0 : d });

  return (
    <section
      id="top"
      ref={ref}
      onPointerMove={onMove}
      className="relative flex min-h-screen flex-col items-center overflow-hidden pb-28 pt-36"
    >
      <div aria-hidden className="dot-grid absolute inset-0" />
      <motion.div
        aria-hidden
        className="dot-grid-bright absolute inset-0"
        style={{ maskImage: mask, WebkitMaskImage: mask }}
      />

      {/* Atmospheric ambient top glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-600/10 via-indigo-600/5 to-transparent blur-[120px]"
      />

      <div className="container-x relative flex flex-col items-center text-center">
        {/* Intelligence Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={t(0.04)}
          className="mb-8 inline-flex items-center gap-2.5 rounded-xl border border-white/[0.14] bg-[#0d0f17]/90 px-4 py-2 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
          </span>
          <span className="text-[12px] font-[600] tracking-wide text-white uppercase font-mono">
            EigenHire 2.0
          </span>
          <span className="text-[11px] text-white/30">•</span>
          <span className="text-[12px] font-[500] text-zinc-300">
            Verifiable Talent Intelligence
          </span>
        </motion.div>

        <h1 className="text-display max-w-[1100px]">
          {words.map((w, i) =>
            w === "proof," ? (
              <ProofWord key={w} reduce={reduce} ready={ready} delay={0.1 + i * 0.06} />
            ) : (
              <span key={w} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                <motion.span
                  className="relative inline-block"
                  initial={{ y: reduce ? 0 : "110%", opacity: reduce ? 0 : 1 }}
                  animate={ready ? { y: 0, opacity: 1 } : {}}
                  transition={t(0.1 + i * 0.06)}
                >
                  {w}
                </motion.span>
                {i < words.length - 1 && <span>&nbsp;</span>}
              </span>
            ),
          )}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={t(0.5)}
          className="text-lead mt-8 max-w-[620px] text-muted-foreground"
        >
          EigenHire bridges resumes to roles with deep semantic intelligence, transparent scoring breakdowns,
          and verifiable evidence citations. Recruiters stay in absolute control.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={t(0.6)}
          className="mt-10 flex flex-wrap items-center justify-center gap-3.5"
        >
        
          <a href="#how" className={btnOutline}>
            See how it works
          </a>
          <Link
            to="/dashboard"
            className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/[0.14] bg-[#11131a]/80 backdrop-blur-xl px-6 text-[14px] font-[600] text-zinc-300 transition-all hover:bg-[#181c26] hover:text-white hover:border-white/30 shadow-[0_4px_16px_rgba(0,0,0,0.3)] active:scale-[0.98]"
          >
            <span>Explore live roles</span>
            <span className="text-[12px] text-blue-400">↗</span>
          </Link>
        </motion.div>

        {/* Verification Value Strip */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={t(0.68)}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 rounded-2xl border border-white/[0.08] bg-[#0c0d14]/70 backdrop-blur-xl py-3 px-6 text-[12px] sm:text-[13px] text-zinc-400 font-[450] shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
        >
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
            <span className="text-zinc-200">0% Black-box scoring</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/40" />
            <span className="text-zinc-200">6-Factor hybrid criteria</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
            <span className="text-zinc-200">Exact resume span citations</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/40" />
            <span className="text-zinc-200">Human recruiter in control</span>
          </div>
        </motion.div>

        <motion.div
          ref={visualRef}
          initial={{ opacity: 0, y: reduce ? 0 : 40 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ ...t(0.75), duration: 1.1 }}
          className="relative mt-20 w-full max-w-[1040px]"
        >
          <HeroVisual start={shouldStartVisual} />
        </motion.div>
      </div>

      <motion.a
        href="#how"
        initial={{ opacity: 0, y: 12 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="group absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[12px] text-muted-foreground transition-colors duration-200 hover:text-foreground"
        aria-label="Scroll to see how it works"
      >
        <span className="text-[11px] font-medium tracking-[0.16em] uppercase transition-colors duration-200 group-hover:text-foreground">
          Scroll
        </span>
        <div className="flex h-8 w-[20px] justify-center rounded-full border border-hairline-strong bg-surface/40 pt-1.5 transition-colors duration-200 group-hover:border-foreground/50">
          <motion.span
            className="h-2 w-1 rounded-full bg-foreground"
            animate={
              reduce
                ? {}
                : {
                    y: [0, 8, 12],
                    opacity: [0, 1, 0],
                  }
            }
            transition={
              reduce
                ? {}
                : {
                    duration: 1.8,
                    repeat: Infinity,
                    ease: [0.25, 1, 0.5, 1],
                  }
            }
          />
        </div>
      </motion.a>
    </section>
  );
}
