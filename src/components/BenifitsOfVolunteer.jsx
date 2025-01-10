import React from "react";
import { LuBicepsFlexed } from "react-icons/lu";
import { Parallax } from "react-parallax";
import img from "../assets/prallax.jpg";
import SectionTitle from "./SectionTitle";
const BenifitsOfVolunteer = () => {
  return (
    <>
      <SectionTitle title={"Benifits of Volunteer"} icon={<LuBicepsFlexed />} />
      <Parallax
        blur={{ min: -15, max: 10 }}
        bgImage={img}
        bgImageAlt="the cat"
        strength={100}
      >
        <div className="h-screen"></div>
      </Parallax>
    </>
  );
};

export default BenifitsOfVolunteer;
