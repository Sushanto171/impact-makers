import { useEffect } from "react";
import Banner from "../components/Banner";
import VolunteerNeedNow from "../components/VolunteerNeedNow";

import Blogs from "../components/Blogs";
import EventCalendar from "../components/EventCalendar";
import useDynamicTitle from "./../hooks/useDynamicTitle";
const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  useDynamicTitle("Home");
  return (
    <div className="bg-base-100">
      <Banner />
      <div id="all-post" className="w-10/12 mx-auto">
        <VolunteerNeedNow />
      </div>
      <EventCalendar />
      <Blogs />
    </div>
  );
};

export default Home;
