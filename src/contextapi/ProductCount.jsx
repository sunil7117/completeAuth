import React, { createContext, useState } from "react";

export const ProductCountContext = createContext(0);
const ProductCount = ({ children }) => {
  const [count, setcount] = useState(1);
  const [addcart, setaddcart] = useState([]);
  const [productlist, setproductlist] = useState([]);
  return (
    <>
      <ProductCountContext.Provider
        value={{
          total: count,
          settotal: setcount,
          addcart,
          setaddcart,
          productlist,
          setproductlist,
        }}
      >
        {children}
      </ProductCountContext.Provider>
    </>
  );
};

export default ProductCount;
