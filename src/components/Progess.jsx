import { HStack } from "@chakra-ui/react";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  StatHelpText,
  StatLabel,
  StatRoot,
  StatUpTrend,
  StatValueText,
} from "../components/ui/stat";

const Progress = ({ data, i }) => {
  let { start, end, label, inc } = data;
  const [displayValue, setDisplayValue] = useState(0);
  const [isView, setIsView] = useState(false);

  useEffect(() => {
    if (isView) {
      const duration = 1000;
      const increment = (end - start) / (duration / 16);

      const animate = () => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end.toFixed(1));
          return;
        } else {
          setDisplayValue(start.toFixed(1));
          requestAnimationFrame(animate);
        }
      };
      animate();
    }
  }, [isView]);
  return (
    <StatRoot>
      <div className="w-full shadow-lg border flex flex-col justify-center items-center py-8 rounded-md bg-base-300 space-y-4">
        <StatLabel>{label} </StatLabel>
        <HStack>
          <motion.div
            initial={{ opacity: 0 }}
            onViewportEnter={() => setIsView(true)}
            transition={{ duration: 1, ease: "easeInOut" }}
            whileInView={[{ opacity: 1 }]}
            viewport={{ once: true }}
          >
            <StatValueText
              value={displayValue}
              formatOptions={{ style: "decimal" }}
            />
          </motion.div>
          <StatUpTrend className="bg-[#004A61]">{inc}%</StatUpTrend>
        </HStack>
        <StatHelpText>since last month</StatHelpText>
      </div>
    </StatRoot>
  );
};
export default Progress;
