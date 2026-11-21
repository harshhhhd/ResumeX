import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PageShell } from "@/components/hs/PageShell";
import { EASE, Reveal, btnPrimary } from "@/components/hs/motion";
import {
  Mail,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  MapPin,
  Sparkles,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Terminal,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Enterprise Pilot — EigenHire" },
      {
        name: "description",
        content:
          "Connect directly with the EigenHire founding architects for early access, enterprise pilots, or technical evaluation.",
      },
      { property: "og:title", content: "Contact & Enterprise Pilot — EigenHire" },
      {
        property: "og:description",
        content: "Speak directly with the engineers building evidence-first hiring technology.",
      },
    ],
  }),
  component: ContactPage,
});

const inquiryTopics = [
  "Early Access Pilot",
  "Product Architecture",
  "Partnership & Enterprise",
  "Candidate Feedback",
  "General Inquiry",
];

const directChannels = [
  {
    label: "Direct Founder Channel",
    address: "hello@eigenhire.online",
    note: "Inbox monitored directly by Harsh & Deepanshi",
    sla: "< 4 hours response",
  },
  {
    label: "Data Ethics & Privacy",
    address: "privacy@eigenhire.online",
    note: "PII isolation and audit trail inquiries",
    sla: "< 12 hours response",
  },
  {
    label: "Engineering Dispatch",
    address: "engineering@eigenhire.online",
    note: "Deterministic parsing and rubric calibration",
    sla: "< 24 hours response",
  },
];

