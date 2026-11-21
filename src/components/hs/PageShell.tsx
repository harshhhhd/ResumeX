import { ReactNode } from "react";
import { ReadyContext } from "@/components/hs/motion";
import { SmoothScroll, ScrollProgress, Grain } from "@/components/hs/Experience";
import { Nav } from "@/components/hs/Nav";
import { Footer } from "@/components/hs/Closing";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <ReadyContext.Provider value={true}>
      <SmoothScroll />
      <ScrollProgress />
      <Grain />
      <Nav />
      <main className="relative min-h-screen pt-32 pb-24 overflow-hidden">
        {/* Background Dot Grid */}
        <div aria-hidden className="dot-grid fixed inset-0 pointer-events-none opacity-40 z-0" />

        {/* Atmospheric ambient top glow */}
        <div
          aria-hidden
          className="pointer-events-none fixed -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-600/10 via-indigo-600/5 to-transparent blur-[140px]"
        />

        <div className="relative z-10">{children}</div>
      </main>
      <Footer />
    </ReadyContext.Provider>
  );
}
