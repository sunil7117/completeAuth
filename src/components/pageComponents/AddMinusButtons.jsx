import React, { useEffect, useState } from "react";
import { getproductbysearch } from "../../service/api";
const AddMinusButtons = ({ id }) => {
  let cartInfo;
  const [productCount, setProductCount] = useState({
    product_id: id,
    count: 0,
  });
  const increase = () => {
    if (cartInfo._id === id) {
      setProductCount((prevdata) => ({
        ...prevdata,
        product_id: id,
        count: prevdata.count + 1,
      }));
    }
    console.log(productCount);
  };

  const getidfromurl = async (id) => {
    try {
      const { data } = await getproductbysearch(id);
      cartInfo = data;
    } catch (error) {}
  };
  useEffect(() => {
    getidfromurl(id);
  }, [getidfromurl, id]);
  return (
    <div className="cart_item_count">
      <button>-</button>
      <span>{productCount.count}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default AddMinusButtons;
