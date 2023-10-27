import React, { useState } from "react";
import "./headertopbartwo.css";
import Brands from "./Brands";
import Menus from "./Menus";
import Cart from "./Cart";
import Drawers from "./Drawers";
const HeaderTopbarTwo = () => {
  const [open, setopen] = useState(false);
  return (
    <>
      <div className="headerTopbarTwo">
        <div className="header_topbar_two_left">
          <Brands open={open} setopen={setopen} />
          <Drawers open={open} setopen={setopen} />
        </div>
        <div className="header_topbar_two_middle">
          <Menus />
        </div>
        <div className="header_topbar_two_right desktop">
          <Cart />
        </div>
      </div>
      <div className="header_topbar_two_right mobile">
        <Cart />
      </div>
    </>
  );
};

export default HeaderTopbarTwo;
