import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = true;
  const links = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/volunteer-need-post"}>All Volunteer Need Posts</Link>
      </li>
    </>
  );
  const links2 = (
    <>
      <li>
        <Link to="/add-post">Add Volunteer need Post</Link>
      </li>
      <li>
        <Link to="/my-posts">Manage My Posts </Link>
      </li>
    </>
  );

  return (
    <nav className="sticky z-50 top-0 navbar justify-between text-[#ffdaa3]  bg-[#004a61] py-5 shadow-sm px:5  sm:px-10 md:px-14">
      <div className="">
        <Link to={"/"} className="btn btn-ghost text-xl font-bold">
          Impact Makers
        </Link>
      </div>
      <ul className="hidden  md:flex items-center gap-6">
        {links}
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
      </ul>
      <div className="dropdown dropdown-end">
        <div className="flex-none flex items-center gap-2">
          {user ? (
            <>
              <button className="btn btn-sm btn-outline text-[#ffdaa3]">
                Log out
              </button>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu md:hidden menu-sm dropdown-content mt-48 bg-[#004a61b9] rounded-box z-[1]  w-52 p-2 shadow"
              >
                {links}
                {links2}
              </ul>
            </>
          ) : (
            <>
              <Link to="/register">
                <button className="btn btn-sm btn-outline text-[#ffdaa3]">
                  Register
                </button>
              </Link>
              <Link to="/log-in">
                <button className="btn btn-sm bg-[#ffdaa3] hover:bg-[#1F2937] hover:text-white">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
