import { useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { LuSendHorizontal } from "react-icons/lu";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxios from "./../hooks/useAxios";
import Container from "./Container";
const Footer = () => {
  const axiosInstance = useAxios();
  const [email, setEmail] = useState("");
  const { dark } = useAuth();

  const handleSubs = async () => {
    try {
      const { data } = await axiosInstance.post("/send-email", {
        email: email,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <footer className="bg-black bg-opacity-90 text-white py-12 ">
      <Container>
        <div className=" px-10 sm:px-0 footer justify-between items-center">
          <aside className="">
            <h2 className="text-2xl font-semibold mb-2 text-[#ffdaa3]">
              Impact Makers
            </h2>
            <Link to="/about-us" className=" underline opacity-70">
              About us
            </Link>
            <Link to="/service" className=" underline opacity-70">
              service
            </Link>
          </aside>
          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4 text-2xl opacity-70 mt-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/sushanto-chandra-sharkar"
              >
                <FaLinkedinIn />
              </a>
              <a target="_blank" href="https://github.com/Sushanto171">
                <IoLogoGithub />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/Sushantochandrasharkar.me"
              >
                <FaFacebookF />
              </a>
            </div>
          </nav>
          <div className="relative">
            <h3 className="footer-title opacity-90">
              Stay Inspired – Subscribe to Our Newsletter!
            </h3>
            <label className="relative w-full rounded-full flex items-center gap-2 overflow-hidden pr-0 mt-5">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered text-black h-10 w-full"
                placeholder="Email "
              />
              <button
                onClick={handleSubs}
                className="bg-error absolute right-0 w-14 h-14 flex justify-center items-center"
              >
                <LuSendHorizontal size={20} />
              </button>
            </label>
          </div>
        </div>
        <div className="mt-10 text-center space-y-5 opacity-70 ">
          <hr
            className={`border border-base-200 ${
              dark ? "border-white" : "opacity-50"
            }`}
          />
          <aside>
            <p className="text-sm px-5">
              Copyright © {new Date().getFullYear()} - All right reserved by
              Impact Makers
            </p>
          </aside>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
