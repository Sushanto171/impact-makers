import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { GrBlog } from "react-icons/gr";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import BlogCard from "./BlogCard";
import SectionTitle from "./SectionTitle";
const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  const axiosInstance = useAxios();
  const { dark } = useAuth();

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
    <div className=" mx-auto  my-10 bg-base-100 rounded-md">
      <SectionTitle title={"Our Blogs"} icon={<GrBlog />} />
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
        className="py-4"
      >
        {blogData.map((blog) => (
          <BlogCard key={blog._id} {...blog} />
        ))}
      </motion.div>

      <div className="text-center mt-5">
        <Link to="/blogs">
          <button
            className={`${
              dark ? "text-white hover:text-white" : "text-[#004a61]"
            } btn btn-sm w-44 btn-outline  hover:bg-[#004A61]`}
          >
            More Blogs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
