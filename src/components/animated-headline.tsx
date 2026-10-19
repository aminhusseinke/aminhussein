import { motion, useReducedMotion, type Variants } from "motion/react";
import { useMemo, type ElementType, type ReactNode } from "react";

// A plain text run, or a run that needs its own className (e.g. the orange
// italic emphasis word), or a hard line break.
type Segment = { text: string; className?: string } | { break: true };

const container: Variants = {
  hidden: {},
  visible: (delaySeconds: number) => ({
    transition: { staggerChildren: 0.05, delayChildren: delaySeconds },
  }),
};

const word: Variants = {
  // Each word sits inside its own overflow:hidden mask (below) and slides up
  // from fully below that mask — the classic premium-agency headline reveal,
  // word by word rather than the whole line fading in at once.
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};

export function AnimatedHeadline({
  as = "h1",
  segments,
  className,
  delay = 0,
}: {
  as?: ElementType;
  segments: Segment[];
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  // motion.create() must be called once per element type, not on every
  // render — recreating it each render gives React a new component
  // identity, which remounts the whole subtree and kills the animation.
  const MotionTag = useMemo(() => motion.create(as as ElementType), [as]);
  const Tag = as;

  if (reduceMotion) {
    return (
      <Tag className={className}>
        {segments.map((seg, i) =>
          "break" in seg ? <br key={i} /> : <span key={i} className={seg.className}>{seg.text}</span>,
        )}
      </Tag>
    );
  }

  const tokens: ReactNode[] = [];
  segments.forEach((seg, segIndex) => {
    if ("break" in seg) {
      tokens.push(<br key={`br-${segIndex}`} />);
      return;
    }
    // split(" ") on a segment that ends with a trailing space (the usual way
    // to leave room before the next segment) produces a trailing "" entry —
    // filtering it out to drop empty words also silently eats that boundary
    // space, so "...with " + "consequence." rendered as "...withconsequence."
    // with nothing between them. A single space is reinserted after the
    // segment instead of relying on one surviving the split.
    const words = seg.text.split(" ").filter(Boolean);
    words.forEach((w, i) => {
      tokens.push(
        <span key={`${segIndex}-${i}`} style={{ display: "inline-block", overflow: "hidden" }}>
          <motion.span variants={word} style={{ display: "inline-block" }} className={seg.className}>
            {w}
          </motion.span>
        </span>,
      );
      if (i < words.length - 1) tokens.push(" ");
    });
    const nextSeg = segments[segIndex + 1];
    if (nextSeg && !("break" in nextSeg)) tokens.push(" ");
  });

  return (
    <MotionTag
      className={className}
      variants={container}
      custom={delay / 1000}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {tokens}
    </MotionTag>
  );
}
