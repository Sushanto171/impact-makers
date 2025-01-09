import axios from "axios";
// https://impact-makers-server.vercel.app
// http://localhost:5000
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});
const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
