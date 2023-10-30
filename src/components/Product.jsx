import React from "react";
import "./product.css";
import prod from "../assets/img/product/product-1.jpg";
import { Link } from "react-router-dom";
import {
  HeartBroken,
  Rotate90DegreesCcw,
  ShoppingBag,
} from "@mui/icons-material";
const Product = ({ img, data }) => {
  console.log(data);
  return (
    <div className="product">
      <div className="product_details">
        <div className="product_img">
          <img src={img} alt="productimg" />
        </div>
        <div className="product_detail">
          <p>
            <Link to="/alsfj"> {data.name}</Link>
          </p>
          <p>${data.price}</p>
        </div>
      </div>
      <div className="product_hover">
        <p>
          <HeartBroken className="hover_icons" />
        </p>
        <p>
          <Rotate90DegreesCcw />
        </p>
        <p>
          <ShoppingBag />
        </p>
      </div>
    </div>
  );
};

export default Product;
