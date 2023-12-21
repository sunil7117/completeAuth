import React, { useState } from "react";
const AddMinusButtons = () => {
  const [productCount, setProductCount] = useState(1);
  const increase = () => {
    setProductCount(productCount + 1);
  };

  return (
    <div className="cart_item_count">
      <button>-</button>
      <span>{productCount}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default AddMinusButtons;
