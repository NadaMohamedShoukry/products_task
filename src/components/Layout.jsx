import { Outlet } from "react-router";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="container mx-auto px-4 md:px-8 lg-px-12 ">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
