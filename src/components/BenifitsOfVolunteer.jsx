import React from "react";
import { LuBicepsFlexed } from "react-icons/lu";
import img from "../assets/prallax.jpg";
import BenefitModal from "./BenifitModal";
import SectionTitle from "./SectionTitle";
const BenifitsOfVolunteer = () => {
  return (
    <>
      <>
        <div
          className="relative h-80 sm:min-h-[calc(100vh-100px)] my-6 bg-fixed bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${img})` }}
        >
          {/* Overlay with Content */}
          <div className="absolute w-full h-full flex flex-col items-center justify-center backdrop-blur-sm bg-black/60">
            {/* Content Section */}
            <div className="w-10/12  mx-auto h-fit bg-[#ffdaa390] text-[#004a61] text-center md:gap-5 flex flex-col items-center justify-around px-2 sm:p-8 rounded-lg shadow-lg">
              <SectionTitle
                title="Benefits of Volunteering"
                icon={<LuBicepsFlexed />}
              />
              <p className="text-xs sm:text-lg">
                Are you looking to <strong>connect with others</strong>,{" "}
                <em>gain valuable skills</em>, and make a{" "}
                <strong>difference</strong>? Volunteering is your chance to grow
                while giving back!
              </p>
              {/* Call-to-Action Button */}
              <div className="relative">
                <BenefitModal />
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default BenifitsOfVolunteer;
