"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";

const FILTERS = ["All", "AI", "DE", "BI", "ML"] as const;
type Filter = (typeof FILTERS)[number];

const filterLabels: Record<Filter, string> = {
  All: "All Projects",
  AI: "AI / Vision",
  DE: "Data Engineering",
  BI: "Business Intelligence",
  ML: "Machine Learning",
};

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = PROJECTS.filter((p) => active === "All" || p.category === active);
  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);
  const visible = showAll ? [...featured, ...rest] : featured;

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-xs font-mono text-[var(--accent-light)] uppercase tracking-widest mb-3 block">
            Projects
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-[var(--text-primary)]">
              My Work.
            </h2>
            <p className="text-sm text-[var(--text-muted)] max-w-sm">
              
            </p>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => { setActive(f); setShowAll(false); }}
              className={`text-sm px-4 py-1.5 rounded-full border transition-all duration-200 font-medium ${
                active === f
                  ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                  : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--text-primary)] bg-[var(--bg-card)]"
              }`}
            >
              {filterLabels[f]}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              featured={project.featured}
            />
          ))}
        </div>

        {/* Show more */}
        {rest.length > 0 && !showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-center"
          >
            <button
              onClick={() => setShowAll(true)}
              className="text-sm font-medium px-6 py-2.5 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--text-primary)] transition-colors bg-[var(--bg-card)]"
            >
              Show {rest.length} more project{rest.length > 1 ? "s" : ""}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
