import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GrBlog } from "react-icons/gr";
import BlogCard from "../components/BlogCard";
import useAxios from "../hooks/useAxios";
import useDynamicTitle from "../hooks/useDynamicTitle";
import LoadingSpinner from "./../components/Loading";

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  const axiosInstance = useAxios();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchBlogs();
  }, []);
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get("/blogs");
      setBlogData(data?.data);
    } catch (error) {
      //   console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useDynamicTitle("Blogs");
  if (loading) return <LoadingSpinner />;
  return (
    <div className="w-10/12 mx-auto  mb-10 bg-base-100 rounded-md">
      <h2 className="text-3xl md:text-4xl text-center flex justify-center gap-4 py-5 items-center underline">
        Our Blogs <GrBlog />
      </h2>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className=" p-4"
      >
        {blogData.map((blog) => (
          <BlogCard key={blog._id} {...blog} />
        ))}
      </motion.div>
      <div></div>
    </div>
  );
};

export default Blogs;
