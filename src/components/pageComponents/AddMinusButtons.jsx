import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productQuantity } from "../../redux/loginSlice";
const AddMinusButtons = ({ product_id }) => {
  const [productCount, setProductCount] = useState(1);
  const dispatch = useDispatch();
  let { quantity } = useSelector((state) => state.login);
  const increase = () => {
    console.log(product_id);
    setProductCount(productCount + 1);
    dispatch(productQuantity(quantity + 1));
  };
  return (
    <div className="cart_item_count">
      <button>-</button>
      <span>{quantity}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default AddMinusButtons;
