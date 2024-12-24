import React from "react";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const Modal = ({ post, refresh }) => {
  const { user } = useAuth();
  const axiosInstance = useAxios();
  const {
    deadline,
    location,
    volunteers_needed,
    organizer_email,
    organizer_name,
    category,
    description,
    post_title,
    thumbnail,
    _id,
  } = post;

  const handleForm = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target).entries();
    const formData = {};
    for (const [key, value] of form) {
      formData[key] = value;
    }
    formData.status = "Requested";
    formData.job_id = _id;
    if (volunteers_needed <= 0) {
      document.getElementById("my_modal_4").close();
      return toast(
        "Volunteer requirement fulfilled. No more volunteers needed."
      );
    }
    const updatedFormData = { ...formData };
    delete updatedFormData.volunteers_needed;
    try {
      await axiosInstance.post("/volunteer-request", updatedFormData);
      toast.success("Volunteer Request Sent");
      document.getElementById("my_modal_4").close();
      refresh();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <button
        className=" px-6 py-3 font-medium hover:bg-[#004a61d8] tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#004A61] hover:text-[#ffdaa3] rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Be a Volunteer
      </button>

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box  w-10/12 ">
          <div className="text-right">
            <button
              onClick={() => document.getElementById("my_modal_4").close()}
              className="btn btn-xs"
            >
              X
            </button>
          </div>
          <div className="modal-action">
            <form onSubmit={handleForm}>
              {/* if there is a button, it will close the modal */}
              <div className="bg-base-200 w-full p-10 sm:grid grid-cols-2 gap-4 rounded-md shadow mx-auto">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Name</span>
                  </div>
                  <input
                    required
                    readOnly
                    type="text"
                    defaultValue={user?.displayName}
                    placeholder="Name "
                    name="volunteer_name"
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
                    readOnly
                    defaultValue={user?.email}
                    placeholder="email"
                    name="volunteer_email"
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
                    readOnly
                    defaultValue={thumbnail}
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
                    defaultValue={post_title}
                    readOnly
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
                    readOnly
                    defaultValue={description}
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
                    value={category}
                    readOnly
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
                    readOnly
                    defaultValue={location}
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
                    readOnly
                    defaultValue={volunteers_needed}
                    name="volunteers_needed"
                    placeholder="Volunteers needed"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Deadline</span>
                  </div>
                  <input
                    required
                    type="text"
                    readOnly
                    defaultValue={deadline}
                    name="organizer_name"
                    placeholder="Name"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Organizer Name</span>
                  </div>
                  <input
                    required
                    type="text"
                    readOnly
                    defaultValue={organizer_name}
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
                    readOnly
                    defaultValue={organizer_email}
                    name="organizer_email"
                    placeholder="Email "
                    className="input input-bordered w-full"
                  />
                </label>
                <div className="col-span-2 mt-5">
                  <button className="w-full px-6 py-3 font-medium hover:bg-[#004a61d8] tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#004A61] hover:text-[#ffdaa3] rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                    Request
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

export default Modal;
