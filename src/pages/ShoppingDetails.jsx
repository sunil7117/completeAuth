import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import "./shoppingDetails.css";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import AddMinusButtons from "../components/pageComponents/AddMinusButtons";
const ShoppingDetails = () => {
  const pagename = "shopping-details";
  const { getuser } = useSelector((state) => state.login);
  const cart = getuser?.user_cart ?? [];
  return (
    <div>
      <Header pagename={pagename} />
      <Hero pagename={pagename} />
      <div className="shopping-details_section">
        <table border={1}>
          <thead>
            <tr>
              <td>products</td>
              <td>price</td>
              <td>quantity</td>
              <td>total</td>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr>
                <td>
                  <div className="flex itemcenter g-10">
                    <img
                      src={`http://localhost:8000/${item?.product_image}`}
                      alt=""
                    />
                    <p>{item?.product_name}</p>
                  </div>
                </td>
                <td>
                  <div className="flex">
                    <p>{item?.product_price}</p>
                  </div>
                </td>
                <td>
                  <div className="flex justifycenter">
                    <AddMinusButtons id={item?._id} />
                  </div>
                </td>
                <td>
                  <div className="flex justifybetween">
                    {/* <p>{item?.product_price * increase}</p> */}
                    <span>X</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingDetails;