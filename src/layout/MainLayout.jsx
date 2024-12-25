import { useEffect, useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";
import { Outlet } from "react-router-dom";
import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";
const MainLayout = () => {
  const [showBtn, setShowBtn] = useState(false);
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
    <div className="font-Poppins ">
      {/* navbar */}
      <Navbar />
      <div
        className={`fixed ${
          showBtn ? "block" : "hidden"
        } right-2 z-20 bottom-12`}
      >
        <button
          onClick={scrollToTop}
          className=" opacity-50 duration-200 hover:opacity-80"
        >
          <IoIosArrowDropup className="" size={30} />
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
