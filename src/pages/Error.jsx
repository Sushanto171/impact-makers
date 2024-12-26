import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate, useRouteError } from "react-router-dom";
import animationData from "../../public/lottie/error.json";
import useDynamicTitle from "./../hooks/useDynamicTitle";

const Error = () => {
  useDynamicTitle("Error");
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="flex items-center flex-col justify-center h-screen bg-gray-100">
      <div className="w-64 h-64 md:w-[100vh] md:h-[100vh] rounded-lg overflow-hidden relative">
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute flex flex-col justify-center items-center w-full h-full z-10 text-center"
        >
          <h3 className="text-2xl md:text-4xl text-error leading-relaxed font-semibold">
            Page not Found!
          </h3>
          <p className="text-xl font-semibold opacity-60">
            Error: {error.message || error.status}
          </p>
          <button
            onClick={() => navigate("/")}
            className="text-lg transition-all duration-200 shadow font-bold mt-10 btn-outline bg-red-700 px-6 py-2 flex items-center gap-3 rounded-full"
          >
            Go Back <IoIosArrowRoundForward size={30} />
          </button>
        </motion.div>
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default Error;
