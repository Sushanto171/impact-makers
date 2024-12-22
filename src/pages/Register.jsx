import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import LoginWithGoogle from "../components/LoginWithGoogle";

const Register = () => {
  const registerHandle = (e) => {
    e.preventDefault();
    const formData = e.target;
    const displayName = formData.name.value;
    const email = formData.email.value;
    const photoURL = formData.photo.value;
    const password = formData.password.value;
    // console.log(password);
    // password Validation
    if (!/[a-z]/.test(password)) {
      return toast.error("Password at least one lowercase");
    }
    if (!/[A - Z]/.test(password)) {
      return toast.error("Password at least one Uppercase");
    }
    if (password.length <= 6) {
      return toast.error("Password must includes 6 character or longer");
    }
    console.log({ displayName, email, photoURL, password });
  };
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-100px)]">
      <div className="max-w-sm mx-auto w-full bg-base-200 sm:max-w-md p-10 rounded-box shadow">
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
              className="w-full px-6 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#004A61] hover:text-[#ffdaa3] rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Register
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
