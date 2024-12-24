import { Link } from "react-router-dom";

const VolunteerNeedsPostsCard = ({ post, controlLayout }) => {
  return (
    <div
      className={`card ${
        controlLayout === "grid" ? " flex-col" : "flex-row"
      } card-side bg-base-300 border border-transparent hover:border-white/50 pl-0 p-4 shadow`}
    >
      <figure
        className={` ${
          controlLayout !== "grid" ? "w-40" : "w-full"
        } ml-2 rounded-md`}
      >
        <img
          className="w-full h-40 object-cover rounded-md"
          src={post?.thumbnail}
          alt="Movie"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg">{post?.post_title}</h2>
        <p>Category: {post?.category}</p>
        <p>Deadline: {post?.deadline}</p>
        <div className="card-actions justify-end">
          <Link to={`/post-details/${post._id}`}>
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
