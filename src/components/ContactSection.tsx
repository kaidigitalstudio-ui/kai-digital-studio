"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-20 md:py-40 px-8 overflow-hidden bg-[#27187e]">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-0 right-0 w-64 md:w-[600px] h-64 md:h-[600px] rounded-full bg-[#e880e5]/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-48 md:w-[500px] h-48 md:h-[500px] rounded-full bg-[#758bee]/10 blur-3xl"
        animate={{ scale: [1, 1.3, 1], y: [0, -30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto">
        {/* Heading */}
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
          className="font-body text-[#c9cef4] text-lg max-w-xl mb-12"
        >
          I&apos;m always open to exciting new projects and collaborations. Fill out the form
          and I&apos;ll be in touch soon.
        </motion.p>

        {/* Form / Success */}
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="border border-[#e880e5]/40 px-8 py-12 text-center"
            >
              <div className="text-4xl mb-4">✦</div>
              <p className="font-heading text-2xl text-white tracking-widest mb-3">MESSAGE SENT!</p>
              <p className="font-body text-[#c9cef4]">Thanks for reaching out — I&apos;ll be in touch soon.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.7 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
            >
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-body text-xs tracking-[0.3em] uppercase text-[#c9cef4]/60">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="bg-transparent border border-[#758bee]/40 text-white placeholder:text-[#c9cef4]/30 font-body text-base px-4 py-3 outline-none focus:border-[#e880e5] transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-body text-xs tracking-[0.3em] uppercase text-[#c9cef4]/60">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="bg-transparent border border-[#758bee]/40 text-white placeholder:text-[#c9cef4]/30 font-body text-base px-4 py-3 outline-none focus:border-[#e880e5] transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="font-body text-xs tracking-[0.3em] uppercase text-[#c9cef4]/60">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="bg-transparent border border-[#758bee]/40 text-white placeholder:text-[#c9cef4]/30 font-body text-base px-4 py-3 outline-none focus:border-[#e880e5] transition-colors duration-200 resize-none"
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <p className="font-body text-sm text-[#e880e5]">
                  Something went wrong — please try emailing kai.digital.studio@gmail.com directly.
                </p>
              )}

              {/* Submit */}
              <div>
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto font-heading tracking-widest text-sm px-10 py-4 bg-[#e880e5] text-white hover:bg-[#758bee] transition-colors duration-300 disabled:opacity-60"
                >
                  {status === "loading" ? "SENDING..." : "SEND MESSAGE →"}
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-12 md:mt-20 flex flex-col sm:flex-row items-center justify-start gap-6 sm:gap-8 font-body text-[#c9cef4]/60 text-sm"
        >
          <a href="https://www.instagram.com/kai.digital.studio/" target="_blank" rel="noopener noreferrer" className="hover:text-[#e880e5] transition-colors">Instagram</a>
          <span className="hidden sm:block">·</span>
          <a href="https://www.linkedin.com/in/allie-hittinger-b09a42108/" target="_blank" rel="noopener noreferrer" className="hover:text-[#e880e5] transition-colors">LinkedIn</a>
          <span className="hidden sm:block">·</span>
          <a href="mailto:kai.digital.studio@gmail.com" className="hover:text-[#e880e5] transition-colors break-all">kai.digital.studio@gmail.com</a>
        </motion.div>
      </div>
    </section>
  );
}
