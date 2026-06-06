"use client";

import { motion } from "framer-motion";
import { CheckCircle2, BriefcaseBusiness } from "lucide-react";

const HIGHLIGHTS = [
  "2+ years of professional experience building and supporting enterprise financial systems",
  "Master of Data Science & Innovation candidate at the University of Technology Sydney",
  "Hands-on experience across SQL, Python, BI dashboards, ML models, and data pipelines",
  "Built VehicleIQ, an AI-powered computer vision platform presented at the UTS Innovation Showcase",
  "Strong blend of software engineering, analytics, data engineering, and applied AI",
];

const TARGETING = [
  {
    role: "Data Analyst",
    match: "SQL, Python, EDA, reporting, insights, and business problem solving",
  },
  {
    role: "BI Analyst",
    match: "Power BI, Tableau, KPI dashboards, stakeholder reporting, and storytelling",
  },
  {
    role: "Data Engineer",
    match: "Airflow, dbt, PostgreSQL, GCP, data modelling, and ELT pipelines",
  },
  {
    role: "Data Scientist",
    match: "Machine learning, statistical modelling, feature engineering, and model evaluation",
  },
  {
    role: "Applied AI / ML",
    match: "Computer vision, PyTorch, FastAPI, RAG, LangChain, and AI product development",
  },
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
            Turning data into reliable systems, insights, and decisions.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-[var(--text-secondary)] leading-relaxed"
          >
            <p>
              I&apos;m a data-focused technology professional with 2+ years of
              experience as an Associate Developer at{" "}
              <strong className="text-[var(--text-primary)] font-medium">
                Mitsubishi Pension & Market Services
              </strong>{" "}
              formerly Link Group, where I worked on enterprise applications,
              SQL Server workflows, and production systems supporting Australian
              investor and pension administration.
            </p>

            <p>
              That experience taught me that good data work is not only about
              models or dashboards. It is about building reliable systems,
              improving data quality, understanding business requirements, and
              delivering outputs that people can trust.
            </p>

            <p>
              I&apos;m now completing my{" "}
              <strong className="text-[var(--text-primary)] font-medium">
                Master of Data Science and Innovation at UTS
              </strong>
              , where I have built projects across machine learning, business
              intelligence, data engineering, computer vision, and applied AI.
              My goal is to contribute to teams that use data to improve
              decisions, automate workflows, and create measurable business
              impact.
            </p>

            <ul className="mt-6 space-y-2.5">
              {HIGHLIGHTS.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={15}
                    className="mt-0.5 flex-shrink-0 text-[var(--accent-light)]"
                  />
                  <span className="text-sm">{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <BriefcaseBusiness size={16} className="text-[var(--accent-light)]" />
                <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
                  Roles I&apos;m targeting
                </p>
              </div>

              <div className="space-y-3">
                {TARGETING.map(({ role, match }) => (
                  <div
                    key={role}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[var(--bg-subtle)] border border-[var(--border)]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-[var(--accent-light)]" />

                    <div>
                      <p className="font-medium text-sm text-[var(--text-primary)]">
                        {role}
                      </p>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">
                        {match}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-3 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                  Available for full-time data, analytics, and AI roles in Australia
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}