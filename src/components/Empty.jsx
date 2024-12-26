import Lottie from "lottie-react";
import React from "react";
import animateData from "../../public/lottie/empty.json";
const Empty = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-sm opacity-40">
        <Lottie animationData={animateData} loop={true} />
      </div>
    </div>
  );
};

export default Empty;
