import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import "./shopping-cart.css";
import { HeartBroken } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { addtocartdata, getCart, getproductbysearch } from "../service/api";
import { useDispatch, useSelector } from "react-redux";
import { cartadd } from "../redux/loginSlice";

const api = process.env.REACT_APP_SERVER;
const ShoppingCart = () => {
  const pagename = "shopping-cart";
  const [shopping, setshopping] = useState({});

  const [path, setpath] = useState("description");
  const [route, setroute] = useState("description");

  // To get access of url
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("_id");
  // To get access of url

  // get access of central store
  const { getuser } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addRouter = (route) => {
    setpath(route);
    setroute(route);
  };
  const addtocart = async () => {
    if (getuser) {
      // this code added data in cart as object reference of user in cart
      const savecart = await addtocartdata(getuser?.cart, productId); //this request send to serve for save product data in usercart
      const getcart = await getCart(getuser?.cart);
      dispatch(cartadd(getcart.data));
      navigate("/shopping-details");
    } else {
      alert("please login first");
      navigate("/login?pagename=shopping-details");
    }
  };

  useEffect(() => {
    const getidfromurl = async (id) => {
      try {
        const { data } = await getproductbysearch(id);
        console.log(api);
        setshopping(data[0]);
      } catch (error) {}
    };
    getidfromurl(productId);
  }, [productId]);
  return (
    <div>
      <Header />
      <Hero pagename={pagename} />
      <div className="shopping-cart_section">
        <div className="shopping-cart_top">
          <div className="shopping-cart_top_left">
            <div className="shopping-cart_top_left_img">
              <img src={`${api}/${shopping?.product_image}`} alt="" />
            </div>
            <div className="shopping-cart_top_left_subimg"></div>
          </div>
          <div className="shopping-cart_top_right">
            <h1>{shopping?.product_name}</h1>
            <p>
              <span>{shopping?.product_ratting}</span>
              <span>({shopping?.product_review})</span>
            </p>
            <h2>${shopping?.product_price}</h2>
            <p>{shopping?.product_details}</p>
            <div className="cart-buttons">
              <div className="cart-button_left">
                {/* <AddMinusButtons id={productId} /> */}
              </div>
              <div className="cart-button_middle">
                <button onClick={addtocart}>Add to cart</button>
              </div>
              <div className="cart-button_right">
                <button>
                  <HeartBroken />
                </button>
              </div>
            </div>
            <hr className="divider" />
            <div className="additional_info_box">
              <div className="additional_info">
                <h4 className="additional_info_head">Availability</h4>
                <p className="additional_info_detail">
                  {shopping?.product_stock === true
                    ? "in stock"
                    : "out of stock"}
                </p>
              </div>

              <div className="additional_info">
                <h4 className="additional_info_head">shipping</h4>
                <p className="additional_info_detail">01 day shiping</p>
              </div>

              <div className="additional_info">
                <h4 className="additional_info_head">weight</h4>
                <p className="additional_info_detail">
                  {shopping?.product_weight}
                </p>
              </div>

              <div className="additional_info">
                <h4 className="additional_info_head">share on</h4>
                <p className="additional_info_detail">icons</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shopping-cart_middle">
          <ul className="additional_info_routes">
            <li
              className={
                route === "description"
                  ? "additional_info_route info_active"
                  : "additional_info_route"
              }
              onClick={() => addRouter("description")}
            >
              description
            </li>
            <li
              className={
                route === "information"
                  ? "additional_info_route info_active"
                  : "additional_info_route"
              }
              onClick={() => addRouter("information")}
            >
              information
            </li>
            <li
              className={
                route === "reviews"
                  ? "additional_info_route info_active"
                  : "additional_info_route"
              }
              onClick={() => addRouter("reviews")}
            >
              reviews(2)
            </li>
          </ul>

          {path === "description" && (
            <div className="description">
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
              dui. Pellentesque in ipsum id orci porta dapibus. Proin eget
              tortor risus. Vivamus suscipit tortor eget felis porttitor
              volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed
              sit amet dui. Donec rutrum congue leo eget
            </div>
          )}
          {path === "information" && (
            <div className="information">
              ac diam sit amet quam vehicula elementum sed sit amet dui.
              Pellentesque in ipsum id orci porta dapibus. Proin eget tortor
              risus. Vivamus suscipit tortor eget felis porttitor volutpat.
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
              dui. Donec rutrum congue leo egetVestibulum ac diam sit amet quam
              vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci
              porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor
              eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
              vehicula elementum sed sit amet dui. Donec rutrum congue leo eget
            </div>
          )}

          {path === "reviews" && (
            <div className="information">
              reviews diam sit amet quam vehicula elementum sed sit amet dui.
              Pellentesque in ipsum id orci porta dapibus. Proin eget tortor
              risus. Vivamus suscipit tortor eget felis porttitor volutpat.
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
              dui. Donec rutrum congue leo egetVestibulum ac diam sit amet quam
              vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci
              porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor
              eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
              vehicula elementum sed sit amet dui. Donec rutrum congue leo eget
            </div>
          )}
        </div>
        <div className="shopping-cart_bottom">bottom</div>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
