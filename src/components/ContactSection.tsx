"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState(false);

  return (
    <section id="contact" className="relative py-40 px-8 overflow-hidden bg-[#27187e]">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#e880e5]/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#758bee]/10 blur-3xl"
        animate={{ scale: [1, 1.3, 1], y: [0, -30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="font-body text-[#e880e5] tracking-[0.4em] text-xs uppercase mb-6"
        >
          Let&apos;s Work Together
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-heading font-bold text-white leading-none mb-8"
          style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
        >
          GOT A PROJECT<br />
          IN <span className="text-[#e880e5]">MIND?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="font-body text-[#c9cef4] text-lg max-w-xl mx-auto mb-14"
        >
          I&apos;m always open to exciting new projects and collaborations. Let&apos;s build something
          amazing together.
        </motion.p>

        <motion.a
          href="mailto:hello@kaidigitalstudio.com"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          className="inline-block font-heading text-lg tracking-widest px-14 py-6 relative overflow-hidden"
          style={{ border: "2px solid #e880e5" }}
        >
          <motion.span
            className="absolute inset-0 bg-[#e880e5]"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: hovered ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ originY: 1 }}
          />
          <span
            className="relative z-10 transition-colors duration-300"
            style={{ color: hovered ? "white" : "#e880e5" }}
          >
            SAY HELLO →
          </span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-8 font-body text-[#c9cef4]/60 text-sm"
        >
          <a href="#" className="hover:text-[#e880e5] transition-colors">Instagram</a>
          <span className="hidden sm:block">·</span>
          <a href="#" className="hover:text-[#e880e5] transition-colors">LinkedIn</a>
          <span className="hidden sm:block">·</span>
          <a href="#" className="hover:text-[#e880e5] transition-colors">Dribbble</a>
          <span className="hidden sm:block">·</span>
          <a href="#" className="hover:text-[#e880e5] transition-colors">GitHub</a>
        </motion.div>
      </div>
    </section>
  );
}
