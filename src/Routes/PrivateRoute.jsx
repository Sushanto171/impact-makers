import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/Loading";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();
  if (loading) return <LoadingSpinner />;
  if (user) return <div>{children}</div>;
  return <Navigate state={{ location: pathname }} to="/log-in" />;
};

export default PrivateRoute;
