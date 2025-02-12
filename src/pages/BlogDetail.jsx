import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const { data } = useLoaderData();
  const [blog, setBlog] = useState(data ? data.data : []);
  return (
    <div className="max-w-screen-lg  mx-auto  w-full py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Blog Image */}
        <div className="relative">
          <img
            src={blog?.image}
            alt={blog?.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center px-4">
              {blog?.title}
            </h1>
          </div>
        </div>

        {/* Blog Content */}
        <div className="p-6 space-y-4">
          {/* Author and Date */}
          <div className="flex justify-between items-center text-sm text-gray-500">
            <p>
              <span className="font-medium text-gray-800">Author:</span>{" "}
              {blog?.author}
            </p>
            <p>
              <span className="font-medium text-gray-800">Published:</span>{" "}
              {blog?.date}
            </p>
          </div>

          {/* Blog Tags */}
          <div className="flex flex-wrap gap-2">
            {blog?.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-600 text-xs sm:text-sm px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Blog Content */}
          <div className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {blog?.content}
          </div>

          {/* Call to Action */}
          <div className="mt-6">
            {/* <button className="btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow">
              Read More
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
