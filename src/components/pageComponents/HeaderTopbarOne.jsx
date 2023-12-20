import React from "react";
import "./headertopbarone.css";
import {
  Email,
  FacebookOutlined,
  LinkedIn,
  Person,
  Twitter,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/loginSlice";
const HeaderTobarOne = () => {
  return (
    <>
      <div className="home">
        <div className="header_topbar">
          <HeaderTopbarLeft />
          <HeaderTopbarRight />
        </div>
      </div>
    </>
  );
};

export default HeaderTobarOne;

export const HeaderTopbarLeft = () => {
  return (
    <div className="header_topbar_left">
      <p>
        <Email sx={{ fontSize: 20, marginRight: 1 }} /> hello@colorlib.com
      </p>
      <p> Free Shipping for all Order of $99</p>
    </div>
  );
};
export const HeaderTopbarRight = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.login);
  const navigate = useNavigate();
  const handleloginToggle = () => {
    if (auth === false) {
      navigate("/login");
    } else {
      localStorage.clear();
      dispatch(logout());
      navigate("/shop");
    }
  };

  return (
    <div className="header_topbar_right">
      <p className="header_topbar_right_icon">
        <TopbarIcons />
      </p>
      <p className="header_topbar_right_text">Language</p>
      <p className="header_topbar_right_text" onClick={handleloginToggle}>
        <Avatar sx={{ width: 22, height: 22 }}>
          {auth === false ? (
            <Avatar>
              <Person />
            </Avatar>
          ) : (
            <Avatar>hi</Avatar>
          )}
        </Avatar>
        {auth === false ? "Login" : "Logout"}
      </p>
    </div>
  );
};

export const TopbarIcons = () => {
  return (
    <>
      <p>
        <span>
          <FacebookOutlined sx={{ fontSize: 20 }} />
        </span>
        <span>
          <Twitter sx={{ fontSize: 20 }} />
        </span>
        <span>
          <LinkedIn sx={{ fontSize: 20 }} />
        </span>
      </p>
    </>
  );
};
