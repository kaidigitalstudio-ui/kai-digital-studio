"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    desc: "Logos, color systems, typography, and the full visual language your brand needs to make a lasting impression.",
    icon: "◈",
  },
  {
    number: "02",
    title: "Web Design & Dev",
    desc: "Custom-built websites with animations, pixel-perfect design, and clean code. No templates. No compromises.",
    icon: "⬡",
  },
  {
    number: "03",
    title: "UI/UX Design",
    desc: "Intuitive interfaces designed with your users in mind — wireframes, prototypes, and polished final designs.",
    icon: "◉",
  },
  {
    number: "04",
    title: "Motion & Animation",
    desc: "Bring your brand to life with scroll animations, micro-interactions, and dynamic visual storytelling.",
    icon: "◎",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-20"
        >
          <p className="font-body text-[#e880e5] tracking-[0.4em] text-xs uppercase mb-4">
            What I Do
          </p>
          <h2 className="font-heading text-7xl md:text-9xl font-bold text-[#27187e] leading-none">
            SER<span className="text-[#758bee]">VICES</span>
          </h2>
        </motion.div>

        <div className="divide-y divide-[#c9cef4]">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group py-10 cursor-default flex items-start gap-8 relative overflow-hidden"
            >
              {/* Hover background */}
              <motion.div
                className="absolute inset-0 bg-[#27187e]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === i ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ originX: 0 }}
              />

              <div className="relative z-10 flex items-start gap-8 w-full">
                <span
                  className="font-heading text-sm tracking-widest transition-colors duration-300"
                  style={{ color: hoveredIndex === i ? "#758bee" : "#c9cef4" }}
                >
                  {service.number}
                </span>

                <span
                  className="text-3xl transition-colors duration-300 mt-1"
                  style={{ color: hoveredIndex === i ? "#e880e5" : "#758bee" }}
                >
                  {service.icon}
                </span>

                <div className="flex-1">
                  <h3
                    className="font-heading text-4xl md:text-5xl font-bold transition-colors duration-300"
                    style={{ color: hoveredIndex === i ? "white" : "#27187e" }}
                  >
                    {service.title}
                  </h3>
                  <motion.p
                    className="font-body mt-3 text-sm leading-relaxed max-w-xl transition-colors duration-300"
                    style={{ color: hoveredIndex === i ? "#c9cef4" : "#27187e99" }}
                  >
                    {service.desc}
                  </motion.p>
                </div>

                <span
                  className="font-heading text-2xl self-center transition-all duration-300"
                  style={{
                    color: hoveredIndex === i ? "#e880e5" : "#c9cef4",
                    transform: hoveredIndex === i ? "translateX(8px)" : "translateX(0)",
                  }}
                >
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
