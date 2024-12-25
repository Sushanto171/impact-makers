import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Slide = ({ img, text }) => {
  const navigate = useNavigate();
  const seeMoreHandler = () => {
    const move = document.querySelector("#all-post");
    if (move) {
      move.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className={`h-[20rem] md:h-[30rem] w-full bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="h-full w-full bg-black/50 ">
        <div className="py-20 md:p-32 lg:pl-44 text-left">
          <h1
            className="text-xl font-bold leading-relaxed tracking-wide md:text-4xl text-white text-center"
            style={{ textShadow: "0px 3px 5px black " }}
          >
            {text}..
          </h1>
          <p className="text-white text-sm text-center mt-4 opacity-70 px-5">
            Find or Become a Volunteer for Causes That Matter
          </p>
          <div className="flex justify-center mt-8">
            <button
              onClick={seeMoreHandler}
              className="btn  bg-[#ffdaa3] hover:bg-transparent hover:text-white"
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
