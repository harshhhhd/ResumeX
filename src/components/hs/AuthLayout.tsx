import { Link } from "@tanstack/react-router";
import { type ReactNode, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface AuthLayoutProps {
  children: ReactNode;
  navLink?: {
    to: string;
    label: string;
  };
  className?: string;
}

export function AuthLayout({ children, navLink, className }: AuthLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });
  const mask = useMotionTemplate`radial-gradient(240px circle at ${sx}px ${sy}px, black, transparent)`;

  const onPointerMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !containerRef.current) return;
    const r = containerRef.current.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={onPointerMove}
      className="relative min-h-screen bg-[#0a0a0a] text-[#f5f5f5] flex flex-col justify-between overflow-hidden selection:bg-[#f5f5f5] selection:text-[#0a0a0a]"
    >
      {/* Interactive Dot Grid Background from Hero */}
      <div aria-hidden className="dot-grid absolute inset-0 pointer-events-none" />
      {!reduce && (
        <motion.div
          aria-hidden
          className="dot-grid-bright absolute inset-0 pointer-events-none"
          style={{ maskImage: mask, WebkitMaskImage: mask }}
        />
      )}

      {/* Atmospheric ambient top glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-600/10 via-indigo-600/5 to-transparent blur-[120px]"
      />

      {/* Top Floating Pill Navigation */}
      <header className="relative pt-8 px-4 flex justify-center w-full z-20">
        <nav
          aria-label="Authentication navigation"
          className="flex h-12 w-full max-w-[440px] items-center justify-between rounded-2xl bg-[#0c0e15]/85 backdrop-blur-2xl px-5 border border-white/[0.12] shadow-[0_16px_40px_rgba(0,0,0,0.7),inset_0_1px_0_0_rgba(255,255,255,0.12)]"
        >
          <Link
            to="/"
            className="flex items-center gap-2.5 text-[15px] font-[650] tracking-tight text-[#f5f5f5] transition-opacity hover:opacity-80"
          >
            <span className="rounded-xl inline-flex h-7 w-7 shrink-0 items-center justify-center border border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              <img src="/logo.png" alt="" className="h-4 w-4 object-contain brightness-0 invert" />
            </span>
            <span>EigenHire</span>
          </Link>

          {navLink && (
            <Link
              to={navLink.to}
              className="rounded-lg px-3 py-1.5 text-[13px] font-[600] text-zinc-400 transition-colors hover:text-white hover:bg-white/[0.06]"
            >
              {navLink.label}
            </Link>
          )}
        </nav>
      </header>

      {/* Main Centered Content Column */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-12">
        <div className={cn("w-full max-w-[440px] mx-auto", className)}>{children}</div>
      </main>

      {/* Subtle Footer Note */}
      <footer className="relative z-10 pb-8 pt-4 px-4 text-center">
        <p className="text-[12px] font-[450] text-[#8a8a8a]">
          <span>© 2026 EigenHire Inc.</span>
          <span className="mx-2">·</span>
          <span>Sample interface · illustrative</span>
        </p>
      </footer>
    </div>
  );
}
