import React from "react";
import Modal from "./Modal";

const DetailsPost = () => {
  return (
    <div className="w-10/12 mx-auto">
      <h3 className="text-2xl md:text-4xl text-center mb-10">Post details</h3>
      <div className="card bg-base-100 w-12/10 shadow-xl mx-auto">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div>
              <Modal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPost;
