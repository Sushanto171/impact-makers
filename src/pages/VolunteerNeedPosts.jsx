import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { CgLayoutList } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";
import LoadingSpinner from "../components/Loading";
import VolunteerNeedsPostsCard from "./../components/VolunteerNeedsPostsCard";
import useAxios from "./../hooks/useAxios";
import useDynamicTitle from "./../hooks/useDynamicTitle";
const VolunteerNeedPosts = () => {
  useDynamicTitle("All Volunteer Needs Posts");
  const [controlLayout, setControlLayout] = useState("grid");
  const [loading, setLoading] = useState(false);
  const axiosInstance = useAxios();
  const [posts, setPosts] = useState([]);
  const { count } = useLoaderData();
  const [numberOfShow, setNumberOfShow] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  const pages = Math.ceil(count / numberOfShow);

  const array = Array.from({ length: pages }, (_, i) => i + 1);
  useEffect(() => {
    fetchPosts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, numberOfShow]);
  const fetchPosts = async (query = null) => {
    try {
      setLoading(true);
      if (query) {
        const { data } = await axiosInstance.get(
          `/volunteers-posts?query=${query}`
        );
        setPosts(data?.data);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const { data } = await axiosInstance.get(
        `/volunteers-posts?currentPage=${currentPage}&size=${numberOfShow}`
      );
      setPosts(data?.data);
    } catch (error) {
      // console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    fetchPosts(query);
    e.target.value = "";
  };

  const prevBtnHandle = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const nextBtnHandle = () => {
    if (array.length > currentPage) setCurrentPage(currentPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) return <LoadingSpinner />;
  return (
    <div className="mx-auto w-10/12 overflow-hidden">
      <div className="space-y-3 sm:flex w-full items-center justify-between  rounded-full  gap-1 p-1">
        <form className="w-full">
          <motion.label
            initial={{ width: "30%", opacity: 0, x: 60 }}
            animate={{ width: "100%", opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="input hover:shadow-lg overflow-hidden max-w-lg pr-0 input-bordered justify-between flex rounded-full items-center gap-2  py-1"
          >
            <input
              onBlur={handleSearch}
              type="text"
              placeholder="Search on title"
            />
            <button
              type="button"
              className="w-16 h-20 btn btn-ghost text-white justify-between font-bold hover:bg-gray-800 bg-gray-700 flex  items-center"
            >
              <CiSearch size={20} />
            </button>
          </motion.label>
        </form>

        <motion.div
          initial={{ width: "100%", opacity: 0, x: -60 }}
          animate={{ width: "100%", opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="max-w-fit flex justify-end gap-5  px-5 border-x-2 rounded-full border-gray-600 bg-base-300"
        >
          <button
            onClick={() => setControlLayout("list")}
            className={`btn rounded-full btn-ghost p-2 ${
              controlLayout === "list" ? "text-[#004a61]" : ""
            }`}
          >
            <CgLayoutList size={30} />
          </button>
          <button
            onClick={() => setControlLayout("grid")}
            className={`btn rounded-full btn-ghost p-3 ${
              controlLayout === "grid" ? "text-[#004a61]" : ""
            }`}
          >
            <RiLayoutGrid2Fill size={20} />
          </button>
        </motion.div>
      </div>
      <div className="my-10">
        <h3 className="text-2xl sm:text-3xl text-center underline">
          All Volunteer Need Posts
        </h3>
      </div>

      <motion.div
        key={controlLayout}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
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
            <VolunteerNeedsPostsCard
              controlLayout={controlLayout}
              key={post._id}
              post={post}
            />
          ))
        )}
      </motion.div>

      {/* pagination */}

      {posts.length !== 0 && (
        <div className="flex justify-center items-center mt-10 p-1">
          <button onClick={prevBtnHandle} className="btn  btn-sm">
            Prev
          </button>
          <div className="flex">
            {array.map((page) => (
              <button
                onClick={() => setCurrentPage(page)}
                className={`btn btn-sm mx-1 ${
                  currentPage === parseInt(page)
                    ? "bg-[#004a61] text-white"
                    : ""
                }`}
                key={page}
              >
                {page}
              </button>
            ))}
          </div>
          <button onClick={nextBtnHandle} className="btn btn-sm">
            Next
          </button>
          <select
            value={numberOfShow}
            onChange={(e) => [
              setNumberOfShow(e.target.value),
              setCurrentPage(1),
            ]}
            className="hidden sm:block select select-ghost select-sm select-bordered max-w-xs ml-4"
          >
            <option value={6}>6</option>
            <option value={9}>9</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default VolunteerNeedPosts;
