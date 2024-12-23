import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaUserAlt,
  FaUsers,
} from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import Modal from "./Modal";

const DetailsPost = () => {
  const axiosInstance = useAxios();
  const item = useLoaderData();
  const { id } = useParams();
  const [post, setPost] = useState(item);

  const refresh = async () => {
    const { data } = await axiosInstance.get(`/volunteer-post/${id}`);
    setPost(data.data);
  };
  return (
    <div className="card w-10/12 mx-auto bg-base-100 shadow-xl border border-gray-200 hover:border-[#004a61] transition duration-300">
      <figure>
        <img
          src={post.thumbnail}
          alt={post.post_title}
          className="w-full h-40 object-cover rounded-t-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-semibold">{post.post_title}</h2>
        <p className="text-gray-700 text-sm">{post.description}</p>

        <div className="flex items-center text-sm text-gray-500">
          <FaCalendarAlt className="mr-2" />
          <span>Deadline: {post.deadline}</span>
        </div>

        <div className="flex items-center text-sm text-gray-500">
          <FaMapMarkerAlt className="mr-2" />
          <span>Location: {post.location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <MdOutlineCategory className="mr-2" />
          <span>Category: {post.category}</span>
        </div>

        <div className="flex items-center text-sm text-gray-500">
          <FaUsers className="mr-2" />
          <span>Volunteers Needed: {post.volunteers_needed}</span>
        </div>

        <div className="flex items-center text-sm text-gray-500">
          <FaUserAlt className="mr-2" />
          <span>Organizer: {post.organizer_name}</span>
        </div>

        <div className="flex items-center text-sm text-gray-500">
          <FaRegEnvelope className="mr-2" />
          <span>Contact: {post.organizer_email}</span>
        </div>

        <div className="card-actions justify-end">
          <Modal post={post} refresh={refresh} />
        </div>
      </div>
    </div>
  );
};

export default DetailsPost;
