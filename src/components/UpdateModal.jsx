import { format } from "date-fns";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const UpdateModal = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target).entries();
    const data = {};
    for (const [key, value] of formData) {
      data[key] = value;
    }
    data.deadline = format(startDate, "P");
    data.volunteers_needed = parseInt(data.volunteers_needed);
    console.log(data);

    // toast
  };
  return (
    <>
      <button
        className="btn btn-xs bg-[#ffdaa3]"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Update
      </button>

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box  w-10/12 ">
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <div className="bg-base-200 w-full p-10 sm:grid grid-cols-2 gap-4 rounded-md shadow mx-auto">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Name</span>
                  </div>
                  <input
                    required
                    type="text"
                    placeholder="Name "
                    name="name"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>{" "}
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Email</span>
                  </div>
                  <input
                    required
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>{" "}
                <label className="form-control w-full col-span-2">
                  <div className="label">
                    <span className="label-text">Suggestion</span>
                  </div>
                  <textarea
                    name="suggestion"
                    placeholder="Suggestion.."
                    required="14"
                    className="textarea textarea-bordered w-full"
                  ></textarea>
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Thumbnail</span>
                  </div>
                  <input
                    required
                    type="url"
                    placeholder="Thumbnail URL"
                    name="thumbnail"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Post title</span>
                  </div>
                  <input
                    required
                    type="text"
                    placeholder="Post title"
                    name="post_title"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Description</span>
                  </div>
                  <input
                    required
                    type="text"
                    placeholder="Description"
                    name="description"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Category</span>
                  </div>
                  <select
                    required
                    name="category"
                    className="select select-bordered w-full max-w-xs"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Social_Service">Social Service</option>
                    <option value="Animal_welfare">Animal Welfare</option>
                  </select>
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Location</span>
                  </div>
                  <input
                    required
                    type="text"
                    name="location"
                    placeholder="Location"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-xs">
                      No. of volunteers needed
                    </span>
                  </div>
                  <input
                    required
                    type="number"
                    name="volunteers_needed"
                    placeholder="Volunteers needed"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Deadline</span>
                  </div>
                  <DatePicker
                    required
                    className="input input-bordered w-full max-w-xs"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Organizer Name</span>
                  </div>
                  <input
                    required
                    type="text"
                    name="organizer_name"
                    placeholder="Name"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control col-span-2 w-full ">
                  <div className="label">
                    <span className="label-text">Organizer Email</span>
                  </div>
                  <input
                    required
                    type="email"
                    name="organizer_email"
                    placeholder="Email "
                    className="input input-bordered w-full"
                  />
                </label>
                <div className="col-span-2 mt-5">
                  <button className="w-full px-6 py-3 font-medium hover:bg-[#004a61d8] tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#004A61] hover:text-[#ffdaa3] rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default UpdateModal;
