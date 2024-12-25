import toast from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import LoginWithGoogle from "../components/LoginWithGoogle";
import useAuth from "../hooks/useAuth";
import useDynamicTitle from "./../hooks/useDynamicTitle";

const Register = () => {
  const { createUser, updateUserProfile, user, setLoading, loading } =
    useAuth();
  const navigate = useNavigate();
  useDynamicTitle("Register");
  const registerHandle = async (e) => {
    e.preventDefault();
    const formData = e.target;
    const displayName = formData.name.value;
    const email = formData.email.value;
    const photoURL = formData.photo.value;
    const password = formData.password.value;
    // console.log(password);
    // password Validation
    if (!/[A-Z]/.test(password)) {
      return toast.error("Password at least one Uppercase");
    }
    if (!/[a-z]/.test(password)) {
      return toast.error("Password at least one lowercase");
    }
    if (password.length < 6) {
      return toast.error("Password must includes 6 character or longer");
    }
    try {
      await createUser(email, password);
      await updateUserProfile(displayName, photoURL);
      toast.success("Register success!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  if (user)
    return (
      <>
        <Navigate to="/" />
      </>
    );
  return (
    <div className="flex justify-center  w-10/12 mx-auto items-center ">
      <div className="max-w-sm mx-auto w-full sm:max-w-md p-10 rounded-box shadow bg-base-200">
        <form onSubmit={registerHandle}>
          <div className="text-center font-bold text-2xl mb-8">
            <h3>Register Now</h3>
          </div>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 "
              htmlFor="LoggingEmailAddress"
            >
              Name
            </label>
            <input
              name="name"
              required
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
            />
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
              required
              name="email"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
          </div>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 "
              htmlFor="LoggingEmailAddress"
            >
              Photo
            </label>
            <input
              required
              name="photo"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
              type="url"
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
              required
              autoComplete="current-password"
              name="password"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 font-medium hover:bg-[#004a61d8] tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#004A61] hover:text-[#ffdaa3] rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              {loading ? "Register.." : "Register"}
            </button>
          </div>
        </form>
        <LoginWithGoogle />
        <p className="text-xs sm:text-sm mt-5">
          Already have an account?{" "}
          <Link to="/log-in" className="underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
