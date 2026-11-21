import {
  AnimatePresence,
  frame,
  cancelFrame,
  motion,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { useEffect, useState } from "react";
import { EASE } from "./motion";
import { scrollToTarget } from "@/lib/scroll";

export function SmoothScroll() {
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let update: ((d: { timestamp: number }) => void) | null = null;
    let cancelled = false;
    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const l = new Lenis({ duration: 1.1, autoRaf: false });
      lenis = l;
      update = ({ timestamp }) => l.raf(timestamp);
      frame.update(update, true);
      (window as unknown as { __lenis?: unknown }).__lenis = l;
    });

    const handleAnchorClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }
      const anchor = (e.target as Element | null)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const hash = href.slice(hashIndex);
      const path = href.slice(0, hashIndex);

      const isCurrentPage =
        path === "" ||
        (path === "/" && window.location.pathname === "/") ||
        path === window.location.pathname;

      if (isCurrentPage && hash.length > 1) {
        const targetEl = document.querySelector(hash);
        if (targetEl) {
          e.preventDefault();
          if (window.location.hash !== hash) {
            window.history.pushState(null, "", hash);
          }
          scrollToTarget(hash);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelled = true;
      if (update) cancelFrame(update);
      lenis?.destroy();
      (window as unknown as { __lenis?: unknown }).__lenis = undefined;
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [reduce]);
  return null;
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-foreground"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export function Grain() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[55] h-full w-full opacity-[0.04]"
    >
      <filter id="hs-grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="2"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#hs-grain)" />
    </svg>
  );
}

export function Preloader({ onDone }: { onDone: () => void }) {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (reduce) {
      setShow(false);
      onDone();
      return;
    }
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, [reduce, onDone]);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {show && (
        <motion.div
          key="pre"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background"
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <motion.span
            className="text-h3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            EigenHire
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
