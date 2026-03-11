"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Allie approaches website building with the utmost professionalism and talent. Her unique ability is combining an intricate knowledge of software development which makes her websites technologically seamless, but she also brings an understanding of design and layout that make her websites beautiful.",
    name: "Stephanie W.",
    role: "Client",
    color: "#e880e5",
  },
  {
    quote:
      "Allie Hittinger is the real deal! I came to her with some Squarespace spacing and functionality issues on my real estate website. She took a look and provided thoughtful advice for how best to improve the website. I'm amazed at Allie's attention to detail, organization, and promptness. She got everything done for me in record time, and she truly went above and beyond.",
    name: "Melanie E.",
    role: "Real Estate Client",
    color: "#758bee",
  },
  {
    quote:
      "Allie truly made my website dreams come to life! As a creative, it was great to work with someone who took the time to understand my brand, vision for my website, and target audience. The website she created is both user-friendly and visually appealing — perfect for my needs! Allie is incredibly attentive, detail-oriented, and a pleasure to work with.",
    name: "Dani C.",
    role: "Creative Client",
    color: "#c9cef4",
  },
  {
    quote:
      "It has been a privilege working with one of the most driven engineers I have ever met. Allie brings an expert design touch to websites. Everything Allie touches turns to gold. She is incredibly talented and a lot of fun to talk to.",
    name: "Louis S.",
    role: "Colleague",
    color: "#e880e5",
  },
  {
    quote:
      "Allie is a powerhouse of talent and innovation. She blends top-tier software engineering with cutting-edge design to create applications that are both visually stunning and seamlessly engaging. Her remarkable ability to connect with clients ensures every project is delivered on time, within budget, and exceeds expectations.",
    name: "Paul S.",
    role: "Colleague",
    color: "#758bee",
  },
  {
    quote:
      "Allie Hittinger is one of my favorite developers to work with. She is very gifted in managing the intersection of frontend development and UI/UX design patterns. In addition to her rockstar technical skills, she also has an incredibly bubbly personality — working with her, you'll have a partner who really wants to help your small business succeed!",
    name: "Jacques D.",
    role: "Colleague",
    color: "#c9cef4",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const current = testimonials[active];

  return (
    <section ref={ref} id="testimonials" className="relative py-32 overflow-hidden bg-white">

      {/* Watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none font-heading font-bold leading-none text-[#c9cef4]/30 whitespace-nowrap"
        style={{ fontSize: "clamp(6rem, 18vw, 18rem)" }}
        aria-hidden
      >
        PRAISE
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-body text-[#e880e5] tracking-[0.4em] text-xs uppercase mb-4">
            Kind Words
          </p>
          <h2
            className="font-heading font-bold text-[#27187e] leading-none"
            style={{ fontSize: "clamp(2.5rem, 9vw, 8rem)" }}
          >
            PEOPLE<br />
            <span style={{ WebkitTextStroke: "2px #758bee", color: "transparent" }}>
              &amp; PRAISE
            </span>
          </h2>
        </motion.div>

        {/* Featured quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mb-12"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              {/* Opening quote mark */}
              <div
                className="font-heading font-bold leading-none mb-4 select-none"
                style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: current.color, lineHeight: 0.8 }}
              >
                &ldquo;
              </div>

              <p className="font-body text-[#27187e]/80 text-base md:text-xl leading-relaxed mb-8 max-w-3xl">
                {current.quote}
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-white text-sm flex-shrink-0"
                  style={{ backgroundColor: current.color }}
                >
                  {current.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-bold text-[#27187e] text-lg tracking-wide">
                    {current.name}
                  </p>
                  <p className="font-body text-[#758bee] text-xs tracking-widest uppercase">
                    {current.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Navigation dots + arrows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-6"
        >
          {/* Prev */}
          <button
            onClick={() => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)}
            className="font-heading text-sm tracking-widest text-[#27187e]/40 hover:text-[#e880e5] transition-colors"
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-3">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === active ? 28 : 8,
                  height: 8,
                  backgroundColor: i === active ? current.color : "#c9cef4",
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => setActive((a) => (a + 1) % testimonials.length)}
            className="font-heading text-sm tracking-widest text-[#27187e]/40 hover:text-[#e880e5] transition-colors"
          >
            →
          </button>

          {/* Counter */}
          <span className="ml-auto font-heading text-xs tracking-widest text-[#c9cef4]">
            {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
        </motion.div>

        {/* Thumbnail strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3"
        >
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="text-left p-3 transition-all duration-300 border-l-2"
              style={{
                borderColor: i === active ? t.color : "transparent",
                backgroundColor: i === active ? `${t.color}15` : "#f8f8ff",
              }}
            >
              <p
                className="font-heading text-sm font-bold transition-colors duration-300"
                style={{ color: i === active ? t.color : "#27187e99" }}
              >
                {t.name}
              </p>
              <p className="font-body text-xs text-[#27187e]/50 mt-0.5 line-clamp-2 leading-snug">
                {t.quote.slice(0, 60)}…
              </p>
            </button>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
