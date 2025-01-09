import { createBrowserRouter } from "react-router-dom";
import DetailsPost from "../components/DetailsPost";
import useAxios from "../hooks/useAxios";
import MainLayout from "../layout/MainLayout";
import AddVolunteerNeedPost from "../pages/AddVolunteerNeedPost";
import BlogDetails from "../pages/BlogDetail";
import Blogs from "../pages/Blogs";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ManageMyPosts from "../pages/ManageMyPosts";
import Register from "../pages/Register";
import VolunteerNeedPosts from "../pages/VolunteerNeedPosts";
import UpdateModal from "./../components/UpdateModal";
import PrivateRoute from "./PrivateRoute";
const axiosInstance = useAxios();

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/log-in",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blog/:id",
        loader: ({ params }) => axiosInstance(`/blog/${params.id}`),
        element: <BlogDetails />,
      },
      {
        path: "/all-volunteer-need-post",
        loader: async () => {
          const { data } = await axiosInstance.get("/count");
          return data;
        },
        element: <VolunteerNeedPosts />,
      },
      {
        path: "/add-post",
        element: (
          <PrivateRoute>
            <AddVolunteerNeedPost />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-posts/:tab",
        element: (
          <PrivateRoute>
            <ManageMyPosts />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-post/:id",
        loader: async ({ params }) => {
          const { data } = await axiosInstance.get(
            `/volunteer-post/${params.id}`
          );
          return data.data;
        },
        element: (
          <PrivateRoute>
            <UpdateModal />
          </PrivateRoute>
        ),
      },
      {
        path: "/post-details/:id",
        element: (
          <PrivateRoute>
            <DetailsPost />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
