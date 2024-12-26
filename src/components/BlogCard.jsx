import React from "react";

const BlogCard = ({ title, author, date, content, tags, image }) => {
  return (
    <div className="max-w-sm mt-4 flex flex-col justify-between rounded-lg shadow-md overflow-hidden hover:scale-105  hover:shadow-lg transition-all duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-500 mb-1">
          By {author} | {date}
        </p>
        <p className="text-gray-700 text-sm line-clamp-3 mb-4">{content}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>
        <button className="btn btn-sm bg-[#004a61] hover:bg-[#004a61c5] text-white rounded-md w-full">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
