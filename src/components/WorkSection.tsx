"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "Cake by DC",
    category: "Branding & Web Design",
    color: "#e880e5",
    accent: "#ffffff",
    description: "The site is designed to reflect the heart and artistry behind Cake by DC — clean, modern, and as delightful as their treats.",
    href: "https://cakebydc.com",
  },
  {
    title: "Stephanie Wisner",
    category: "Personal Brand & Portfolio",
    color: "#758bee",
    accent: "#ffffff",
    description: "Stephanie's site showcases her dynamic journey, from groundbreaking science to insightful writing and innovative leadership.",
    href: "https://stephaniewisner.com",
  },
  {
    title: "M-15 Family Medical Center",
    category: "Healthcare & Web Design",
    color: "#c9cef4",
    accent: "#27187e",
    description: "A comprehensive family medicine website providing accessible healthcare information and patient resources.",
    href: "https://m15familymedicalcenter.com",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.a
      ref={ref}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -6 }}
      className="group relative overflow-hidden cursor-pointer block"
      style={{ backgroundColor: project.color }}
    >
      {/* Number */}
      <div
        className="absolute top-4 right-6 font-heading text-6xl md:text-8xl font-bold opacity-10 select-none"
        style={{ color: project.accent }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="p-6 md:p-10 min-h-48 md:min-h-64 flex flex-col justify-between">
        <div>
          <span className="font-body text-xs tracking-[0.3em] uppercase" style={{ color: `${project.accent}99` }}>
            {project.category}
          </span>
          <h3
            className="font-heading text-2xl md:text-4xl font-bold mt-3 leading-tight"
            style={{ color: project.accent }}
          >
            {project.title}
          </h3>
          <p className="font-body mt-3 text-sm" style={{ color: `${project.accent}b3` }}>{project.description}</p>
        </div>

        <div className="flex items-center gap-3 mt-8">
          <span
            className="font-heading text-sm tracking-widest transition-colors"
            style={{ color: `${project.accent}cc` }}
          >
            VIEW PROJECT
          </span>
          <motion.span
            style={{ color: project.accent }}
            className="text-xl"
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </div>
      </div>

      <motion.div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.a>
  );
}

export default function WorkSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="work" className="py-32 px-8 bg-[#27187e]"><span id="projects" className="absolute -top-20" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, x: -40 }}
          animate={titleInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="font-body text-[#e880e5] tracking-[0.4em] text-xs uppercase mb-4">
            Selected Work
          </p>
          <h2 className="font-heading text-5xl md:text-7xl lg:text-9xl font-bold text-white leading-none">
            MY<br />
            <span style={{ WebkitTextStroke: "2px #758bee", color: "transparent" }}>
              PROJECTS
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
