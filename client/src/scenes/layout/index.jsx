import { Outlet } from "react-router";

import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Layout;
