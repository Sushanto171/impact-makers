import { createBrowserRouter } from "react-router-dom";
import DetailsPost from "../components/DetailsPost";
import MainLayout from "../layout/MainLayout";
import AddVolunteerNeedPost from "../pages/AddVolunteerNeedPost";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ManageMyPosts from "../pages/ManageMyPosts";
import Register from "../pages/Register";
import VolunteerNeedPosts from "../pages/VolunteerNeedPosts";
import PrivateRoute from "./PrivateRoute";

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
        path: "/volunteer-need-post",
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
        element: (
          <PrivateRoute>
            <DetailsPost />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
