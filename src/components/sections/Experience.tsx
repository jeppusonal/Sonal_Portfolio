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
"Developed and maintained enterprise applications supporting Australian investor and pension administration systems.",
"Optimized SQL Server queries and reporting workflows to improve performance and operational efficiency.",
"Collaborated with business stakeholders to translate requirements into scalable technical solutions.",
"Improved data quality, reporting accuracy, and production system reliability.",
"Supported mission-critical systems processing high-volume financial and investor records."
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
"Built VehicleIQ, an AI-powered computer vision platform for vehicle classification and damage detection.",
"Designed data engineering pipelines using Airflow, dbt, PostgreSQL, and Google Cloud.",
"Developed machine learning solutions for churn prediction, forecasting, and predictive analytics.",
"Created interactive Power BI and Tableau dashboards for business intelligence use cases.",
"Applied LangChain, RAG, and prompt engineering to AI-powered applications."
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
"Developed cybersecurity and data science case-study projects using real-world business scenarios.",
"Performed exploratory data analysis and machine learning experimentation.",
"Created technical documentation and project reports.",
"Collaborated with mentors and peers on solution design and evaluation."
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
"Built machine learning projects using Python and Scikit-learn.",
"Performed data cleaning, feature engineering, and model evaluation.",
"Created visualizations to communicate analytical findings.",
"Presented project outcomes and recommendations."
],
stack: ["Python", "Scikit-learn", "Data Analysis", "Visualization"],
accent: "var(--accent)",
}
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
