import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./shop.css";
import Hero from "../components/Hero";
import { GridView, List } from "@mui/icons-material";
import Product from "../components/Product";
import { ProductCountContext } from "../contextapi/ProductCount";
import { useSelector } from "react-redux";
const Shop = () => {
  const pagename = "shop";
  const { product } = useSelector((state) => state.data);
  const [sortData, setsortData] = useState([]);
  const [totalproductcount, settotalproductcount] = useState(sortData.length);

  const chooseColor = (color) => {
    const newsortData =
      color === "all"
        ? product
        : product.filter((item) => item.product_color === color);
    setsortData(newsortData);
    settotalproductcount(newsortData.length);
  };

  const searchButtonValue = (btnvalue) => {
    const newsortData =
      btnvalue === "all"
        ? product
        : product.filter((item) => item.product_tag === btnvalue);
    setsortData(newsortData);
    settotalproductcount(newsortData.length);
  };
  useEffect(() => {
    setsortData(product);
  }, [product]);
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
            <li
              className="shop_section_text_link"
              onClick={() => searchButtonValue("vegetables")}
            >
              Vegetables
            </li>
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
              <li
                className="shop_section_text_link"
                onClick={() => chooseColor("white")}
              >
                <div
                  className="circle"
                  style={{
                    border: "2px solid rgb(177, 174, 174)",
                    background: "#fff",
                  }}
                ></div>{" "}
                <div style={{ marginLeft: 28 }}>white</div>
              </li>
              <li
                className="shop_section_text_link"
                onClick={() => chooseColor("red")}
              >
                <div
                  className="circle"
                  style={{ border: "2px solid red", background: "red" }}
                ></div>{" "}
                <div style={{ marginLeft: 28 }}>red</div>
              </li>
              <li
                className="shop_section_text_link"
                onClick={() => chooseColor("blue")}
              >
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
          <hr className="hr" />
          <div className="shop_section_right_middle">
            <div className="filter">
              <div className="filter_left">
                <div className="sort">
                  <p>sort by</p>
                </div>
              </div>
              <div className="filter_center">
                <h4>{totalproductcount}</h4>
                <p>product found</p>
              </div>
              <div className="filter_right">
                <GridView />
                <List />
              </div>
            </div>
            <div className="product_section">
              <div className="shop_product">
                {sortData.map((data) => (
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
