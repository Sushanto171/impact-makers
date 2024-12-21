import { Outlet } from "react-router-dom";
import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";
const MainLayout = () => {
  return (
    <div className="font-Poppins ">
      {/* navbar */}
      <Navbar />

      <div className="h-[20000px]">
        {/* dynamic */}
        <Outlet />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
