"use client";
import { motion } from "framer-motion";
import { SKILL_GROUPS } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[var(--bg-subtle)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-[var(--accent-light)] uppercase tracking-widest mb-3 block">
            Technical Skills
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-[var(--text-primary)]">
            Full-stack data capabilities.
          </h2>
          <p className="text-[var(--text-muted)] mt-2 text-sm max-w-xl">
            From raw SQL to PyTorch to production dashboards — built across enterprise, academic, and personal projects.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-5 hover:border-[var(--accent)] transition-colors duration-300"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-xl">{group.icon}</span>
                <h3 className="font-medium text-sm text-[var(--text-primary)]">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border)] text-[var(--text-secondary)] font-mono hover:border-[var(--accent-light)] hover:text-[var(--text-primary)] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industry keywords — hidden from visual but present for ATS/SEO */}
        <div className="sr-only">
          Data Analyst, Business Intelligence Analyst, Data Scientist, Data Engineer, Machine Learning Engineer,
          Python, SQL, Power BI, Tableau, Apache Airflow, dbt, Google Cloud Platform, PostgreSQL,
          Pandas, NumPy, Scikit-learn, PyTorch, FastAPI, Docker, Git, PySpark, LangChain, RAG,
          Random Forest, Classification, Regression, ETL, ELT, Medallion Architecture,
          Sydney Australia, NSW Government, CBA, Westpac, Canva, REA Group, WiseTech
        </div>
      </div>
    </section>
  );
}
