"use client";

import { motion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  y = 40,
  x = 0,
  duration = 0.6,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x,
        y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}