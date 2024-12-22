import Banner from "../components/Banner";
import VolunteerNeedNow from "../components/VolunteerNeedNow";

import useDynamicTitle from "./../hooks/useDynamicTitle";
const Home = () => {
  useDynamicTitle("Home");
  return (
    <div className="-mt-10 ">
      <div className="flex">
        <div className=" h-0.5 bg-[#ffdaa3] w-full"></div>
        <div className=" w-full"></div>
        <div className=" bg-[#ffdaa3] w-full"></div>
      </div>
      <Banner />
      <div className="w-10/12 mx-auto">
        <VolunteerNeedNow />
      </div>
    </div>
  );
};

export default Home;
