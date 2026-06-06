"use client";
import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const EXPERIENCES = [
  {
    company: "Mitsubishi Pension and Market Services",
    subtitle: "formerly Link Group — ASX-listed financial services",
    role: "Associate Developer",
    period: "Jul 2022 – Jul 2024",
    location: "Sydney, NSW",
    type: "Full-time · 2 years",
    bullets: [
      "Optimised SQL Server queries and stored procedures powering large-scale Australian pension and investor management systems, reducing critical report execution time by 30%+",
      "Built and maintained middleware data applications processing high-volume superannuation and investment fund records with strict regulatory and audit requirements",
      "Collaborated with operations and business stakeholders to translate manual reporting workflows into automated SQL-based data pipelines",
      "Supported production systems with tens of millions of financial records, ensuring data integrity and system uptime across peak processing windows",
    ],
    stack: ["SQL Server", "Stored Procedures", "SSRS", ".NET MVC", "Production Data Systems"],
    accent: "var(--accent)",
  },
  {
    company: "University of Technology Sydney",
    subtitle: "Master of Data Science and Innovation",
    role: "Graduate Researcher & Developer",
    period: "Jul 2024 – May 2026",
    location: "Sydney, NSW",
    type: "Academic · Current",
    bullets: [
      "Designed and built VehicleIQ — a multi-model computer vision platform for vehicle classification and damage detection, presented at the UTS Innovation Showcase",
      "Architected a production-grade ELT data pipeline using Apache Airflow, dbt, PostgreSQL, and GCP with medallion architecture",
      "Applied ML techniques including Random Forest, XGBoost, and SHAP for customer churn modelling and large-scale taxi fare prediction with PySpark",
      "Explored LangChain, RAG, and prompt engineering for applied AI product development",
    ],
    stack: ["Python", "PyTorch", "Airflow", "dbt", "GCP", "Power BI", "Tableau", "PySpark"],
    accent: "var(--gold)",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[var(--bg-subtle)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-[var(--accent-light)] uppercase tracking-widest mb-3 block">
            Experience
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-[var(--text-primary)]">
            2+ years in production data.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[var(--border)] hidden md:block" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="md:pl-12 relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-5 w-10 h-10 rounded-full border-2 border-[var(--bg-subtle)] hidden md:flex items-center justify-center"
                  style={{ backgroundColor: exp.accent === "var(--accent)" ? "var(--accent)" : "var(--gold)" }}
                >
                  <Building2 size={14} className="text-white" />
                </div>

                <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 md:p-8 hover:border-[var(--accent)] transition-colors duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="font-display text-xl text-[var(--text-primary)]">{exp.role}</h3>
                      <p className="font-medium text-[var(--accent-light)] mt-0.5">{exp.company}</p>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">{exp.subtitle}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                      <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                        <Calendar size={11} />
                        {exp.period}
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full border border-[var(--border)] bg-[var(--bg-subtle)] text-[var(--text-muted)]">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)] leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-[var(--text-muted)] flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2.5 py-1 rounded-full bg-[var(--bg-subtle)] border border-[var(--border)] text-[var(--text-muted)] font-mono"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
