import { motion } from "framer-motion";
import React from "react";
import { TbAugmentedReality2 } from "react-icons/tb";
import Progress from "./Progess";
import SectionTitle from "./SectionTitle";

const RealTime = () => {
  const datas = [
    { start: 0, inc: 12, end: 2850, label: "Total Volunteers" },
    { start: 0, inc: 7, end: 1860, label: "Total Opportunities" },
    { start: 0, inc: 0.2, end: 87, label: "Total Events" },
  ];
  return (
    <div className="">
      <SectionTitle title={" Real Time Stat"} icon={<TbAugmentedReality2 />} />
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
