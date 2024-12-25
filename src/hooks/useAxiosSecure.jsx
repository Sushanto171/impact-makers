import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import useAuth from "./useAuth";
import useAxios from "./useAxios";
const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
let loggingOut = false;
let interceptorsAdded = false;
const useAxiosSecure = () => {
  const { user } = useAuth();

  //  note: loggingOut, interceptorsAdded and using useEffect for prevent multiple interceptor rendering.
  useEffect(() => {
    setTimeout(() => {
      interceptorsAdded = loggingOut && false;
    }, 2000);
  }, [user]);

  const { signOutUser, setLoading } = useAuth();
  const axiosInstance = useAxios();
  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    async (error) => {
      const status = error?.status;

      if (status === 403 || status === 401) {
        if (interceptorsAdded) return;
        toast.error("UnAuthorized or Forbidden:  logging out user");

        const res = await signOutUser();
        if (res) {
          loggingOut = true;
        }
        await axiosInstance.post("/log-out");
        setLoading(false);
        interceptorsAdded = true;
        return Promise.reject(error);
      }
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
