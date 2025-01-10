import { useEffect, useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";
import { Outlet } from "react-router-dom";
import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";

import { motion, useScroll, useSpring } from "framer-motion";
import useAuth from "../hooks/useAuth";

export function ScrollLinked() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          zIndex: 100,
          backgroundColor: "#ffdaa3",
        }}
      />
    </>
  );
}

const MainLayout = () => {
  const [showBtn, setShowBtn] = useState(false);
  const { dark } = useAuth();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`${dark ? "text-white" : "text-black"} font-Poppins`}>
      <ScrollLinked />
      {/* navbar */}
      <Navbar />
      <div
        className={`fixed ${
          showBtn ? "block" : "hidden"
        } right-4 z-20 bottom-12`}
      >
        <button
          onClick={scrollToTop}
          className=" duration-200 hover:opacity-80"
        >
          <IoIosArrowDropup
            className={`hover:text-4xl text-3xl duration-200 ${
              dark ? "text-white" : "text-[#004a61]"
            }`}
          />
        </button>
      </div>
      <div className="min-h-[calc(100vh-310px)] pb-10 bg-base-100 pt-10">
        {/* dynamic */}
        <Outlet />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
