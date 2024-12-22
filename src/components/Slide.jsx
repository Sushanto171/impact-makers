import { IoIosArrowRoundForward } from "react-icons/io";

const Slide = ({ img, text }) => {
  return (
    <div
      className={`h-[20rem] md:h-[30rem] w-full bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="h-full w-full bg-black/50 ">
        <div className="p-20 md:p-32 lg:pl-44 text-left">
          <h1
            className="text-2xl font-bold leading-relaxed tracking-wide md:text-4xl text-white "
            style={{ textShadow: "0px 3px 5px black " }}
          >
            {text}..
          </h1>
          <div className="flex justify-center mt-10 md:mt-20">
            <button className="btn  bg-[#ffdaa3] hover:bg-transparent hover:text-white">
              See More
              <IoIosArrowRoundForward size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
