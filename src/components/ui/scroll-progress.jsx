import { motion, useScroll } from "motion/react";

import { cn } from "@/lib/utils";

export function ScrollProgress({ className, ref, ...props }) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-px origin-left bg-linear-to-r from-[#154212] via-[#218A31] to-[#34D355]",
        className,
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  );
}
