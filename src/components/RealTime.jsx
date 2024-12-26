import { motion } from "framer-motion";
import React from "react";
import Progress from "./Progess";

const RealTime = () => {
  const datas = [
    { start: 0, inc: 12, end: 2850, label: "Total Volunteers" },
    { start: 0, inc: 7, end: 1860, label: "Total Opportunities" },
    { start: 0, inc: 0.2, end: 87, label: "Total Events" },
  ];
  return (
    <div className="w-10/12 mx-auto">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        viewport={{ once: true, amount: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          bounceDamping: 1,
          delay: 0.2,
        }}
        className="text-3xl md:text-4xl text-gray-700 text-center flex justify-center gap-4 py-5 items-center underline"
      >
        Real Time Stat
      </motion.h2>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        viewport={{ once: true, amount: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          bounceDamping: 1,
          delay: 0.4,
        }}
        className="sm:grid mt-5 grid-cols-3 gap-5 space-y-8 sm:space-y-0"
      >
        {datas.map((data, i) => (
          <Progress key={i} data={data} i={i} />
        ))}
      </motion.div>
    </div>
  );
};

export default RealTime;
