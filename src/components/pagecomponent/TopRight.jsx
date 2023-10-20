import React, { useContext } from "react";
import { AuthContext } from "../../contextapi/AuthContext";
import { useNavigate } from "react-router-dom";
import "./topRight.css";
import {
  FacebookOutlined,
  LinkedIn,
  Person,
  Twitter,
} from "@mui/icons-material";
const TopRight = () => {
  const { auth } = useContext(AuthContext);
  console.log(auth);
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <div className="right">
      <p>
        <span>
          <FacebookOutlined sx={{ fontSize: "1.5em" }} />
        </span>
        <span>
          <Twitter sx={{ fontSize: "1.5em" }} />
        </span>
        <span>
          <LinkedIn sx={{ fontSize: "1.5em" }} />
        </span>
      </p>
      <p className="lan">language</p>
      <p className="login">
        <span className="icons">
          <Person sx={{ fontSize: "1.5em" }} />
        </span>
        <span onClick={handleLogout}>Logout</span>
      </p>
    </div>
  );
};

export default TopRight;
