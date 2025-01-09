import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { SiOpensearch } from "react-icons/si";
import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import useAuth from "./../hooks/useAuth";

const VolunteerNeedNow = () => {
  const axiosInstance = useAxios();
  const [posts, setPosts] = useState([]);
  const { dark } = useAuth();
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
    <div className="pt-10">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          bounceDamping: 1,
          delay: 0.2,
        }}
        className="text-2xl md:text-4xl text-center flex justify-center gap-4 py-5 underline items-center"
      >
        Volunteer Needs Now <SiOpensearch />
      </motion.h2>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        viewport={{ once: true, amount: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          bounceDamping: 1,
          delay: 0.4,
        }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 my-10">
          {posts.map((post) => (
            <div
              key={post._id}
              className="card bg-base-300 border border-transparent hover:border-white/50 shadow-md rounded-md overflow-hidden"
            >
              <div className="h-40 ">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-28 sm:h-40 object-cover "
                />
              </div>
              <div className="p-4 flex flex-col justify-between h-full">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold opacity-70 mb-2 truncate">
                    {post.post_title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Category: {post.category}
                  </p>
                  <p className="text-sm text-gray-600">
                    Deadline: {post.deadline}
                  </p>
                </div>
                <div>
                  <Link to={`/post-details/${post._id}`}>
                    <button className="mt-4 bg-[#004a61c9] text-white px-4 py-2 rounded-md hover:bg-[#004a61]">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/all-volunteer-need-post">
            <button
              className={`${
                dark ? "text-white hover:text-white" : "text-[#004a61]"
              } btn btn-sm w-44 btn-outline  hover:bg-[#004A61]`}
            >
              See All{" "}
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default VolunteerNeedNow;
