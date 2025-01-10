import { motion } from "framer-motion";
import React from "react";

const SectionTitle = ({ title, icon }) => {
  return (
    <>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        viewport={{
          once: true,
          amount: title === "Volunteer Needs Now" ? 0 : 0.5,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          bounceDamping: 1,
          delay: 0.2,
        }}
        className={` ${
          title === "Benefits of Volunteering"
            ? "text-xl sm:text-2xl"
            : "text-2xl"
        } md:text-4xl text-center flex justify-center gap-4 py-5 underline items-center`}
      >
        {title}
        {icon}
      </motion.h2>
    </>
  );
};

export default SectionTitle;
