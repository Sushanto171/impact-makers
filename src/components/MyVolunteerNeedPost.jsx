import { useEffect, useState } from "react";
import useAuth from "./../hooks/useAuth";
import useAxios from "./../hooks/useAxios";
import useDynamicTitle from "./../hooks/useDynamicTitle";
import LoadingSpinner from "./Loading";
import MyPostsRow from "./MyPostsRow";

const MyVolunteerNeedPost = () => {
  const [myPosts, setMyPosts] = useState([]);
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();
  useDynamicTitle("My Posts");
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const email = user?.email;
      const { data } = await axiosInstance.get(`/volunteers-posts/${email}`);
      setMyPosts(data?.data);
    } catch (error) {
      // console.log(error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <LoadingSpinner />;
  if (myPosts.length === 0)
    return (
      <h3 className="text-lg mt-10">
        You haven't created a volunteer post yet..
      </h3>
    );

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table mt-10 border">
          {/* head */}
          <thead className="bg-base-300">
            <tr>
              <th>#</th>
              <th>Basic info</th>
              <th>Description</th>
              <th>Volunteer Needed</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {myPosts.map((post, i) => (
              <MyPostsRow key={post._id} i={i} post={post} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyVolunteerNeedPost;
