import axios from "axios";
// https://impact-makers-server.vercel.app
// http://localhost:5000
const axiosInstance = axios.create({
  baseURL: "https://impact-makers-server.vercel.app",
  withCredentials: true,
});
const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
