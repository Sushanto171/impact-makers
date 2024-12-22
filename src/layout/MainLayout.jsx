import { Outlet } from "react-router-dom";
import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";
const MainLayout = () => {
  return (
    <div className="font-Poppins ">
      {/* navbar */}
      <Navbar />

      <div className="min-h-[calc(100vh-310px)] bg-white py-10">
        {/* dynamic */}
        <Outlet />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
