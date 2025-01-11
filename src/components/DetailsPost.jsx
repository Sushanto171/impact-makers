import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaUserAlt,
  FaUsers,
} from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Container from "./Container";
import LoadingSpinner from "./Loading";
import Modal from "./Modal";

const DetailsPost = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      setLoading(true);
      const { data } = await axiosSecure.get(`/volunteer-post/${id}`);
      setPost(data.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const refresh = async () => {
    const { data } = await axiosSecure.get(`/volunteer-post/${id}`);
    setPost(data.data);
  };
  if (loading) return <LoadingSpinner />;
  return (
    <Container>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="card bg-base-100 shadow-xl border border-gray-200 hover:border-[#004a61] transition duration-300"
      >
        <figure>
          <img
            src={post.thumbnail}
            alt={post.post_title}
            className="w-full max-h-96 object-cover rounded-t-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-semibold">
            {post.post_title}
          </h2>
          <p className="opacity-80 text-sm">{post.description}</p>

          <div className="flex items-center text-sm opacity-70">
            <FaCalendarAlt className="mr-2" />
            <span>Deadline: {post.deadline}</span>
          </div>

          <div className="flex items-center text-sm opacity-70">
            <FaMapMarkerAlt className="mr-2" />
            <span>Location: {post.location}</span>
          </div>
          <div className="flex items-center text-sm opacity-70">
            <MdOutlineCategory className="mr-2" />
            <span>Category: {post.category}</span>
          </div>

          <div className="flex items-center text-sm opacity-70">
            <FaUsers className="mr-2" />
            <span>Volunteers Needed: {post.volunteers_needed}</span>
          </div>

          <div className="flex items-center text-sm opacity-70">
            <FaUserAlt className="mr-2" />
            <span>Organizer: {post.organizer_name}</span>
          </div>

          <div className="flex items-center text-sm opacity-70">
            <FaRegEnvelope className="mr-2" />
            <span>Contact: {post.organizer_email}</span>
          </div>

          <div className="card-actions justify-end">
            <Modal post={post} refresh={refresh} />
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default DetailsPost;
