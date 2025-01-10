import { Link } from "react-router-dom";

const VolunteerNeedsPostsCard = ({ post, controlLayout }) => {
  return (
    <div
      className={`card ${
        controlLayout === "grid" ? " flex-col pb-0" : "gap-5 flex-row"
      } card-side bg-base-300 border border-transparent h-fit hover:border-white/50  pl-0 pr-4 p-2 shadow`}
    >
      <figure
        className={` ${
          controlLayout !== "grid" ? "w-40" : "w-full"
        } ml-2 rounded-md h-40 `}
      >
        <img
          className="w-full h-40  object-cover rounded-md"
          src={post?.thumbnail}
          alt="Movie"
        />
      </figure>
      <div className="p-2 flex flex-col justify-between border-red-300 ">
        {/* content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold opacity-70 mb-0.5 truncate">
            {post.post_title}
          </h3>
          <p className="text-sm opacity-65 grid grid-cols-3 ">
            <span className="w-fit ">Category:</span>
            <span className=" text-left col-span-2">{post.category}</span>
          </p>
          <p className="text-sm opacity-65 grid grid-cols-3">
            <span>Deadline:</span>
            <span className="text-left col-span-2">{post.deadline}</span>
          </p>
        </div>
        {/* call to action*/}
        <div className="">
          <Link to={`/post-details/${post._id}`}>
            <button className="mt-2 bg-[#004a61c9] text-white px-4 py-2 rounded-md hover:bg-[#004a61]">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VolunteerNeedsPostsCard;
