import React, { useContext } from "react";
import "./headertopbarone.css";
import {
  Email,
  FacebookOutlined,
  LinkedIn,
  Person,
  Twitter,
} from "@mui/icons-material";
import { AuthContext } from "../../contextapi/AuthContext";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
    console.log("checked error");
  };
  return (
    <div className="header_topbar_right">
      <p className="header_topbar_right_icon">
        <TopbarIcons />
      </p>
      <p className="header_topbar_right_text">Language</p>
      <p className="header_topbar_right_text" onClick={handleLogout}>
        <Person sx={{ fontSize: 20 }} /> Logout
      </p>
    </div>
  );
};

export const TopbarIcons = () => {
  const data = useContext(AuthContext);
  console.log(data);
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
