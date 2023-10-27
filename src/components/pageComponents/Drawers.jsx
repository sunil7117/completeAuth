import { Drawer } from "@mui/material";
import React from "react";
import {
  HeaderTopbarLeft,
  HeaderTopbarRight,
  TopbarIcons,
} from "./HeaderTopbarOne";
import Cart from "./Cart";
import Menus from "./Menus";
import logo from "../../assets/img/logo.png";
import "./drawers.css";
import { Link } from "react-router-dom";
const Drawers = ({ open, setopen }) => {
  const handleClosed = () => {
    setopen(false);
  };
  return (
    <>
      <Drawer
        sx={{
          display: { md: "none" },
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            paddingTop: 5,
            paddingBottom: 3,
            paddingLeft: 3,
            paddingRight: 3,
          },
        }}
        open={open}
        onClose={handleClosed}
      >
        <div className="drawer">
          <div className="drawer_logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="drawer_cart">
            <Cart />
          </div>
          <div className="drawer_cart">
            <HeaderTopbarRight />
          </div>
          <div className="drawer_menu">
            <Menus />
          </div>
          <div className="drawer_icons">
            <TopbarIcons />
          </div>
          <div className="drawer_footer">
            <HeaderTopbarLeft />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Drawers;
