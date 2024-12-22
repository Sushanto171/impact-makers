import React from "react";
import { SiOpensearch } from "react-icons/si";
import { Link } from "react-router-dom";

const VolunteerNeedNow = () => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl md:text-4xl text-center flex justify-center gap-4 py-5">
        Volunteer Needs Now <SiOpensearch />
      </h2>
      <div>
        <Link to="/volunteer-need-post">
          <button className="btn btn-sm w-44">See All </button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerNeedNow;
