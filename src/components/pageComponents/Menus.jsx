import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./menus.css";
import { KeyboardArrowDown } from "@mui/icons-material";
const Menus = () => {
  const [open, setopen] = useState(false);
  const handleopensubmenu = () => {
    setopen(!open);
  };
  return (
    <div className="menus">
      <ul className="menu">
        <li className="menulist">
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
        </li>
        <li className="menulist">
          <NavLink to="/shop" className="navlink">
            shop
          </NavLink>
        </li>
        <li className="menulist" onClick={handleopensubmenu}>
          <NavLink className="navlink">
            page <KeyboardArrowDown />
          </NavLink>
          <ul className={open ? "submenu" : "d-none"}>
            <li className="submenulist">
              <NavLink to="/shoping-cart" className="navlink">
                shopping cart
              </NavLink>
            </li>
            <li className="submenulist">
              <NavLink to="/shopping-details" className="navlink">
                shopping details
              </NavLink>
            </li>
            <li className="submenulist">
              <NavLink to="/checkout" className="navlink">
                checkout
              </NavLink>
            </li>
            <li className="submenulist">
              <NavLink to="/blog-details" className="navlink">
                blog details
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="menulist">
          <NavLink to="/blog" className="navlink">
            blog
          </NavLink>
        </li>
        <li className="menulist">
          <NavLink to="/contact" className="navlink">
            contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menus;
