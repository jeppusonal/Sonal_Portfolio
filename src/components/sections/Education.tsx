"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const EDUCATION = [
  {
    institution: "University of Technology Sydney",
    degree: "Master of Data Science and Innovation",
    period: "Jul 2024 – May 2026",
    location: "Sydney, NSW, Australia",
    highlights: [
      "Machine Learning, Deep Learning, and Statistical Modelling",
      "Data Engineering: pipelines, orchestration, cloud infrastructure",
      "AI and NLP: LangChain, RAG systems, prompt engineering",
      "VehicleIQ — presented at UTS Innovation Showcase",
    ],
    logo: "🎓",
    primary: true,
  },
  {
    institution: "University of Mumbai",
    degree: "Bachelor of Engineering — Electronics & Telecommunications",
    period: "Completed 2022",
    location: "Mumbai, India",
    highlights: ["GPA: 8.72 / 10", "Signal processing, embedded systems, mathematics foundation"],
    logo: "🏛️",
    primary: false,
  },
];

const CERTS = [
  { name: "Google Data Analytics Certificate", issuer: "Google / Coursera", icon: "📊" },
  { name: "Deep Learning Specialisation", issuer: "DeepLearning.AI", icon: "🧠" },
  { name: "dbt Fundamentals", issuer: "dbt Labs", icon: "⚙️" },
  { name: "Tableau Desktop Specialist", issuer: "Tableau", icon: "📈" },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-mono text-[var(--accent-light)] uppercase tracking-widest mb-3 block">
            Education & Certifications
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-[var(--text-primary)]">
            Academic foundation.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education cards */}
          <div className="space-y-5">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-[var(--bg-card)] border rounded-2xl p-6 ${
                  edu.primary ? "border-[var(--accent)]/40 ring-1 ring-[var(--accent)]/10" : "border-[var(--border)]"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--bg-subtle)] border border-[var(--border)] flex items-center justify-center text-xl flex-shrink-0">
                    {edu.logo}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-medium text-[var(--text-primary)]">{edu.institution}</h3>
                      {edu.primary && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent-light)] border border-[var(--accent)]/20 flex-shrink-0">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-[var(--accent-light)] mb-1">{edu.degree}</p>
                    <p className="text-xs text-[var(--text-muted)] mb-3">
                      {edu.period} · {edu.location}
                    </p>
                    <ul className="space-y-1.5">
                      {edu.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <GraduationCap size={11} className="mt-0.5 flex-shrink-0 text-[var(--text-muted)]" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <Award size={16} className="text-[var(--gold)]" />
                <h3 className="font-medium text-[var(--text-primary)]">Certifications</h3>
                <span className="text-xs text-[var(--text-muted)]">(add yours here)</span>
              </div>
              <div className="space-y-3">
                {CERTS.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-subtle)] border border-[var(--border)]"
                  >
                    <span className="text-lg">{cert.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-[var(--text-primary)]">{cert.name}</p>
                      <p className="text-xs text-[var(--text-muted)]">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Resume CTA */}
              <div className="mt-6 p-4 rounded-xl bg-[var(--bg-subtle)] border border-[var(--border)] border-dashed text-center">
                <p className="text-xs text-[var(--text-muted)] mb-3">
                  Download my full resume for a complete profile
                </p>
                <a
                  href="/Sonal_Rao_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2 rounded-full bg-[var(--accent)] text-white hover:opacity-90 transition-opacity"
                >
                  📄 Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