const instantFaqs = [
  {
    q: "How does private pilot evaluation work?",
    a: "We configure an isolated organization tenant for your team, calibrate your mandatory criteria weights, and run a parallel audit against your current resume funnel with zero data leakage.",
  },
  {
    q: "Does EigenHire store raw interview video?",
    a: "No continuous video is permanently retained. Our architecture prioritizes event-level telemetry (e.g. camera disconnects, prolonged absence) and converts audio to transcribed text before purging raw video streams.",
  },
  {
    q: "Can we customize requirement weights per job?",
    a: "Yes. EigenHire allows recruiters to configure custom percentage weights across hard technical skills, experience fit, project relevance, and education gates for each unique job listing.",
  },
];

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [topic, setTopic] = useState("Early Access Pilot");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please provide your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please provide a valid email address.");
      return;
    }
    if (!message.trim()) {
      setError("Please include a brief message or requirement description.");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <PageShell>
      {/* 1. Header Section */}
      <section className="container-x">
        <div className="max-w-[820px]">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 font-mono text-[11px] font-medium text-blue-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              <span>DIRECT DISPATCH CONSOLE // FOUNDER ACCESS</span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-display mt-6 font-semibold tracking-tight text-white leading-[0.98]">
              Connect with our architects.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="text-lead mt-6 text-zinc-400 max-w-[640px]">
              We read and respond to every message ourselves. Whether you are looking to pilot auditable
              screening, test our transparent scoring rubrics, or explore custom matching criteria, we
              are here.
            </p>
          </Reveal>
        </div>

        {/* 2. Main Two-Column Asymmetric Command Center */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[440px_1fr]">
          {/* Left Column: Direct Inboxes, SLAs, Locations */}
          <Reveal delay={0.24}>
            <div className="space-y-6">
              {/* Direct Channels HUD */}
              <div className="rounded-2xl border border-white/10 bg-[#12141c]/90 p-6 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                    Communication Routing
                  </span>
                  <span className="font-mono text-[11px] text-emerald-400 flex items-center gap-1">
                    <ShieldCheck size={13} />
                    AES-256 Transport
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {directChannels.map((c) => (
                    <div
                      key={c.address}
                      className="rounded-xl border border-white/[0.06] bg-black/40 p-4 transition-colors hover:border-white/20"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[12px] font-medium text-zinc-400">{c.label}</span>
                        <span className="font-mono text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                          {c.sla}
                        </span>
                      </div>
                      <a
                        href={`mailto:${c.address}`}
                        className="mt-1.5 block font-mono text-[15px] font-semibold text-white hover:text-blue-400 transition-colors"
                      >
                        {c.address}
                      </a>
                      <p className="mt-1 text-[12px] text-zinc-500">{c.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deployment Locations & Timezones */}
              <div className="rounded-2xl border border-white/10 bg-[#12141c]/60 p-6 backdrop-blur-xl">
                <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 block mb-3">
                  Operating Hubs
                </span>
                <div className="space-y-3 font-mono text-[13px]">
                  <div className="flex items-center justify-between py-1.5 border-b border-white/[0.05]">
                    <span className="flex items-center gap-2 text-zinc-300">
                      <MapPin size={14} className="text-blue-400" />
                      Delhi NCR, India
                    </span>
                    <span className="text-zinc-500 text-[11px]">Primary Research</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="flex items-center gap-2 text-zinc-300">
                      <Clock size={14} className="text-emerald-400" />
                      Global Coverage
                    </span>
                    <span className="text-zinc-500 text-[11px]">UTC-8 to UTC+5:30</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: High-Tech Signal Dispatch Form */}
          <Reveal delay={0.32}>
            <div className="rounded-3xl border border-white/12 bg-gradient-to-b from-[#141724]/90 to-[#0c0e17]/95 p-8 md:p-10 backdrop-blur-2xl shadow-[0_24px_50px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.15)]">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="py-16 text-center"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 shadow-[0_0_24px_rgba(16,185,129,0.2)]">
                      <CheckCircle2 size={32} />
                    </div>
                    <span className="mt-6 inline-block font-mono text-[11px] text-emerald-400 uppercase tracking-widest">
                      DISPATCH CONFIRMED // TICKET #EH-{Math.floor(1000 + Math.random() * 9000)}
                    </span>
                    <h3 className="text-h3 mt-2 font-semibold text-white">Transmission received.</h3>
                    <p className="mx-auto mt-3 max-w-[440px] text-[15px] leading-relaxed text-zinc-400">
                      Thank you, <span className="text-white font-medium">{name}</span>. A founding
                      architect will review your note and follow up directly at{" "}
                      <span className="text-blue-400 font-mono">{email}</span> within 4 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setMessage("");
                      }}
                      className="mt-8 rounded-xl border border-white/20 bg-white/5 px-6 py-2.5 font-mono text-[13px] text-white transition-all hover:bg-white/10"
                    >
                      Send another inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-6"
                  >
                    <div>
                      <span className="font-mono text-[11px] text-blue-400 uppercase tracking-widest">
                        Interactive Console
                      </span>
                      <h2 className="text-[24px] font-semibold tracking-tight text-white mt-1">
                        Transmit your inquiry.
                      </h2>
                      <p className="mt-1 text-[14px] text-zinc-400">
                        Select a focus domain and let us know how we can collaborate.
                      </p>
                    </div>

                    {error && (
                      <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 font-mono text-[13px] text-rose-300">
                        {error}
                      </div>
                    )}

                    {/* Inquiry Topic Pills */}
                    <div>
                      <label className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 mb-2.5">
                        Inquiry Domain
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {inquiryTopics.map((t) => (
                          <button
                            type="button"
                            key={t}
                            onClick={() => setTopic(t)}
                            className={`rounded-lg px-3.5 py-1.5 font-mono text-[12px] transition-all ${
                              topic === t
                                ? "bg-blue-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.4)] border border-blue-400/40"
                                : "bg-black/40 text-zinc-400 border border-white/10 hover:border-white/20 hover:text-white"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Inputs Grid */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400"
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            setError("");
                          }}
                          placeholder="Aarav Sharma"
                          className="mt-2 h-12 w-full rounded-xl border border-white/12 bg-black/50 px-4 text-[14px] text-white placeholder:text-zinc-600 focus:border-blue-500/80 focus:outline-none focus:ring-1 focus:ring-blue-500/80 transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400"
                        >
                          Work Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setError("");
                          }}
                          placeholder="aarav@company.com"
                          className="mt-2 h-12 w-full rounded-xl border border-white/12 bg-black/50 px-4 text-[14px] text-white placeholder:text-zinc-600 focus:border-blue-500/80 focus:outline-none focus:ring-1 focus:ring-blue-500/80 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400"
                      >
                        Company / Organization{" "}
                        <span className="text-zinc-600 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Apex Technologies"
                        className="mt-2 h-12 w-full rounded-xl border border-white/12 bg-black/50 px-4 text-[14px] text-white placeholder:text-zinc-600 focus:border-blue-500/80 focus:outline-none focus:ring-1 focus:ring-blue-500/80 transition-colors"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="message"
                          className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400"
                        >
                          Message / Role Requirements *
                        </label>
                        <span className="font-mono text-[10px] text-zinc-500">
                          {message.length} characters
                        </span>
                      </div>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          setError("");
                        }}
                        placeholder="Tell us about the hiring positions you want to evaluate, custom skills, or architectural questions..."
                        className="mt-2 w-full rounded-xl border border-white/12 bg-black/50 p-4 text-[14px] text-white placeholder:text-zinc-600 focus:border-blue-500/80 focus:outline-none focus:ring-1 focus:ring-blue-500/80 transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#2563eb] to-[#1d4ed8] hover:from-[#3b82f6] hover:to-[#2563eb] px-6 text-[14px] font-semibold text-white shadow-[0_0_24px_rgba(37,99,235,0.4),inset_0_1px_0_0_rgba(255,255,255,0.3)] transition-all active:scale-[0.99] border border-blue-400/30"
                    >
                      <Send size={15} />
                      <span>Dispatch message to architects</span>
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Instant Diagnostics / FAQ Accordion */}
      <section className="container-x mt-36">
        <div className="border-t border-white/[0.08] pt-16">
          <div className="max-w-[640px]">
            <span className="font-mono text-[12px] text-blue-400 uppercase tracking-widest">
              Instant Diagnostics
            </span>
            <h2 className="text-h3 mt-2 font-semibold text-white tracking-tight">
              Frequently asked deployment questions.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 max-w-[880px]">
            {instantFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-white/10 bg-[#12141c]/70 backdrop-blur-md overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-[16px] font-semibold text-white hover:text-blue-300 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-zinc-500 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-blue-400" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-5 pt-0 text-[14px] leading-relaxed text-zinc-400 border-t border-white/[0.05]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
