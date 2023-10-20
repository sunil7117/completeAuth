import React from "react";
import logo from "../../assets/img/logo.png";
import { Badge } from "@mui/material";
import { Favorite, Reorder, ShoppingBasket } from "@mui/icons-material";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import Searchbar from "./Searchbar";
import Support from "./Support";
const Navbar = () => {
  return (
    <div className="bottomHeader">
      <div className="top">
        <div className="topLeft">
          <img src={logo} alt="logo" />
          <span>
            <Reorder sx={{ width: "1.5em", height: "1.5em" }} />
          </span>
        </div>
        <div className="topMiddle">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => [isActive ? "active" : ""]}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) => [isActive ? "active" : ""]}
              >
                Shop
              </NavLink>
            </li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="topRight">
          <div className="box">
            <Badge className="carts" badgeContent={4} color="secondary">
              <Favorite sx={{ fontSize: "1.5em" }} color="action" />
            </Badge>
            <Badge className="carts" badgeContent={4} color="secondary">
              <ShoppingBasket sx={{ fontSize: "1.5em" }} color="action" />
            </Badge>
            <p>
              Item : <span>$ 200</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="menuone">
          <div className="position">
            <Dropdown />
          </div>
        </div>
        <div className="menutwo">
          <Searchbar />
          <Support />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
