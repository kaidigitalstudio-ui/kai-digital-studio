"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// "KAI DIGITAL STUDIO" = 18 chars, each types in at STAGGER intervals
const TITLE = "KAI DIGITAL STUDIO";
const STAGGER = 0.08;
const INITIAL_DELAY = 0.4;
const SUBTITLE_DELAY = INITIAL_DELAY + (TITLE.length - 1) * STAGGER + 0.3;

function makeSineD(numPeriods = 6, period = 480, amplitude = 48, viewH = 200) {
  const cy = viewH / 2;
  let d = `M 0,${cy}`;
  for (let i = 0; i < numPeriods * 2; i++) {
    const x0 = i * (period / 2);
    const dir = i % 2 === 0 ? -1 : 1;
    const cp = period / 2;
    d += ` C ${x0 + cp * 0.3},${cy + dir * amplitude} ${x0 + cp * 0.7},${cy + dir * amplitude} ${x0 + cp},${cy}`;
  }
  return d;
}

function BackgroundWave({
  color,
  opacity = 1,
  strokeWidth = 5,
  speed = 5,
  amplitude = 48,
  bottomOffset = "20%",
}: {
  color: string;
  opacity?: number;
  strokeWidth?: number;
  speed?: number;
  amplitude?: number;
  bottomOffset?: string;
}) {
  const PERIOD = 480;
  const NUM = 8;
  const d = makeSineD(NUM, PERIOD, amplitude, 200);

  return (
    <motion.div
      className="absolute left-0 pointer-events-none"
      style={{ width: "200%", bottom: bottomOffset }}
      animate={{ x: [`0px`, `-${PERIOD}px`] }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
    >
      <svg
        viewBox={`0 0 ${PERIOD * NUM} 200`}
        preserveAspectRatio="none"
        style={{ width: "100%", height: "clamp(60px, 12vw, 140px)", display: "block" }}
      >
        <path
          d={d}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          opacity={opacity}
        />
      </svg>
    </motion.div>
  );
}

export default function HeroScroll() {
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSubtitle(true), SUBTITLE_DELAY * 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#27187e" }}
    >
      <BackgroundWave color="#e880e5" opacity={0.9} strokeWidth={6} speed={4} amplitude={52} bottomOffset="18%" />
      <BackgroundWave color="#758bee" opacity={0.45} strokeWidth={3} speed={7} amplitude={30} bottomOffset="24%" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-8 text-center">
        {/* Title — typewriter reveal, words wrap as units */}
        <div className="flex items-center justify-center flex-wrap gap-x-[2.5vw] leading-none">
          {(() => {
            let charIndex = 0;
            return TITLE.split(" ").map((word, wordIdx) => {
              if (wordIdx > 0) charIndex++; // account for space
              const wordStart = charIndex;
              charIndex += word.length;
              return (
                <span key={wordIdx} className="whitespace-nowrap inline-flex">
                  {word.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      className="font-heading font-bold inline-block"
                      style={{
                        color: "#ffffff",
                        fontSize: "clamp(2.2rem, 9vw, 9rem)",
                        lineHeight: 1,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: INITIAL_DELAY + (wordStart + i) * STAGGER, duration: 0.01 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              );
            });
          })()}
        </div>

        {/* Subtitle — fades in after wave completes */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={showSubtitle ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-heading font-bold text-[#e880e5]"
          style={{ fontSize: "clamp(0.95rem, 3.5vw, 3rem)" }}
        >
          CUSTOMIZED WEBSITES
        </motion.p>

        {/* CTAs — appear alongside subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={showSubtitle ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-3 mt-2 w-full px-4 sm:px-0 sm:w-auto"
        >
          <a
            href="#work"
            className="font-heading tracking-widest text-sm px-6 py-3 bg-[#e880e5] text-white hover:bg-[#758bee] transition-all duration-300 hover:scale-105 inline-block text-center"
          >
            SEE MY WORK
          </a>
          <a
            href="#contact"
            className="font-heading tracking-widest text-sm px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-[#27187e] transition-all duration-300 hover:scale-105 inline-block text-center"
          >
            START A PROJECT
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: SUBTITLE_DELAY + 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
