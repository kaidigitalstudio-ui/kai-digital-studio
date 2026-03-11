"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "DISCOVERY & DESIGN",
    color: "#e880e5",
    items: [
      "Conduct a discovery session to define your website's purpose and goals",
      "Discuss your target audience, content requirements, and design preferences",
      "Explore functional needs like forms, booking systems, or e-commerce",
      "Present design concepts for your approval",
      "Share a draft for feedback before full development begins",
    ],
  },
  {
    number: "02",
    title: "BUILD & CUSTOMIZE",
    color: "#758bee",
    items: [
      "Build out site navigation including all key pages",
      "Integrate branding elements — logos, custom graphics, and visual identity",
      "Ensure full cohesion between design and your brand",
      "Configure features such as contact forms and email integrations",
      "Optimize all content for SEO",
      "Preview and test across desktop, tablet, and mobile",
    ],
  },
  {
    number: "03",
    title: "LAUNCH & SUPPORT",
    color: "#c9cef4",
    items: [
      "Review the site together and incorporate final feedback",
      "Connect your domain and configure secure browsing",
      "Walk you through a tutorial on managing your site",
      "Provide a written guide for essential tasks",
      "Post-launch support period for adjustments",
      "Ongoing maintenance plan available for updates and enhancements",
    ],
  },
];

function Step({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLast = index === steps.length - 1;

  return (
    <div ref={ref} className="relative flex gap-8 md:gap-14">

      {/* ── Timeline spine ── */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 200 }}
          className="relative flex items-center justify-center rounded-full z-10"
          style={{
            width: 44,
            height: 44,
            backgroundColor: step.color,
            boxShadow: `0 0 24px ${step.color}66`,
          }}
        >
          <span className="font-heading font-bold text-[#27187e] text-sm tracking-widest">
            {step.number}
          </span>
        </motion.div>

        {/* Vertical connector */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="w-px flex-1 mt-2 origin-top"
            style={{
              background: `linear-gradient(to bottom, ${step.color}, ${steps[index + 1].color})`,
              minHeight: 80,
            }}
          />
        )}
      </div>

      {/* ── Content ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="pb-12 md:pb-20"
      >
        {/* Step label */}
        <p
          className="font-body text-xs tracking-[0.4em] uppercase mb-3"
          style={{ color: step.color }}
        >
          Step {step.number}
        </p>

        {/* Title */}
        <h3
          className="font-heading font-bold leading-none mb-8"
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            WebkitTextStroke: `2px ${step.color}`,
            color: "transparent",
          }}
        >
          {step.title}
        </h3>

        {/* Bullet items */}
        <ul className="flex flex-col gap-4">
          {step.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
              className="flex items-start gap-4"
            >
              <span
                className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full"
                style={{ backgroundColor: step.color }}
              />
              <span className="font-body text-[#c9cef4]/80 text-base leading-relaxed">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function ApproachSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgX = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={sectionRef} id="approach" className="relative py-32 overflow-hidden bg-[#27187e]">

      {/* Parallax watermark */}
      <motion.div
        style={{ x: bgX, fontSize: "clamp(8rem, 22vw, 22rem)" }}
        className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-heading font-bold text-[#758bee]/[0.08] select-none pointer-events-none leading-none"
        aria-hidden
      >
        APPROACH
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="font-body text-[#e880e5] tracking-[0.4em] text-xs uppercase mb-4">
            How I Work
          </p>
          <h2 className="font-heading font-bold text-white leading-none"
            style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
          >
            MY<br />
            <span style={{ WebkitTextStroke: "2px #758bee", color: "transparent" }}>
              APPROACH
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div>
          {steps.map((step, i) => (
            <Step key={step.number} step={step} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
