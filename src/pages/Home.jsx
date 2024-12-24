import Banner from "../components/Banner";
import VolunteerNeedNow from "../components/VolunteerNeedNow";

import useDynamicTitle from "./../hooks/useDynamicTitle";
const Home = () => {
  useDynamicTitle("Home");
  return (
    <div className="bg-base-100">
      <Banner />
      <div className="w-10/12 mx-auto">
        <VolunteerNeedNow />
      </div>
    </div>
  );
};

export default Home;
