"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, MessageSquare } from "lucide-react";

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "sonalsrao26@gmail.com",
    href: "mailto:sonalsrao26@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sonal-jeppu-rao",
    href: "https://www.linkedin.com/in/sonal-jeppu-rao/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/jeppusonal",
    href: "https://github.com/jeppusonal",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[var(--bg-subtle)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <span className="text-xs font-mono text-[var(--accent-light)] uppercase tracking-widest mb-3 block">
            Contact
          </span>

          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-[var(--text-primary)] mb-4">
            Let&apos;s work together.
          </h2>

          <p className="text-[var(--text-secondary)] leading-relaxed">
            I&apos;m actively seeking Data Analyst, Business Intelligence
            Analyst, Data Engineer, and Data Scientist opportunities in Sydney
            or remote across Australia. If you&apos;re hiring or would like to
            discuss data-driven solutions, I&apos;d love to connect.
          </p>

          <div className="flex items-center justify-center gap-1.5 mt-3 text-sm text-[var(--text-muted)]">
            <MapPin size={13} />
            <span>Sydney, NSW, Australia · Open to full-time roles</span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {CONTACT_LINKS.map(({ icon: Icon, label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="flex flex-col items-center text-center p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl hover:border-[var(--accent)] transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center mb-3 group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition-colors">
                <Icon
                  size={16}
                  className="text-[var(--accent-light)] group-hover:text-white transition-colors"
                />
              </div>

              <p className="font-medium text-sm text-[var(--text-primary)] mb-0.5">
                {label}
              </p>

              <p className="text-xs text-[var(--accent-light)] font-mono">
                {value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 max-w-2xl mx-auto"
        >
          <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[var(--accent)] flex items-center justify-center flex-shrink-0">
              <MessageSquare size={14} className="text-white" />
            </div>

            <div>
              <p className="font-medium text-sm text-[var(--text-primary)] mb-1">
                Available for Data & AI opportunities.
              </p>

              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                I combine 2 years of industry software development experience
                with advanced training in Data Science and Analytics from UTS.
                My work spans machine learning, business intelligence, data
                engineering, computer vision, and applied AI. I&apos;m currently
                seeking opportunities to help organisations make smarter
                decisions through data, automation, and intelligent systems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}