import React, { useEffect, useState } from "react";
import { SiOpensearch } from "react-icons/si";
import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const VolunteerNeedNow = () => {
  const axiosInstance = useAxios();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    const { data } = await axiosInstance.get(
      "/volunteers-posts?condition=home"
    );
    setPosts(data?.data);
  };
  return (
    <div className="mt-10">
      <h2 className="text-2xl md:text-4xl text-center flex justify-center gap-4 py-5">
        Volunteer Needs Now <SiOpensearch />
      </h2>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {posts.map((post) => (
            <div
              key={post._id}
              className="card border shadow-md rounded-md overflow-hidden"
            >
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600">
                  Category: {post.category}
                </p>
                <p className="text-sm text-gray-600">
                  Deadline: {post.deadline}
                </p>
                <Link to={`/post-details/${post._id}`}>
                  <button className="mt-4 bg-[#004a61c9] text-white px-4 py-2 rounded-md hover:bg-[#004a61]">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Link to="/volunteer-need-post">
          <button className="btn btn-sm w-44 btn-outline text-[#004a61]">
            See All{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerNeedNow;
