import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { GrBlog } from "react-icons/gr";
import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import BlogCard from "./BlogCard";
const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  const axiosInstance = useAxios();

  useEffect(() => {
    fetchBlogs();
  }, []);
  const fetchBlogs = async () => {
    try {
      const { data } = await axiosInstance.get("/blogs?condition=home");
      setBlogData(data?.data);
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <div className="w-10/12 mx-auto  my-10 bg-base-100 rounded-md">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        viewport={{ once: true, amount: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          bounceDamping: 1,
          delay: 0.2,
        }}
        className="text-3xl md:text-4xl text-gray-700 text-center flex justify-center gap-4 py-5 items-center underline"
      >
        Our Blogs <GrBlog />
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-4"
      >
        {blogData.map((blog) => (
          <BlogCard key={blog._id} {...blog} />
        ))}
      </motion.div>

      <div className="text-center mt-5">
        <Link to="/blogs">
          <button className="btn btn-sm w-44 btn-outline text-[#004a61]">
            More Blogs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
