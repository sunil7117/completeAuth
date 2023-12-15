import React, { useContext } from "react";
import "./product.css";
import { Link, useNavigate } from "react-router-dom";
import { Favorite, ScreenRotationAlt, ShoppingCart } from "@mui/icons-material";
import { ProductCountContext } from "../contextapi/ProductCount";
const Product = ({ product }) => {
  const api=process.env.REACT_APP_SERVER||"http://localhost:8000"
  const navigate = useNavigate();
  const { addcart, setaddcart } = useContext(ProductCountContext);
  const addtocart = () => {
    // setaddcart([...addcart, product]);
  };
  const shoppingcart = async (id) => {
    navigate(`/shoping-cart?_id=${id}`);
  };
  return (
    <div className="product" onClick={() => shoppingcart(product?._id)}>
      <div className="product_details">
        <div className="product_img">
          <img
            src={`/${product?.product_image}`}
            alt="productimg"
          />
        </div>
        <div className="product_detail">
          <p>
            <Link to="/alsfj"> {product?.product_name}</Link>
          </p>
          <p>${product?.product_price}</p>
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
        <p onClick={addtocart}>
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
