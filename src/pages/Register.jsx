import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import LoginWithGoogle from "../components/LoginWithGoogle";
import useAuth from "../hooks/useAuth";
import useDynamicTitle from "./../hooks/useDynamicTitle";

const Register = () => {
  const { createUser, updateUserProfile, user, setLoading, loading } =
    useAuth();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  useDynamicTitle("Register");
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
    <Container>
      <div className="flex justify-center  items-center ">
        <div className="max-w-sm mx-auto w-full sm:max-w-md p-10 rounded-box shadow bg-base-200">
          <form onSubmit={registerHandle}>
            <div className="text-center font-bold text-2xl mb-8">
              <h3>Register Now</h3>
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium opacity-70 "
                htmlFor="LoggingEmailAddress"
              >
                Name
              </label>
              <input
                name="name"
                required
                placeholder="name.."
                className="block w-full px-4 py-2.5 text-gray-700 bg-white border rounded-lg focus:border-[#004A61] focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium opacity-70 "
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                autoComplete="email"
                required
                placeholder="password.."
                name="email"
                className="block w-full px-4 py-2.5 text-gray-700 bg-white border rounded-lg focus:border-[#004A61] focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium opacity-70"
                htmlFor="LoggingEmailAddress"
              >
                Photo
              </label>
              <input
                required
                name="photo"
                placeholder="photoURL.."
                className="block w-full px-4 py-2.5 text-gray-700 bg-white border rounded-lg focus:border-[#004A61] focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="url"
              />
            </div>

            <div className="mt-4 relative">
              <div className="">
                <label
                  className="block mb-2 text-sm font-medium opacity-70 "
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
                <button
                  onClick={() => setShowPass(!showPass)}
                  type="button"
                  className="absolute right-4 top-10 text-md"
                >
                  {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
                <input
                  id="loggingPassword"
                  autoComplete="current-password"
                  placeholder="password.."
                  name="password"
                  className="block w-full px-4 py-2.5 text-gray-700 bg-white border rounded-lg focus:border-[#004A61] focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type={showPass ? "text" : "password"}
                  required
                />
              </div>
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
          <p className="text-xs sm:text-sm mt-5 opacity-60">
            Already have an account?{" "}
            <Link to="/log-in" className="underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Register;
