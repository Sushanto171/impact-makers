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
      className="h-[20rem] md:h-[30rem] w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="h-full w-full bg-black/50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            bounce: 0.5,
          }}
          className="py-20 md:p-32 lg:pl-44 text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="text-xl font-bold leading-relaxed tracking-wide md:text-4xl text-white text-center"
          >
            {text}..
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="text-white text-sm text-center mt-4 opacity-70 px-5"
          >
            Find or Become a Volunteer for Causes That Matter
          </motion.p>

          <div className="flex justify-center mt-8">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.6,
              }}
              onClick={seeMoreHandler}
              className="btn bg-[#ffdaa3] hover:bg-transparent hover:text-white"
            >
              Get Started
              <IoIosArrowRoundForward size={30} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Slide;
