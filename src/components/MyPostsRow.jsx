import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MyPostsRow = ({ post, i, deleteHandler }) => {
  const {
    category,
    post_title,
    description,
    volunteers_needed,
    thumbnail,
    deadline,
    _id,
  } = post;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const deleteWaring = (id) => {
    toast((t) => (
      <div>
        <span>Confirm delete?</span>
        <button
          onClick={() => [deleteHandler(_id), toast.dismiss(t.id)]}
          className="btn btn-xs text-error"
        >
          {" "}
          Yes
        </button>
        <button
          className="btn btn-xs text-success"
          onClick={() => toast.dismiss(t.id)}
        >
          No
        </button>
      </div>
    ));
  };
  return (
    <tr className={`${i % 2 !== 0 ? "bg-base-200" : ""}`}>
      <th>{i + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={thumbnail} alt={post_title} />
            </div>
          </div>
          <div>
            <div className="font-bold">{post_title}</div>
            <div className="text-sm opacity-50">{category}</div>
            <div className="text-sm opacity-50">{deadline}</div>
          </div>
        </div>
      </td>
      <td>{description}</td>
      <td> {volunteers_needed}</td>
      <td>
        <div className="flex justify-between">
          <button
            onClick={() => deleteWaring(_id)}
            className="btn btn-error btn-xs"
          >
            Delete
          </button>
          <Link to={`/update-post/${_id}`}>
            <button className="btn btn-xs bg-[#ffdaa3]">Update</button>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default MyPostsRow;
