import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "clip" | "scale";
};

// A touch of underdamping (ratio ~0.9) reads as confident settle rather than
// a flat, mechanical ease — enough life to feel premium, not enough to
// bounce or look cheap.
const spring = { type: "spring", stiffness: 110, damping: 18, mass: 0.9 } as const;
const clipEase = { duration: 1.1, ease: [0.16, 1, 0.3, 1] } as const;

// Variants are defined as functions of `delaySeconds` (passed via the
// `custom` prop) rather than static objects: a variant's own `transition`
// always wins over the component-level `transition` prop in Framer Motion,
// so a flat `transition={{ delay }}` prop here would silently be ignored.
const variants: Record<NonNullable<RevealProps["variant"]>, Variants> = {
  up: {
    hidden: { opacity: 0, y: 28 },
    visible: (delaySeconds: number) => ({ opacity: 1, y: 0, transition: { ...spring, delay: delaySeconds } }),
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: (delaySeconds: number) => ({ opacity: 1, scale: 1, transition: { ...spring, delay: delaySeconds } }),
  },
  // Clip-path doesn't settle naturally under spring physics, so this variant
  // keeps a duration-based curve instead.
  clip: {
    hidden: { opacity: 0, y: 14, clipPath: "inset(0 0 100% 0)" },
    visible: (delaySeconds: number) => ({
      opacity: 1,
      y: 0,
      clipPath: "inset(0 0 0% 0)",
      transition: { ...clipEase, delay: delaySeconds },
    }),
  },
};

export function Reveal({ children, className = "", delay = 0, variant = "up" }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      custom={delay / 1000}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -6% 0px" }}
    >
      {children}
    </motion.div>
  );
}
