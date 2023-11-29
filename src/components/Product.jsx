import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import {
  Favorite,
  ScreenRotationAlt,
  ShoppingBag,
  ShoppingCart,
} from "@mui/icons-material";
const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="product_details">
        <div className="product_img">
          <img src={product?.img} alt="productimg" />
        </div>
        <div className="product_detail">
          <p>
            <Link to="/alsfj"> {product?.name}</Link>
          </p>
          <p>${product?.price}</p>
        </div>
      </div>
      <div className="product_hover">
        <p>
          <Favorite sx={{ width: 18, height: 18 }} className="hover_icons" />
        </p>
        <p>
          <ScreenRotationAlt
            sx={{ width: 18, height: 18 }}
            className="hover_icons"
          />
        </p>
        <p>
          <ShoppingCart
            sx={{ width: 18, height: 18 }}
            className="hover_icons"
          />
        </p>
      </div>
    </div>
  );
};

export default Product;
