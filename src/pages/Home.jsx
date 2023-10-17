import React from "react";
import "./home.css";
import {
  Email,
  FacebookOutlined,
  Favorite,
  LinkedIn,
  Person,
  ShoppingBasket,
  Twitter,
} from "@mui/icons-material";
import logo from "../assets/img/logo.png";
import { Badge } from "@mui/material";
const Home = () => {
  return (
    <>
      <header>
        <div className="topHeader">
          <div className="left">
            <p>
              <span>
                <Email sx={{ fontSize: "1.5em" }} />
              </span>
              hello@colorlib.com
            </p>
            <p>Free Shipping for all Order of $99</p>
          </div>
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
              Login
            </p>
          </div>
        </div>
      </header>
      <div className="bottomHeader">
        <div className="top">
          <div className="topLeft">
            <img src={logo} alt="logo" />
          </div>
          <div className="topMiddle">
            <ul>
              <li>Home</li>
              <li>Shop</li>
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
        <div className="bottom"></div>
      </div>
    </>
  );
};

export default Home;
