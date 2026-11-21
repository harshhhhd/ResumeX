import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Grain, ScrollProgress, SmoothScroll } from "@/components/hs/Experience";
import { ReadyContext } from "@/components/hs/motion";
import { Nav } from "@/components/hs/Nav";
import { Hero } from "@/components/hs/Hero";
import { Statement } from "@/components/hs/Statement";
import { Marquee } from "@/components/hs/Marquee";
import { BentoShowcase } from "@/components/hs/BentoShowcase";
import { Faq } from "@/components/hs/Faq";
import { Footer } from "@/components/hs/Closing";
import { scrollToTarget } from "@/lib/scroll";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EigenHire" },
      {
        name: "description",
        content:
          "EigenHire matches resumes to roles, runs multilingual AI interviews, and gives recruiters a report they can audit.",
      },
      { property: "og:title", content: "EigenHire — Hire on proof, not intuition." },
      { property: "og:description", content: "AI-assisted hiring with a human in the loop." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const ready = true;
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    const targetHash = hash || (typeof window !== "undefined" ? window.location.hash : "");
    if (targetHash && targetHash.length > 1) {
      const formatted = targetHash.startsWith("#") ? targetHash : `#${targetHash}`;
      const t = setTimeout(() => {
        scrollToTarget(formatted, { duration: 1.2 });
      }, 80);
      return () => clearTimeout(t);
    }
  }, [hash]);

  return (
    <ReadyContext.Provider value={ready}>
      <SmoothScroll />
      <ScrollProgress />
      <Grain />
      <Nav />
      <main>
        <Hero />
        <Statement />
        <Marquee />
        <BentoShowcase />
        <Faq />
      </main>
      <Footer />
    </ReadyContext.Provider>
  );
}
