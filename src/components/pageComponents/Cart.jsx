import React, { useEffect } from "react";
import { Badge } from "@mui/material";
import { HeartBroken, ShoppingBag } from "@mui/icons-material";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const navigate = useNavigate();
  const { getuser, cart } = useSelector((state) => state.login);

  // const [cart, setCart] = useState([]);
  const shoppingcart = async () => {
    if (getuser) {
      console.log("already login");
      if (cart.length > 0) {
        navigate("/shopping-details");
      } else {
        alert("Your cart is empty");
        navigate("/shop");
      }
    } else {
      navigate(`/login?pagename=shopping-details`);
    }
  };
  useEffect(() => {});
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
      <p className="pointer" onClick={shoppingcart}>
        <Badge
          badgeContent={
            Array.isArray(cart) && cart.length > 0 ? cart.length : "0"
          }
          color="primary"
        >
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
