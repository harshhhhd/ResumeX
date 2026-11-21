import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { EASE, Reveal } from "./motion";

const faqs = [
  [
    "Does EigenHire reject candidates automatically?",
    "No. Every rejection or shortlist threshold is a customizable team rule. Every filter and recruiter override is transparently recorded.",
  ],
  [
    "How does the qualification match score work?",
    "A transparent, weighted blend across technical skills (40%), experience fit (20%), project relevance (15%), education (10%), responsibilities (10%), and evidence quality (5%).",
  ],
  [
    "How are diverse technical skill aliases handled?",
    "EigenHire automatically normalizes aliases (e.g., JS to JavaScript, Postgres to PostgreSQL, Node to Node.js) against a comprehensive canonical tech catalog.",
  ],
  [
    "How is candidate privacy and PII protected?",
    "Personally Identifiable Information (PII) is isolated before semantic scoring. Qualifications and evidence spans are evaluated without demographic bias.",
  ],
  [
    "Can recruiters customize requirement weights?",
    "Yes. Hiring teams can configure mandatory requirements as explicit gates and fine-tune scoring weights per job profile.",
  ],
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section
      id="faq"
      aria-labelledby="faq-h"
      className="container-x pt-20 md:pt-28 pb-20 md:pb-28 lg:pb-32"
    >
      <Reveal>
        <h2 id="faq-h" className="text-h2">
          Questions, answered.
        </h2>
      </Reveal>
      <div className="mt-12 flex max-w-[860px] flex-col gap-3">
        {faqs.map(([q, a], i) => {
          const isOpen = open === i;
          return (
            <Reveal
              key={q}
              delay={i * 0.04}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "border-blue-500/40 bg-gradient-to-b from-[#131622] to-[#0c0e15] shadow-[0_8px_30px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.12)]"
                  : "border-white/[0.08] bg-[#0c0e15]/80 hover:border-white/[0.18] hover:bg-[#10131d]"
              }`}
            >
              <h3>
                <button
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-[16px] font-semibold text-zinc-100 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {q}
                  <span className="relative h-4 w-4 shrink-0 text-blue-400" aria-hidden>
                    <span className="absolute left-0 top-1/2 h-[2px] w-4 bg-current rounded-full" />
                    <motion.span
                      className="absolute left-0 top-1/2 h-[2px] w-4 bg-current rounded-full"
                      animate={{ rotate: isOpen ? 0 : 90 }}
                      transition={{ duration: 0.35, ease: EASE }}
                    />
                  </span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-muted-foreground">{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
