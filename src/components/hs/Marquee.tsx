import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./motion";

const initials = (n: string) =>
  (
    ({
      "Node.js": "Nd",
      PostgreSQL: "Pg",
      TypeScript: "Ts",
      Kubernetes: "K8",
      FastAPI: "Fa",
      JavaScript: "Js",
    }) as Record<string, string>
  )[n] ?? n.slice(0, 2);

function Row({ items, dir }: { items: string[]; dir: 1 | -1 }) {
  const reduce = useReducedMotion();
  const p = useMotionValue(0);
  const speed = useRef(1);
  useAnimationFrame((_, delta) => {
    if (reduce) return;
    // 50% of track per 40s
    let v = p.get() + (delta / 40000) * 50 * speed.current;
    if (v >= 50) v -= 50;
    p.set(v);
  });
  const x = useTransform(p, (v) => (dir === 1 ? `-${v}%` : `${v - 50}%`));
  const list = [...items, ...items, ...items, ...items];
  return (
    <div
      className="fade-edges overflow-hidden"
      onPointerEnter={() => (speed.current = 0.2)}
      onPointerLeave={() => (speed.current = 1)}
    >
      <motion.ul style={{ x }} className="flex w-max gap-12 py-4">
        {list.map((s, i) => (
          <li
            key={i}
            aria-hidden={i >= items.length}
            className="group flex items-center gap-4 text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            <span className="squircle flex h-14 w-14 items-center justify-center border border-white/[0.12] bg-[#141414]/90 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.1)] text-[16px] font-semibold transition-transform duration-200 group-hover:scale-105 group-hover:border-white/30 group-hover:text-foreground">
              {initials(s)}
            </span>
            <span className="text-h3 whitespace-nowrap">{s}</span>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

export function Marquee() {
  return (
    <section aria-label="Skills" className="pt-24 sm:pt-32">
      <Reveal className="container-x">
        <div className="flex flex-col items-start max-w-[680px]">
          <span className="text-[11px] font-[600] uppercase tracking-wider text-muted-foreground mb-2">
            Canonical Tech Catalog
          </span>
          <h2 className="text-h3 text-foreground">
            Aliases normalized automatically.
          </h2>
          <p className="mt-2 text-muted-foreground text-[16px] leading-relaxed">
            Candidates write skills in dozens of different conventions. EigenHire standardizes and canonicalizes aliases so "JS" evaluates as JavaScript, "Postgres" as PostgreSQL, and "K8s" as Kubernetes.
          </p>
        </div>
      </Reveal>
      <div className="mt-12 space-y-4">
        <Row dir={1} items={["Python", "React", "PostgreSQL", "Docker", "Kubernetes", "FastAPI"]} />
        <Row dir={-1} items={["TypeScript", "Node.js", "Java", "AWS", "SQL", "Redis"]} />
      </div>
    </section>
  );
}
