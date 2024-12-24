import { format } from "date-fns";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { SiLibreofficewriter } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import useDynamicTitle from "./../hooks/useDynamicTitle";
const AddVolunteerNeedPost = () => {
  const [startDate, setStartDate] = useState(new Date());
  const axiosInstance = useAxios();
  const { user } = useAuth();
  const navigate = useNavigate();
  useDynamicTitle("Add Volunteer Post");

  const handleForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target).entries();
    const data = {};
    for (const [key, value] of formData) {
      data[key] = value;
    }
    data.deadline = format(startDate, "P");
    data.volunteers_needed = parseInt(data.volunteers_needed);

    // store data on the database
    try {
      const res = await axiosInstance.post(`/volunteers-posts`, data);
      toast.success("Post create success!");
      e.target.reset();
      navigate("/manage-posts");
    } catch (error) {
      toast.error("Failed to create post");
    }
  };
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-2xl md:text-4xl flex gap-4">
        Add Volunteer Need Post <SiLibreofficewriter />
      </h3>
      <div className="w-full max-w-lg mx-auto mt-10">
        <form onSubmit={handleForm}>
          <div className="bg-base-200 w-full p-10 sm:grid grid-cols-2 gap-4 rounded-md shadow">
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
                <span className="label-text">No. of volunteers needed</span>
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
                <span className="label-text">Name</span>
              </div>
              <input
                required
                type="text"
                readOnly
                defaultValue={user?.displayName}
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
                required
                type="email"
                readOnly
                defaultValue={user?.email}
                name="organizer_email"
                placeholder="Email "
                className="input input-bordered w-full"
              />
            </label>
            <div className="col-span-2 ">
              <button className="w-full mt-5 px-6 py-3 font-medium hover:bg-[#004a61d8] tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#004A61] hover:text-[#ffdaa3] rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Add Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVolunteerNeedPost;
