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
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className="menulist">
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? "active" : "bye")}
          >
            Shop
          </NavLink>
        </li>
        <li className="menulist" onClick={handleopensubmenu}>
          page
          <span className="arrow">
            <KeyboardArrowDown />
          </span>
          <ul className={open ? "submenu submenuhover" : "submenu"}>
            <li className="submenulist">
              <NavLink to="/page/shoping-details">Shop details</NavLink>
            </li>
            <li className="submenulist">
              <NavLink to="/page/shoping-cart">Shopping cart</NavLink>
            </li>
            <li className="submenulist">
              <NavLink to="/page/checkout">Checkout</NavLink>
            </li>
            <li className="submenulist">
              <NavLink>Blog details</NavLink>
            </li>
          </ul>
        </li>
        <li className="menulist">
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "bye")}
          >
            Blog
          </NavLink>
        </li>
        <li className="menulist">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "bye")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menus;
