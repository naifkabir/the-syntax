import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);

  // Track if the element is in view
  const [hasAnimated, setHasAnimated] = useState(false);

  // Use useInView to detect when the element is in view
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    // Set `hasAnimated` to true when element enters the view
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"} // Animate when it's in view and after it enters the viewport
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
