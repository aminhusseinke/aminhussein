import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useRef, type MouseEvent, type ReactNode } from "react";

// Wraps a CTA so it pulls gently toward the cursor within its own bounds —
// only while a real mouse is present (onMouseMove never meaningfully fires
// from touch input, but the reduced-motion check below is the explicit,
// reliable guard). whileTap's press-down feedback still applies everywhere.
//
// `className` controls the wrapper's own display/width — it defaults to
// inline-block, but a child using `w-full` (e.g. a full-width-on-mobile
// button) needs the wrapper itself set to `block w-full` or its `w-full`
// has no parent width to resolve against and silently collapses instead.
export function Magnetic({
  children,
  strength = 0.3,
  className = "inline-block",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.5 });

  if (reduceMotion) return <div className={className}>{children}</div>;

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    x.set((event.clientX - bounds.left - bounds.width / 2) * strength);
    y.set((event.clientY - bounds.top - bounds.height / 2) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className={className}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.95 }}
      // whileTap makes Framer Motion add tabIndex=0 for keyboard-triggered
      // taps by default — redundant and wrong here, since the real
      // interactive element (the Link/Button inside) already owns focus and
      // keyboard activation. Without this, keyboard/screen-reader users hit
      // two tab stops for what is visually one button.
      tabIndex={-1}
    >
      {children}
    </motion.div>
  );
}
