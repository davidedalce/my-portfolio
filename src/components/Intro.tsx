"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroProps {
  onComplete: () => void;
}

export default function Intro({ onComplete }: IntroProps) {
  const [phase, setPhase] = useState<
    "fadeIn" | "visible" | "fadeOut" | "slideUp" | "done"
  >("fadeIn");

  useEffect(() => {
    // Phase 1: Fade in text (0.8s)
    const fadeInTimer = setTimeout(() => {
      setPhase("visible");
    }, 800);

    // Phase 2: Stay visible (2.5s)
    const visibleTimer = setTimeout(() => {
      setPhase("fadeOut");
    }, 3300);

    // Phase 3: Fade out text (0.5s)
    const fadeOutTimer = setTimeout(() => {
      setPhase("slideUp");
    }, 3800);

    // Phase 4: Slide up background (0.6s)
    const slideUpTimer = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 4400);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(visibleTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(slideUpTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]"
          initial={{ y: 0 }}
          animate={{ y: phase === "slideUp" ? "-100%" : 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.6,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity:
                phase === "fadeIn"
                  ? 0
                  : phase === "visible"
                  ? 1
                  : phase === "fadeOut" || phase === "slideUp"
                  ? 0
                  : 0,
              y: phase === "visible" ? 0 : 10,
            }}
            transition={{
              duration: phase === "fadeIn" ? 0.8 : 0.5,
              ease: "easeOut",
            }}
          >
            <span className="text-4xl md:text-5xl font-bold text-white">
              Hello
            </span>
            <span className="text-4xl md:text-5xl ml-3">👋</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
