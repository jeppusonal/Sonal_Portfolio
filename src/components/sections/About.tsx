"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const HIGHLIGHTS = [
  "2+ years in enterprise data systems at a major Australian financial services firm",
  "Master of Data Science & Innovation — University of Technology Sydney",
  "End-to-end delivery: from raw ingestion to ML inference to BI dashboards",
  "Presented at UTS Innovation Showcase with AI computer vision platform",
  "Experienced across analytics, engineering, and machine learning stacks",
];

const TARGETING = [
  { role: "Data Analyst", match: "SQL + Python + EDA + BI dashboards" },
  { role: "BI Analyst", match: "Power BI + Tableau + DAX + stakeholder reporting" },
  { role: "Data Engineer", match: "Airflow + dbt + GCP + Medallion architecture" },
  { role: "Data Scientist", match: "ML pipelines + statistical modelling + PyTorch" },
  { role: "ML Engineer (entry)", match: "Computer vision + FastAPI + model deployment" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-[var(--accent-light)] uppercase tracking-widest mb-3 block">
            About
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-[var(--text-primary)]">
            Where analytics meets engineering.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: narrative */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-[var(--text-secondary)] leading-relaxed"
          >
            <p>
              I started my career as an Associate Developer at{" "}
              <strong className="text-[var(--text-primary)] font-medium">
                Mitsubishi Pension and Market Services
              </strong>{" "}
              (formerly Link Group), working on the data infrastructure behind Australia&apos;s pension and investment management systems. This wasn&apos;t toy data — it was production SQL, stakeholder reporting, and high-stakes financial records.
            </p>
            <p>
              That experience shaped how I think: data only matters when it&apos;s accurate, reliable, and understood by the business. Now, as a{" "}
              <strong className="text-[var(--text-primary)] font-medium">
                Master of Data Science student at UTS
              </strong>
              , I&apos;m extending that foundation into machine learning, cloud pipelines, and AI systems.
            </p>
            <p>
              My goal is to join a team where I can own the full stack — from data modelling and pipeline design to dashboards and predictive models — and deliver measurable business outcomes.
            </p>

            {/* Highlights */}
            <ul className="mt-6 space-y-2.5">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={15}
                    className="mt-0.5 flex-shrink-0 text-[var(--accent-light)]"
                  />
                  <span className="text-sm">{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: role targeting */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6">
              <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-5">
                Roles I&apos;m targeting
              </p>
              <div className="space-y-3">
                {TARGETING.map(({ role, match }) => (
                  <div
                    key={role}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[var(--bg-subtle)] border border-[var(--border)]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-[var(--accent-light)]" />
                    <div>
                      <p className="font-medium text-sm text-[var(--text-primary)]">{role}</p>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">{match}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability badge */}
              <div className="mt-5 p-3 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                  Available for full-time roles in Australia
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
