import React from "react";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const MyReqRow = ({ post, i, cancelHandler }) => {
  const axiosInstance = useAxios();
  const user = useAuth();
  const {
    category,
    post_title,
    description,
    organizer_email,
    organizer_name,
    thumbnail,
    deadline,
    _id,
  } = post;

  const cancelWaring = (id) => {
    toast((t) => (
      <div>
        <span>Confirm cancel?</span>
        <button
          onClick={() => [cancelHandler(_id), toast.dismiss(t.id)]}
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
      <td>
        <p>{organizer_name}</p>
        <p>{organizer_email}</p>
      </td>
      <td>
        <div className="flex justify-between">
          <button
            onClick={() => cancelWaring(_id)}
            className="btn btn-error btn-xs"
          >
            Cancel
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyReqRow;
