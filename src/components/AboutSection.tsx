"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const skills = [
  "Software Architecture", "Front-End Development", "UI/UX Design",
  "Design Systems", "React", "Next.js", "Figma", "Tailwind CSS",
  "Brand Identity", "Web Design",
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" ref={ref} className="relative bg-white overflow-hidden">

      {/* Parallax watermark */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-heading font-bold text-[#c9cef4]/50 whitespace-nowrap leading-none pr-4"
          style={{ fontSize: "clamp(10rem, 26vw, 26rem)" }}
        >
          ALLIE
        </span>
      </motion.div>

      {/* ── Full-width name banner ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 border-b border-[#758bee]/20 px-8 md:px-16 lg:px-24 pt-20 pb-8"
      >
        <p className="font-body text-[#758bee] tracking-[0.4em] text-xs uppercase mb-4">
          About the Founder
        </p>
        <h2 className="font-heading font-bold leading-none" style={{ fontSize: "clamp(2rem, 10vw, 10rem)" }}>
          <span className="text-[#27187e]">ALLIE KAI </span>
          <span style={{ WebkitTextStroke: "2px #e880e5", color: "transparent" }}>HITTINGER</span>
        </h2>
      </motion.div>

      {/* ── Main content: photo left, text right ── */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[2fr_3fr]">

        {/* Photo column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex items-center justify-center py-8 md:py-16 px-8 md:px-16 lg:px-24"
        >
          <div className="relative w-full max-w-sm md:max-w-md">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl" style={{ aspectRatio: "3/4", clipPath: "inset(0 0 5% 0 round 1rem)" }}>
              <Image
                src="/allie.webp"
                alt="Allie Kai Hittinger — Founder, Kai Digital Studio"
                fill
                className="object-cover object-[center_0%]"
                sizes="(max-width: 1024px) 80vw, 400px"
              />
            </div>

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#27187e] text-white px-4 py-2 whitespace-nowrap"
            >
              <p className="font-heading text-xs tracking-widest">CHICAGO, IL</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex flex-col justify-center gap-8 px-8 py-12 md:px-16 md:py-16 lg:px-24 lg:border-l border-[#758bee]/20"
        >
          <div>
            <p className="font-body text-[#27187e]/80 text-lg leading-relaxed mb-5">
              After a decade as a software developer and architect — working with the likes of
              Deloitte, Vanguard, Meta, and Inspire11 on Fortune 500 digital solutions — I launched
              Kai Digital Studio to combine my passion for design and development with the
              flexibility of freelancing.
            </p>
            <p className="font-body text-[#27187e]/80 text-lg leading-relaxed">
              My background is in computer science, with deep expertise in front-end development
              and design systems. I specialize in building interfaces that are as intuitive as
              they are beautiful.
            </p>
          </div>

          <p className="font-body text-[#27187e]/80 text-lg leading-relaxed">
            Faith plays a central role in my life, and as a Christian, I strive to
            approach every project with integrity, purpose, and a heart for serving others.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.04 }}
                whileHover={{ backgroundColor: "#e880e5", color: "#fff", borderColor: "#e880e5" }}
                className="font-body text-sm px-4 py-2 border border-[#758bee] text-[#27187e] cursor-default transition-colors duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Company logos */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9 }}
            className="border-t border-[#758bee]/20 pt-8"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[#27187e]/40 mb-6">Worked With</p>
            <div className="flex flex-wrap items-center gap-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/deloitte.svg" alt="Deloitte" className="h-6 md:h-5 w-auto opacity-50 grayscale hover:opacity-90 hover:grayscale-0 transition-all duration-300" style={{ marginBottom: "4px" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/vanguard.png" alt="Vanguard" className="h-10 md:h-14 w-auto opacity-50 grayscale hover:opacity-90 hover:grayscale-0 transition-all duration-300" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/inspire11.png" alt="Inspire11" className="h-8 md:h-11 w-auto opacity-50 grayscale hover:opacity-90 hover:grayscale-0 transition-all duration-300" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/meta.png" alt="Meta" className="h-6 md:h-5 w-auto opacity-50 grayscale hover:opacity-90 hover:grayscale-0 transition-all duration-300" style={{ marginBottom: "4px" }} />
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
