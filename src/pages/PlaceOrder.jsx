import React from "react";
import "./placeorder.css";
import { useNavigate } from "react-router-dom";
const PlaceOrder = () => {
  const navigate = useNavigate();
  const track = () => {
    navigate("/");
  };
  return (
    <div className="place_order">
      <div className="place_order_content">
        <div className="imagebox">
          <div className="image">
            <img src="" alt="place-img" />
          </div>
          <small>Order placed</small>
        </div>
        <div className="track">
          <button onClick={track}>track</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
