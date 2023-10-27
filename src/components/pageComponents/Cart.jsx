import React from "react";
import { Badge } from "@mui/material";
import { HeartBroken, ShoppingBag } from "@mui/icons-material";
import "./cart.css";
const Cart = () => {
  return (
    <div className="cart">
      <p className="pointer">
        <Badge
          badgeContent={4}
          color="primary"
          style={{ fontSize: "1.2rem", minWidth: "20px" }}
        >
          <HeartBroken sx={{ fontSize: 20 }} color="action" />
        </Badge>
      </p>
      <p className="pointer">
        <Badge badgeContent={4} color="primary">
          <ShoppingBag sx={{ fontSize: 20 }} color="action" />
        </Badge>
      </p>
      <p>
        item : <span>$200</span>{" "}
      </p>
    </div>
  );
};

export default Cart;
