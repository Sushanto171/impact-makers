import { Link } from "react-router-dom";

const VolunteerNeedsPostsCard = () => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <Link to={`/post-details/1`}>
            <button className=" px-6 py-3 font-medium hover:bg-[#004a61d8] tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#004A61] hover:text-[#ffdaa3] rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Details Post
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VolunteerNeedsPostsCard;
