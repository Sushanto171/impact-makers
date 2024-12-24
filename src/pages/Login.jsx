import toast from "react-hot-toast";
import { Link, Navigate, useLocation } from "react-router-dom";
import LoginWithGoogle from "../components/LoginWithGoogle";
import useAuth from "../hooks/useAuth";
import useDynamicTitle from "../hooks/useDynamicTitle";

const Login = () => {
  const { state } = useLocation();
  const { logInUser, user } = useAuth();

  useDynamicTitle("Log in");

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = e.target;
    const email = formData.email.value;
    const password = formData.password.value;

    try {
      await logInUser(email, password);
      toast.success("Log in success");
    } catch (error) {
      toast.error(error.message);
    }
  };
  if (user)
    return (
      <>
        <Navigate to="/" />
      </>
    );
  return (
    <div className="flex bg-base-100 w-10/12 mx-auto justify-center items-center min-h-[calc(100vh-100px)] ">
      <div className="max-w-sm mx-auto w-full bg-base-200 sm:max-w-md p-10 rounded-box shadow">
        <form onSubmit={handleLogin}>
          <div className="text-center font-bold text-2xl mb-8">
            <h3>Welcome Back</h3>
          </div>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 "
              htmlFor="LoggingEmailAddress"
            >
              Email Address
            </label>
            <input
              id="LoggingEmailAddress"
              autoComplete="email"
              name="email"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              required
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                htmlFor="loggingPassword"
              >
                Password
              </label>
            </div>

            <input
              id="loggingPassword"
              autoComplete="current-password"
              name="password"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              required
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 font-medium hover:bg-[#004a61d8] tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#004A61] hover:text-[#ffdaa3] rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Log In
            </button>
          </div>
        </form>
        <LoginWithGoogle state={state} />
        <p className="text-xs sm:text-sm mt-5">
          Don't have an account?{" "}
          <Link to="/register" className="underline">
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
