import React, { useEffect } from "react";
import { Badge } from "@mui/material";
import { HeartBroken, ShoppingBag } from "@mui/icons-material";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../service/api";
import { cartadd } from "../../redux/loginSlice";

const Cart = () => {
  const navigate = useNavigate();
  const { getuser, isFailure, cart } = useSelector((state) => state.login);
  console.log(cart);
  const dispatch = useDispatch();
  const shoppingcart = async () => {
    console.log(isFailure);
    if (isFailure) {
      navigate(`/login?pagename=shopping-details`);
      console.log("login");
    } else {
      if (getuser) {
        console.log("already login");
        navigate("/shopping-details");
      }
    }
  };
  const getusercart = async (id) => {
    try {
      const { data, status } = await getUser(id);
      dispatch(cartadd(data));
    } catch (error) {}
  };
  useEffect(() => {
    getusercart(getuser?._id);
  }, []);
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
