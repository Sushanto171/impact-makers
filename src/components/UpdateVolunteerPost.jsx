import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const UpdateVolunteerPost = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-2xl md:text-4xl">Add Volunteer Need Post</h3>
      <div className="w-full max-w-lg mx-auto mt-10">
        <form>
          <div className="bg-base-200 w-full p-10 grid grid-cols-2 gap-4 rounded-md shadow">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Thumbnail</span>
              </div>
              <input
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
                name="category"
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Select Category
                </option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Social_Service">Social Service</option>
                <option value="Animal_welfare">Animal welfare</option>
              </select>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Location</span>
              </div>
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">No. of volunteers needed</span>
              </div>
              <input
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
                className="input input-bordered w-full max-w-xs"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                name="organizer_name"
                placeholder="Name"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control col-span-2 w-full ">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                name="organizer_email"
                placeholder="Email "
                className="input input-bordered w-full"
              />
            </label>
            <div className="col-span-2">
              <button className="w-full px-6 py-3 font-medium hover:bg-[#004a61d8] tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#004A61] hover:text-[#ffdaa3] rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Add Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UpdateVolunteerPost;
