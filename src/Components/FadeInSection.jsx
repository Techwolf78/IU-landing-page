import React from "react";
import { motion } from "framer-motion";

const FadeInSection = ({ children, delay = 0, duration = 0.6 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{
        duration: duration,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom premium easeOut cubic
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
