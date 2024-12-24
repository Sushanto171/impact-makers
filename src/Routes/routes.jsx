import { createBrowserRouter } from "react-router-dom";
import DetailsPost from "../components/DetailsPost";
import useAxios from "../hooks/useAxios";
import MainLayout from "../layout/MainLayout";
import AddVolunteerNeedPost from "../pages/AddVolunteerNeedPost";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ManageMyPosts from "../pages/ManageMyPosts";
import Register from "../pages/Register";
import VolunteerNeedPosts from "../pages/VolunteerNeedPosts";
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
        path: "/my-posts",
        element: (
          <PrivateRoute>
            <ManageMyPosts />
          </PrivateRoute>
        ),
      },
      {
        path: "/post-details/:id",
        loader: async ({ params }) => {
          const { data } = await axiosInstance.get(
            `/volunteer-post/${params.id}`
          );
          return data.data;
        },
        element: (
          <PrivateRoute>
            <DetailsPost />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
