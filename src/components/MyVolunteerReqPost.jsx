import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import useDynamicTitle from "./../hooks/useDynamicTitle";
import LoadingSpinner from "./Loading";
import MyReqRow from "./MyReqRow";
const MyVolunteerReqPost = () => {
  const { user } = useAuth();
  const axiosInstance = useAxios();
  const [loading, setLoading] = useState(true);
  const [myReq, setMyReq] = useState([]);

  useEffect(() => {
    const email = user?.email;
    fetchData(email);
  }, [user]);

  const fetchData = async (email) => {
    try {
      const { data } = await axiosInstance.get(`/volunteer-request/${email}`);
      setMyReq(data?.data);
    } catch (error) {
      // console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const cancelHandler = async (id) => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.delete(
        `/volunteer-req-cancel/${id}`
      );
      toast.success("Successfully requested cancel");
      fetchData(user?.email);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useDynamicTitle("My Volunteer Request Post");
  if (loading) return <LoadingSpinner />;
  if (myReq.length === 0)
    return <h3 className="text-lg mt-10">You haven't request yet..</h3>;
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
              <th>Organizer Info</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {myReq.map((post, i) => (
              <MyReqRow
                post={post}
                cancelHandler={cancelHandler}
                i={i}
                key={post._id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyVolunteerReqPost;
