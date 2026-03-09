"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const skills = [
  "Brand Identity", "UI/UX Design", "Web Development",
  "Motion Design", "Typography", "Next.js", "Figma",
  "React", "Tailwind CSS", "Illustration",
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" className="relative py-32 overflow-hidden bg-[#c9cef4]">
      {/* Background animated text */}
      <motion.div
        style={{ x }}
        className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-heading text-[20vw] font-bold text-[#758bee]/10 select-none pointer-events-none"
      >
        ABOUT ME ABOUT ME
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-[#758bee] tracking-[0.4em] text-xs uppercase mb-4">
              About Me
            </p>
            <h2 className="font-heading text-6xl md:text-7xl font-bold text-[#27187e] leading-none mb-8">
              I BUILD<br />
              <span className="text-[#e880e5]">THINGS</span><br />
              PEOPLE LOVE
            </h2>
            <p className="font-body text-[#27187e]/80 text-lg leading-relaxed mb-6">
              I&apos;m a designer and web developer with a passion for bold, expressive work that doesn&apos;t
              play it safe. I blend strategic thinking with creative execution to help brands stand
              out in a crowded digital world.
            </p>
            <p className="font-body text-[#27187e]/80 text-lg leading-relaxed mb-10">
              Whether you need a full brand identity, a custom-built website, or eye-catching motion
              graphics — I bring the same energy and attention to detail to every project.
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  whileHover={{ scale: 1.1, backgroundColor: "#e880e5", color: "#fff" }}
                  className="font-body text-sm px-4 py-2 border border-[#758bee] text-[#27187e] cursor-default transition-colors duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Abstract shape */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-dashed border-[#758bee]/40"
              />
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border-4 border-dashed border-[#e880e5]/40"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="font-heading text-8xl font-bold text-[#27187e]"
                  >
                    KAI
                  </motion.div>
                  <div className="font-body text-[#758bee] tracking-widest text-sm mt-2">
                    DIGITAL STUDIO
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              {[
                { label: "5+ Years", top: "5%", left: "60%", bg: "#e880e5" },
                { label: "50+ Projects", top: "75%", left: "65%", bg: "#758bee" },
                { label: "Happy Clients", top: "80%", left: "5%", bg: "#27187e" },
              ].map((badge) => (
                <motion.div
                  key={badge.label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
                  className="absolute font-heading text-xs text-white px-3 py-1.5 rounded-sm whitespace-nowrap"
                  style={{ backgroundColor: badge.bg, top: badge.top, left: badge.left }}
                >
                  {badge.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
