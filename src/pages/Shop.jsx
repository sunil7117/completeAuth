import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./shop.css";
import prod from "../assets/img/product/product-1.jpg";
import Hero from "../components/Hero";
import { GridView, List } from "@mui/icons-material";
import Product from "../components/Product";

const prodData = [
  { name: "crab pool security", tag: "vegetables", price: 40.0, img: prod },
  { name: "crab pool security", tag: "fastfood", price: 40.0, img: prod },
  { name: "crab pool security", tag: "vegetables", price: 40.0, img: prod },
  { name: "crab pool security", tag: "fruits", price: 40.0, img: prod },
  { name: "crab pool security", tag: "vegetables", price: 40.0, img: prod },
  { name: "crab pool security", tag: "fruits", price: 40.0, img: prod },
  { name: "crab pool security", tag: "fruits", price: 40.0, img: prod },
  { name: "crab pool security", tag: "fastfood", price: 40.0, img: prod },
];
const Shop = () => {
  const pagename = "shop";
  return (
    <>
      <Header />
      <Hero pagename={pagename} />
      <div className="shop_section">
        <div className="shop_section_left">
          <div className="shop_section_heading">
            <h2>Department</h2>
          </div>
          <ul className="shop_section_text">
            <li className="shop_section_text_link">Fresh meat</li>
            <li className="shop_section_text_link">Vegetables</li>
            <li className="shop_section_text_link">fruits and nuts gifts</li>
            <li className="shop_section_text_link">ocean foods</li>
            <li className="shop_section_text_link">butter & eggs</li>
          </ul>

          <div className="shop_section_heading">
            <h2>price</h2>
          </div>

          <div className="shop_section_heading">
            <h2>colors</h2>
          </div>
          <div className="shop_section_style">
            <ul className="shop_section_text">
              <li className="shop_section_text_link">
                <div
                  className="circle"
                  style={{
                    border: "2px solid rgb(177, 174, 174)",
                    background: "#fff",
                  }}
                ></div>{" "}
                <div style={{ marginLeft: 28 }}>white</div>
              </li>
              <li className="shop_section_text_link">
                <div
                  className="circle"
                  style={{ border: "2px solid red", background: "red" }}
                ></div>{" "}
                <div style={{ marginLeft: 28 }}>red</div>
              </li>
              <li className="shop_section_text_link">
                <div
                  className="circle"
                  style={{ border: "2px solid blue", background: "blue" }}
                ></div>
                <div style={{ marginLeft: 28 }}>blue</div>
              </li>
            </ul>
            <ul className="shop_section_text">
              <li className="shop_section_text_link">
                <div
                  className="circle"
                  style={{
                    border: "2px solid rgb(177, 174, 174)",
                    background: "#fff",
                  }}
                ></div>{" "}
                <div style={{ marginLeft: 28 }}>white</div>
              </li>
              <li className="shop_section_text_link">
                <div
                  className="circle"
                  style={{ border: "2px solid red", background: "red" }}
                ></div>{" "}
                <div style={{ marginLeft: 28 }}>red</div>
              </li>
              <li className="shop_section_text_link">
                <div
                  className="circle"
                  style={{ border: "2px solid blue", background: "blue" }}
                ></div>
                <div style={{ marginLeft: 28 }}>blue</div>
              </li>
            </ul>
          </div>

          <div className="shop_section_heading">
            <h2>popular size</h2>
          </div>
          <div className="shop_section_text">
            <button>Large</button>
            <button>medium</button>
            <button>small</button>
            <button>tiny</button>
          </div>
        </div>
        <div className="shop_section_right">
          <div className="shop_section_right_top"> slider</div>
          <hr />
          <div className="shop_section_right_middle">
            <div className="filter">
              <div className="filter_left">
                <div className="sort">
                  <p>sort by</p>
                </div>
              </div>
              <div className="filter_center">
                <h4>16</h4>
                <p>product found</p>
              </div>
              <div className="filter_right">
                <GridView />
                <List />
              </div>
            </div>
            <div className="product_section">
              <div className="shop_product">
                {prodData.map((data) => (
                  <div className="shopproduct">
                    <Product product={data} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="shop_section_right_bottom">pagination </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
