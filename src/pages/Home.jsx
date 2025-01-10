import { useEffect } from "react";
import Banner from "../components/Banner";
import VolunteerNeedNow from "../components/VolunteerNeedNow";

import BenifitsOfVolunteer from "../components/BenifitsOfVolunteer";
import Blogs from "../components/Blogs";
import Container from "../components/Container";
import EventCalendar from "../components/EventCalendar";
import FAQ from "../components/FAQ";
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
      <div id="all-post">
        <Container>
          <VolunteerNeedNow />
          <EventCalendar />
        </Container>
        <BenifitsOfVolunteer />
        <Container>
          <RealTime />
          <Blogs />
          <FAQ />
        </Container>
      </div>
    </div>
  );
};

export default Home;
