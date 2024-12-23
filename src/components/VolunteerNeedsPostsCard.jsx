import { Link } from "react-router-dom";

const VolunteerNeedsPostsCard = ({ post }) => {
  return (
    <div className="card card-side bg-base-100 border shadow">
      <figure>
        <img src={post?.thumbnail} alt="Movie" />
      </figure>
      <div className="card-body">
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
