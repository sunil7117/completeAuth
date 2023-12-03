import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import prod from "../assets/img/product/product-1.jpg";
import "./shopping-cart.css";
import { HeartBroken } from "@mui/icons-material";

const shopping = {
  name: "crab pool security",
  color: "white",
  tag: "vegetables",
  price: 40.0,
  ratting: 4,
  review: "18 reviews",
  details:
    "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.",
  img: prod,
  instock: "in stock",
  weight: "0.5kg",
};
const ShoppingCart = () => {
  const pagename = "shopping-cart";
  const [path, setpath] = useState("description");
  const [route, setroute] = useState("description");
  const addRouter = (route) => {
    setpath(route);
    setroute(route);
  };
  return (
    <div>
      <Header />
      <Hero pagename={pagename} />
      <div className="shopping-cart_section">
        <div className="shopping-cart_top">
          <div className="shopping-cart_top_left">
            <div className="shopping-cart_top_left_img">
              <img src={shopping?.img} alt="" />
            </div>
            <div className="shopping-cart_top_left_subimg"></div>
          </div>
          <div className="shopping-cart_top_right">
            <h1>{shopping?.name}</h1>
            <p>
              <span>{shopping?.ratting}</span>
              <span>({shopping?.review})</span>
            </p>
            <h2>${shopping?.price}</h2>
            <p>{shopping?.details}</p>
            <div className="cart-buttons">
              <div className="cart-button_left">
                <div className="cart_item_count">
                  <button>-</button>
                  <span>0</span>
                  <button>+</button>
                </div>
              </div>
              <div className="cart-button_middle">
                <button>Add to cart</button>
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
                <p className="additional_info_detail">{shopping?.instock}</p>
              </div>

              <div className="additional_info">
                <h4 className="additional_info_head">shipping</h4>
                <p className="additional_info_detail">01 day shiping</p>
              </div>

              <div className="additional_info">
                <h4 className="additional_info_head">weight</h4>
                <p className="additional_info_detail">{shopping?.weight}</p>
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
