import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./../hooks/useAuth";
const BenefitModal = () => {
  let [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { dark } = useAuth();
  const volunteerBenefits = [
    {
      title: "Build Meaningful Connections",
      description:
        "Collaborate with like-minded individuals and make lifelong friends while making a difference.",
    },
    {
      title: "Enhance Your Skills",
      description:
        "Develop valuable skills like leadership, teamwork, and problem-solving that boost your personal and professional growth.",
    },
    {
      title: "Make a Lasting Impact",
      description:
        "Contribute to your community and see the tangible results of your efforts, leaving a legacy of positive change.",
    },
    {
      title: "Feel Fulfilled",
      description:
        "Experience the joy of giving back and the satisfaction of knowing you’ve made a difference.",
    },
  ];

  return (
    <>
      <button
        onClick={() => document.getElementById("my_modal_2").showModal()}
        className="mt-4 scale-75 sm:scale-100 mb-4 px-6 py-3 bg-[#004a61] text-white text-lg rounded hover:bg-[#003548] sm:hover:scale-105 transition-all"
        title="Click to explore volunteering opportunities!"
      >
        Discover More
      </button>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog
        id="my_modal_2"
        className={`modal ${dark ? "text-white" : "text-black"}`}
      >
        <div className="modal-box">
          <h3 className="font-bold text-lmd sm:text-xl ">
            Discover the Amazing Benefits of Volunteering!
          </h3>
          <div className="mt-8 mb-4">
            <ul className="text-left text-xs sm:text-base">
              {volunteerBenefits.map((content, i) => {
                return (
                  <li
                    key={i}
                    className="list-disc list leading-relaxed tracking-wide"
                  >
                    <span className="font-semibold">{content.title}</span>:{" "}
                    <span> {content.description}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <h4 className="text-md sm:text-lg mb-2">
              Ready to start your journey?
            </h4>
            <div className="mb-2 scale-50 sm:scale-100 flex justify-center  items-center gap-3 sm:gap-4">
              <button
                onClick={() => navigate("/all-volunteer-need-post")}
                className="btn bg-[#004a61]  hover:bg-[#ffdaa3] hover:text-[#004a61] text-white"
              >
                Explore Volunteer Opportunities Now!
              </button>
              <button className="btn btn-outline  text-[#004a61] hover:bg-[#ffdaa3] hover:text-[#004a61]">
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default BenefitModal;
