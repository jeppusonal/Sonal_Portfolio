"use client";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, MapPin } from "lucide-react";

const ROLES = [
  "Data Scientist",
  "Analytics Engineer",
  "BI Analyst",
  "Data Engineer",
  "ML Engineer",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-16 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] dark:bg-accent/10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/6 w-[300px] h-[300px] rounded-full bg-gold/5 blur-[80px] dark:bg-gold/8 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <MapPin size={13} className="text-[var(--accent-light)]" />
            <span className="text-sm text-[var(--text-muted)] font-mono">Sydney, NSW · Open to work</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.05] text-[var(--text-primary)] mb-4"
          >
            Sonal Rao
          </motion.h1>

          {/* Role line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-8"
          >
            {ROLES.map((role, i) => (
              <span key={role} className="flex items-center gap-3">
                <span className="text-[clamp(1rem,2.5vw,1.35rem)] font-light text-[var(--text-secondary)]">
                  {role}
                </span>
                {i < ROLES.length - 1 && (
                  <span className="text-[var(--gold)] text-xl leading-none">·</span>
                )}
              </span>
            ))}
          </motion.div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-2xl mb-10"
          >
            Master of Data Science at UTS with 2+ years building enterprise data systems in Australian financial services. 
            Turning complex data into actionable decisions through analytics, engineering, and AI.{" "}
            <span className="text-[var(--text-primary)] font-medium">analytics</span>,{" "}
            <span className="text-[var(--text-primary)] font-medium">machine learning</span>, and{" "}
            <span className="text-[var(--text-primary)] font-medium">production pipelines</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-white font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="/Sonal_Rao_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-primary)] font-medium text-sm hover:border-[var(--accent)] transition-colors"
            >
              Download Resume
            </a>
            <div className="flex items-center gap-3 ml-1">
              <a
                href="https://github.com/jeppusonal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors"
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
              <a
                href="https://linkedin.com/in/sonal-jeppu-rao"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 pt-8 border-t border-[var(--border)] flex flex-wrap gap-8"
          >
            {[
              { label: "Industry Experience", value: "2+ yrs" },
              { label: "Employer", value: "Financial Services" },
              { label: "Education", value: "M.Data Science, UTS" },
              { label: "Innovation Showcase", value: "UTS 2026" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="font-display text-xl text-[var(--text-primary)]">{stat.value}</span>
                <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--text-muted)]"
      >
        <span className="text-xs font-mono">scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
