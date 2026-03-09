"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const marqueeWords = [
  "DESIGN", "·", "DEVELOP", "·", "IDEATE", "·", "LAUNCH", "·",
  "BRAND", "·", "ANIMATE", "·", "ITERATE", "·", "SCALE", "·",
];

function Marquee() {
  const items = [...marqueeWords, ...marqueeWords];
  return (
    <div className="overflow-hidden border-t border-b border-[#c9cef4] py-4 my-14">
      <motion.div
        className="flex gap-8 whitespace-nowrap font-heading text-sm tracking-[0.3em]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {items.map((word, i) => (
          <span
            key={i}
            className={word === "·" ? "text-[#e880e5]" : "text-[#27187e]"}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function IntroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative bg-white overflow-hidden pt-28 pb-0">

      {/* Watermark */}
      <div
        className="absolute right-[-2vw] top-1/2 -translate-y-1/2 select-none pointer-events-none font-heading font-bold leading-none text-[#c9cef4]/20"
        style={{ fontSize: "clamp(10rem, 28vw, 28rem)", whiteSpace: "nowrap" }}
        aria-hidden
      >
        BUILD
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-body text-[#e880e5] tracking-[0.4em] text-xs uppercase mb-10"
        >
          Software Developer & Architect
        </motion.p>

        {/* Giant staggered headline */}
        <div className="mb-0">
          {[
            { text: "CODE THAT",   align: "left",   color: "#27187e",   stroke: false },
            { text: "PERFORMS.",   align: "left",   color: "transparent", stroke: true  },
            { text: "DESIGN THAT", align: "right",  color: "#27187e",   stroke: false },
            { text: "CONVERTS.",   align: "right",  color: "#e880e5",   stroke: false },
          ].map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: line.align === "left" ? -60 : 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.7, ease: "easeOut" }}
              className={`block font-heading font-bold leading-none ${line.align === "right" ? "text-right" : "text-left"}`}
              style={{
                fontSize: "clamp(3.5rem, 9.5vw, 9.5rem)",
                color: line.color,
                WebkitTextStroke: line.stroke ? "2px #758bee" : undefined,
              }}
            >
              {line.text}
            </motion.div>
          ))}
        </div>

        {/* Marquee strip */}
        <Marquee />

        {/* Body + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 pb-28"
        >
          <div className="max-w-xl">
            <div className="w-12 h-1 bg-[#e880e5] mb-6" />
            <p className="font-body text-[#27187e]/70 text-lg leading-relaxed">
              I specialize in creating custom websites that are visually stunning,
              user-friendly, and tailored to your unique goals. Whether you need a
              brand-new site or a redesign, I&apos;m here to bring your vision to life
              with creative solutions and modern technologies.
            </p>
          </div>

          <motion.a
            href="#work"
            whileHover={{ scale: 1.04 }}
            className="flex-shrink-0 inline-block font-heading tracking-widest text-sm px-8 py-4 bg-[#27187e] text-white hover:bg-[#e880e5] transition-colors duration-300"
          >
            SEE THE WORK →
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom wave into next section */}
      <div className="overflow-hidden leading-none" style={{ height: 60 }}>
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
          <path d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z" fill="#27187e" />
        </svg>
      </div>
    </section>
  );
}
