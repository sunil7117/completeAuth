import React from "react";
import logo from "../../assets/img/logo.png";
import { Reorder } from "@mui/icons-material";
import "./brands.css";
import { Link } from "react-router-dom";
const Brands = ({ open, setopen }) => {
  const handledrawerOpen = () => {
    setopen(true);
  };
  return (
    <>
      <div className="brands">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <span className="drawer" onClick={handledrawerOpen}>
          <Reorder />
        </span>
      </div>
    </>
  );
};

export default Brands;
