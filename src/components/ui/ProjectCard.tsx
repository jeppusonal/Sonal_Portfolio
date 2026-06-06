"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Trophy } from "lucide-react";
import { Project } from "@/lib/data";
import { cn, categoryColors, categoryLabels } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export default function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const colors = categoryColors[project.category];

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        "group bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden flex flex-col hover:border-[var(--accent)] transition-all duration-300 hover:shadow-lg",
        featured && "ring-1 ring-[var(--accent)]/20"
      )}
    >
      {/* Top accent bar */}
      <div
        className={cn("h-1 w-full", colors.bg)}
        style={{
          background:
            project.category === "AI"
              ? "linear-gradient(90deg, var(--accent), var(--accent-light))"
              : project.category === "DE"
              ? "linear-gradient(90deg, #1e40af, #3b82f6)"
              : project.category === "BI"
              ? "linear-gradient(90deg, #92400e, #d97706)"
              : "linear-gradient(90deg, #581c87, #a855f7)",
        }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className={cn(
                  "text-xs font-mono px-2 py-0.5 rounded-full border",
                  colors.bg,
                  colors.text,
                  colors.border
                )}
              >
                {categoryLabels[project.category]}
              </span>
              {project.showcase && (
                <span className="flex items-center gap-1 text-xs text-[var(--gold)] font-medium">
                  <Trophy size={11} />
                  {project.showcase}
                </span>
              )}
            </div>
            <h3 className="font-display text-xl text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">{project.tagline}</p>
          </div>
        </div>

        {/* Problem / Solution */}
        <div className="space-y-4 mb-5 flex-1">
          <div>
            <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-1">
              Problem
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
              {project.problem}
            </p>
          </div>
          <div>
            <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-1">
              Solution
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
              {project.solution}
            </p>
          </div>

          {/* Results */}
          <div>
            <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-2">
              Key Results
            </p>
            <ul className="space-y-1.5">
              {project.results.slice(0, 3).map((r) => (
                <li key={r} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--accent-light)] flex-shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stack chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-xs px-2 py-0.5 rounded-full bg-[var(--bg-subtle)] border border-[var(--border)] text-[var(--text-muted)] font-mono"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              <Github size={13} />
              Code
            </a>
          )}
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
          {project.demo === "#" && (
            <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] italic">
              <ExternalLink size={13} />
              Demo coming soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
