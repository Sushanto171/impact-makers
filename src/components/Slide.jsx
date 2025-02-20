import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

const Slide = ({ img, text, id, isActive }) => {
  const seeMoreHandler = () => {
    const move = document.querySelector("#all-post");
    if (move) {
      move.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      key={id}
      className=" w-full bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="h-full w-full bg-black/40">
        <div
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            bounce: 0.5,
          }}
          className="py-20 md:p-32 lg:pl-44 text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="text-xl font-bold leading-relaxed tracking-wide md:text-4xl text-white text-center"
            style={{ textShadow: "0px 3px 5px black" }}
          >
            {text}..
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              duration: 1.3,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="text-white text-sm text-center mt-4 opacity-70 px-5"
          >
            Find or Become a Volunteer for Causes That Matter
          </motion.p>

          <div className="flex justify-center mt-12">
            <button
              onClick={seeMoreHandler}
              className="btn border-0 text-white bg-[#004A61] hover:text-[#ffdaa3] hover:bg-[#004A61]"
            >
              Get Started
              <IoIosArrowRoundForward size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
