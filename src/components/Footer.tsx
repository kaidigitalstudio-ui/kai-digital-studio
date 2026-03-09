"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#27187e] border-t border-[#758bee]/20 px-8 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-heading text-xl font-bold text-white tracking-widest">
          KAI<span className="text-[#e880e5]">.</span>
        </span>
        <p className="font-body text-[#c9cef4]/40 text-xs tracking-widest text-center">
          © {new Date().getFullYear()} KAI DIGITAL STUDIO. ALL RIGHTS RESERVED.
        </p>
        <motion.a
          href="#"
          whileHover={{ y: -2 }}
          className="font-body text-xs text-[#758bee] hover:text-[#e880e5] transition-colors tracking-widest"
        >
          BACK TO TOP ↑
        </motion.a>
      </div>
    </footer>
  );
}
