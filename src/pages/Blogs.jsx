import { useEffect, useState } from "react";
import { GrBlog } from "react-icons/gr";
import BlogCard from "../components/BlogCard";
import useAxios from "../hooks/useAxios";
import useDynamicTitle from "../hooks/useDynamicTitle";

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  const axiosInstance = useAxios();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchBlogs();
  }, []);
  const fetchBlogs = async () => {
    try {
      const { data } = await axiosInstance.get("/blogs");
      setBlogData(data?.data);
    } catch (error) {
      //   console.log(error);
    }
  };
  useDynamicTitle("Blogs");
  return (
    <div className="w-10/12 mx-auto  mb-10 bg-base-100 rounded-md">
      <h2 className="text-3xl md:text-4xl text-gray-700 text-center flex justify-center gap-4 py-5 items-center underline">
        Our Blogs <GrBlog />
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {blogData.map((blog) => (
          <BlogCard key={blog._id} {...blog} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Blogs;
