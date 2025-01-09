import { useEffect } from "react";
import Banner from "../components/Banner";
import VolunteerNeedNow from "../components/VolunteerNeedNow";

import Blogs from "../components/Blogs";
import EventCalendar from "../components/EventCalendar";
import RealTime from "../components/RealTime";
import useDynamicTitle from "./../hooks/useDynamicTitle";
const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  useDynamicTitle("Home");
  return (
    <div className="bg-base-100">
      <Banner />
      <div id="all-post" className="max-w-screen-lg mx-auto">
        <VolunteerNeedNow />
        <EventCalendar />
        <Blogs />
        <RealTime />
      </div>
    </div>
  );
};

export default Home;
