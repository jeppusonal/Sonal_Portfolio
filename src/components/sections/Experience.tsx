"use client";

import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const EXPERIENCES = [
  {
    company: "Mitsubishi Pension & Market Services",
    subtitle: "Formerly Link Group | Financial Services & Investor Administration",
    role: "Associate Developer",
    period: "Jul 2022 – Jul 2024",
    location: "Mumbai, India",
    type: "Full-time · 2 Years",
    bullets: [
      "Built and maintained .NET MVC middleware applications and SQL Server solutions for Australian investor and pension administration systems.",
      "Worked closely with business and technical teams to improve reporting workflows, data quality, and production system reliability.",
      "Supported mission-critical financial platforms by improving performance, accuracy, and operational efficiency across high-volume investor records.",
    ],
    stack: ["SQL Server", ".NET MVC", "SSRS", "Stored Procedures", "Data Analysis"],
    accent: "var(--accent)",
  },
  {
    company: "University of Technology Sydney",
    subtitle: "Master of Data Science and Innovation",
    role: "Data Science Researcher & Project Developer",
    period: "Jul 2024 – May 2026",
    location: "Sydney, Australia",
    type: "Academic · Current",
    bullets: [
      "Developed data science and AI projects across computer vision, churn prediction, forecasting, business intelligence, and applied AI.",
      "Used Python, PyTorch, Airflow, dbt, PostgreSQL, GCP, Power BI, Tableau, LangChain, and RAG to build practical data solutions.",
      "Delivered analytics systems, dashboards, and AI prototypes that transformed complex data into insights, automation, and business value.",
    ],
    stack: ["Python", "PyTorch", "Airflow", "dbt", "Power BI", "Tableau", "GCP"],
    accent: "var(--gold)",
  },
  {
    company: "Grassdew IT Solutions Pvt. Ltd.",
    subtitle: "Software & Data Science Internship",
    role: "Software Intern",
    period: "Sep 2021 – Jan 2022",
    location: "Mumbai, India",
    type: "Internship",
    bullets: [
      "Worked on software, cybersecurity, and data science case-study projects using Python and real-world business scenarios.",
      "Explored data, tested machine learning approaches, and documented technical findings to support solution design.",
      "Strengthened practical skills in analysis, experimentation, documentation, and collaborative technical problem-solving.",
    ],
    stack: ["Python", "Machine Learning", "EDA", "Cybersecurity"],
    accent: "var(--accent)",
  },
  {
    company: "LetsGrowMore",
    subtitle: "Data Science Internship Program",
    role: "Data Science Intern",
    period: "Aug 2021 – Sep 2021",
    location: "Remote",
    type: "Internship",
    bullets: [
      "Built beginner-to-intermediate machine learning projects using Python, Scikit-learn, and data visualization tools.",
      "Performed data cleaning, feature engineering, model training, and evaluation to understand end-to-end ML workflows.",
      "Presented analytical findings and project outcomes, improving my foundation in applied data science and communication.",
    ],
    stack: ["Python", "Scikit-learn", "Data Analysis", "Visualization"],
    accent: "var(--accent)",
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
                <div
                  className="absolute left-0 top-5 w-10 h-10 rounded-full border-2 border-[var(--bg-subtle)] hidden md:flex items-center justify-center"
                  style={{
                    backgroundColor:
                      exp.accent === "var(--accent)"
                        ? "var(--accent)"
                        : "var(--gold)",
                  }}
                >
                  <Building2 size={14} className="text-white" />
                </div>

                <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 md:p-8 hover:border-[var(--accent)] transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="font-display text-xl text-[var(--text-primary)]">
                        {exp.role}
                      </h3>

                      <p className="font-medium text-[var(--accent-light)] mt-0.5">
                        {exp.company}
                      </p>

                      <p className="text-xs text-[var(--text-muted)] mt-0.5">
                        {exp.subtitle}
                      </p>
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

                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)] leading-relaxed"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-[var(--text-muted)] flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

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