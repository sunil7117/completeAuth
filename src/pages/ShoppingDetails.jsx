import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import "./shoppingDetails.css";
import Footer from "../components/Footer";
import AddMinusButtons from "../components/pageComponents/AddMinusButtons";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, getCart } from "../service/api";
import { cartadd } from "../redux/loginSlice";
import { useNavigate } from "react-router-dom";
// import { cartadd } from "../redux/loginSlice";
const api = process.env.REACT_APP_SERVER;
const ShoppingDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pagename = "shopping-details";
  const { getuser, cart, quantity } = useSelector((state) => state.login);

  const handleRemoveItem = async (product_id) => {
    try {
      await deleteCart(getuser?.cart, product_id);
      const getcart = await getCart(getuser?.cart);
      dispatch(cartadd(getcart.data));
      if (cart.length > 1) {
        console.log("ok");
      } else {
        navigate("/shop");
      }
    } catch (error) {}
  };
  useEffect(() => {
    const getCartItem = async () => {
      try {
        await getCart(getuser?.cart);
        // console.log(cartdata.data);
      } catch (error) {}
    };
    getCartItem();
  }, [getuser?.cart]);
  return (
    <div>
      <Header pagename={pagename} />
      <Hero pagename={pagename} />
      <div className="shopping-details_section">
        <table border={1} className="shoppingtable">
          <thead>
            <tr>
              <td>products</td>
              <td>price</td>
              <td>quantity</td>
              <td>total</td>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return (
                <tr key={item?._id}>
                  <td>
                    <div className="flex itemcenter g-10">
                      <img src={`${api}/${item?.product_image}`} alt="" />
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
                      <AddMinusButtons product_id={item?._id} />
                    </div>
                  </td>
                  <td>
                    <div className="flex justifybetween cart-total">
                      <p>{item?.product_price * quantity}</p>
                      <span
                        className="cartclose"
                        onClick={() => handleRemoveItem(item?._id)}
                      >
                        X
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingDetails;
