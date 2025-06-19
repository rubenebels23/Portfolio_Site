import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function AnimatedSection({ children, delay = 0.2, repeat = false }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: !repeat,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    // ❌ no reset on out of view
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, delay },
        },
        hidden: {
          opacity: 0,
          y: 60,
        },
      }}
    >
      {children}
    </motion.section>
  );
}
