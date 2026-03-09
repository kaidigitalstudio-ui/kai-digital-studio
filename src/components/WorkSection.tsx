"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "Brand Identity System",
    category: "Branding / Design",
    year: "2024",
    color: "#758bee",
    accent: "#e880e5",
    description: "Complete visual identity for a next-gen fintech startup.",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    year: "2024",
    color: "#e880e5",
    accent: "#c9cef4",
    description: "Full-stack storefront with custom CMS and animated UI.",
  },
  {
    title: "Motion Design Campaign",
    category: "Motion / UI",
    year: "2023",
    color: "#c9cef4",
    accent: "#27187e",
    description: "Series of animated brand assets for social media launch.",
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    year: "2023",
    color: "#27187e",
    accent: "#758bee",
    description: "Intuitive analytics dashboard with real-time data visualization.",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -6 }}
      className="group relative overflow-hidden cursor-pointer"
      style={{ backgroundColor: project.color }}
    >
      {/* Number */}
      <div
        className="absolute top-4 right-6 font-heading text-8xl font-bold opacity-10 select-none"
        style={{ color: project.accent }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="p-10 min-h-64 flex flex-col justify-between">
        <div>
          <span className="font-body text-xs tracking-[0.3em] uppercase opacity-70">
            {project.category} — {project.year}
          </span>
          <h3 className="font-heading text-4xl font-bold text-white mt-3 leading-tight">
            {project.title}
          </h3>
          <p className="font-body text-white/70 mt-3 text-sm">{project.description}</p>
        </div>

        <motion.div
          className="flex items-center gap-3 mt-8"
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <span className="font-heading text-sm tracking-widest text-white/80 group-hover:text-white transition-colors">
            VIEW PROJECT
          </span>
          <motion.span
            className="text-white text-xl"
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.div>
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </motion.div>
  );
}

export default function WorkSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="work" className="py-32 px-8 bg-[#27187e]">
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
          <h2 className="font-heading text-7xl md:text-9xl font-bold text-white leading-none">
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
