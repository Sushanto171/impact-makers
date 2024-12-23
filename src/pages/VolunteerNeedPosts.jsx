import { useEffect, useState } from "react";

import { CgLayoutList } from "react-icons/cg";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import VolunteerNeedsPostsCard from "./../components/VolunteerNeedsPostsCard";
import useAxios from "./../hooks/useAxios";
import useDynamicTitle from "./../hooks/useDynamicTitle";
const VolunteerNeedPosts = () => {
  useDynamicTitle("All Volunteer Needs Posts");
  const [controlLayout, setControlLayout] = useState("grid");
  const axiosInstance = useAxios();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async (query = null) => {
    if (query) {
      const { data } = await axiosInstance.get(
        `/volunteers-posts?query=${query}`
      );
      setPosts(data?.data);
      return;
    }
    const { data } = await axiosInstance.get("/volunteers-posts");
    setPosts(data?.data);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    console.log(query);
    fetchPosts(query);
  };

  return (
    <div className="mx-auto md:w-10/12 overflow-hidden">
      <div className="sm:flex items-center">
        <h3 className="flex-1 text-2xl md:text-4xl text-center ">
          All Volunteer Needs Posts
        </h3>
        <div className="max-w-sm mx-auto w-full px-5 flex items-center gap-2">
          <form>
            <label className="input input-bordered flex items-center gap-2 mx-auto w-52 sm:w-full">
              <input
                onBlur={handleSearch}
                type="text"
                className="grow "
                placeholder="Search on title"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </form>

          <div className="hidden  md:flex gap-4">
            <button
              onClick={() => setControlLayout("list")}
              className={`btn btn-ghost p-2 ${
                controlLayout === "list" ? "text-[#004a61]" : ""
              }`}
            >
              <CgLayoutList size={30} />
            </button>
            <button
              onClick={() => setControlLayout("grid")}
              className={`btn btn-ghost p-3 ${
                controlLayout === "grid" ? "text-[#004a61]" : ""
              }`}
            >
              <RiLayoutGrid2Fill size={20} />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`mt-10 grid ${
          controlLayout === "grid"
            ? "md:grid-cols-3 grid-cols-1"
            : "grid-cols-1 "
        }   gap-8`}
      >
        {posts.length === 0 ? (
          <div className="w-10/12 mx-auto">
            <h3 className="text-3xl ">No Posts Found...</h3>;
          </div>
        ) : (
          posts.map((post) => (
            <VolunteerNeedsPostsCard key={post._id} post={post} />
          ))
        )}
      </div>
    </div>
  );
};

export default VolunteerNeedPosts;
