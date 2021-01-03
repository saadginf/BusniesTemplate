import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import SideBarV1 from "../components/SideBar";

const Layout = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);
  const toogle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <SideBarV1 isOpen={isOpen} toogle={toogle} />
      <Navbar toogle={toogle} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
