import React from "react";
import "../pages/home.css";

import TopLeft from "../components/pagecomponent/TopLeft";
import TopRight from "../components/pagecomponent/TopRight";
import Navbar from "../components/pagecomponent/Navbar";
const Topbar = () => {
  return (
    <div className="topbar">
      <header>
        <div className="topHeader">
          <TopLeft />
          <TopRight />
        </div>
      </header>
      <Navbar />
    </div>
  );
};

export default Topbar;
