import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import LoadingSpinner from "./Loading";

const Navbar = () => {
  const { signOutUser, loading } = useAuth();
  const navigate = useNavigate();
  const { user, dark, setDark } = useAuth();
  const { pathname } = useLocation();
  const axiosInstance = useAxios();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // theme
  useEffect(() => {
    if (dark) {
      document.documentElement.setAttribute("data-theme", "dark");
      return;
    }
    document.documentElement.setAttribute("data-theme", "light");
  }, [dark]);

  const signOutHandle = async () => {
    try {
      await signOutUser();
      await axiosInstance.post("/log-out");
      toast.success("Log out success!");
      navigate("/log-in");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const toggle = (
    <>
      <input
        onClick={() => setDark(!dark)}
        type="checkbox"
        className="toggle"
        defaultChecked
      />
    </>
  );
  const links = (
    <>
      <li>
        <NavLink to={"/"} className={` flex items-center`}>
          {({ isActive }) => (
            <>
              <IoMdArrowDropright
                size={20}
                className={`${isActive ? "block" : "hidden"}`}
              />
              Home
            </>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={` flex items-center`}
          to={"/all-volunteer-need-post"}
        >
          {({ isActive }) => (
            <>
              <IoMdArrowDropright
                size={20}
                className={`${isActive ? "block" : "hidden"}`}
              />
              All Volunteer Need Posts
            </>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to={"/blogs"} className={` flex items-center`}>
          {({ isActive }) => (
            <>
              <IoMdArrowDropright
                size={20}
                className={`${isActive ? "block" : "hidden"}`}
              />
              Blogs
            </>
          )}
        </NavLink>
      </li>

      <li>
        <NavLink to={"/about-us"} className={` flex items-center `}>
          {({ isActive }) => (
            <>
              <IoMdArrowDropright
                size={20}
                className={`${isActive ? "block" : "hidden"}`}
              />
              About us
            </>
          )}
        </NavLink>
      </li>
      <li className={user ? "hidden" : ""}>
        <NavLink to={"/service"} className={` flex items-center`}>
          {({ isActive }) => (
            <>
              <IoMdArrowDropright
                size={20}
                className={`${isActive ? "block" : "hidden"}`}
              />
              Service
            </>
          )}
        </NavLink>
      </li>
    </>
  );
  const links2 = (
    <>
      <li>
        <NavLink className={` flex items-center`} to="/add-post">
          {({ isActive }) => (
            <>
              <IoMdArrowDropright
                size={20}
                className={`${isActive ? "block" : "hidden"}`}
              />
              Add Volunteer need Post
            </>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink className={` flex items-center`} to="/manage-posts/0">
          {({ isActive }) => (
            <>
              <IoMdArrowDropright
                size={20}
                className={`${isActive ? "block" : "hidden"}`}
              />
              Manage My Posts
            </>
          )}
        </NavLink>
      </li>
    </>
  );
  if (loading) return <LoadingSpinner />;
  return (
    <nav
      className={`sticky z-50 py-2 top-0 w-full text-[#ffdaa3] ${"bg-[#004a61]"}  `}
    >
      <div className="navbar justify-between max-w-[1050px] mx-auto ">
        <div className="">
          <Link to={"/"} className="text-lg sm:text-2xl font-bold ">
            Impact Makers
          </Link>
        </div>
        <ul className="hidden  md:flex items-center gap-6">
          {links}
          {user && (
            <li className="dropdown dropdown-center">
              <div tabIndex={0} role="button">
                <div className="flex items-center">
                  <span>My Profile</span>
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-9 bg-[#004a61b9] rounded-md z-[1]  w-64 p-2 shadow"
              >
                {links2}
              </ul>
            </li>
          )}
        </ul>
        <div className="dropdown dropdown-end">
          <div className="flex-none flex items-center gap-2">
            <span className="hidden sm:block">{toggle}</span>

            {user ? (
              <>
                <button
                  onClick={signOutHandle}
                  className="btn btn-sm btn-outline text-[#ffdaa3]"
                >
                  Log out
                </button>
                <div
                  title={user?.displayName}
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      referrerPolicy="no-referrer"
                      alt=""
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu md:hidden menu-sm dropdown-content mt-64 bg-[#004a61b9] rounded-box z-[1]  w-52 p-2 shadow"
                >
                  <span className="text-right">{toggle}</span>
                  {links}
                  {links2}
                </ul>
              </>
            ) : (
              <>
                <Link to="/register">
                  <button
                    className={`btn btn-sm ${
                      pathname === "/register"
                        ? "bg-[#ffdaa3] text-gray-700"
                        : "text-[#ffdaa3]"
                    } btn-outline `}
                  >
                    Register
                  </button>
                </Link>
                <Link to="/log-in">
                  <button
                    className={`btn btn-sm ${
                      pathname === "/log-in"
                        ? "bg-[#ffdaa3] text-gray-700"
                        : "text-[#ffdaa3]"
                    } btn-outline `}
                  >
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
