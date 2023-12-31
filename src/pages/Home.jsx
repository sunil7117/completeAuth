import React, { useEffect, useState } from "react";
import "./home.css";
import blog from "../assets/img/blog/blog-1.jpg";
import banner1 from "../assets/img/banner/banner-1.jpg";
import banner2 from "../assets/img/banner/banner-2.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Product";
import BlogDetails from "../components/BlogDetails";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
const blogData = [
  {
    img: blog,
    title: "Cooking tips make cooking simple",
    para: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
  },
  {
    img: blog,
    title: "Cooking tips make cooking simple",
    para: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
  },
  {
    img: blog,
    title: "Cooking tips make cooking simple",
    para: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
  },
];
const Home = () => {
  const { product } = useSelector((state) => state.data);
  const { productTag } = useSelector((state) => state.login);

  const [sortData, setsortData] = useState([]);
  const searchButtonValue = (btnvalue) => {
    const newsortData =
      btnvalue === "all"
        ? product
        : product.filter((item) => item.product_tag === btnvalue);
    setsortData(newsortData);
  };
  useEffect(() => {
    setsortData(product);
  }, [product]);
  return (
    <>
      <Header pagename={"home"} />
      <div className="banner_section">
        <div className="banner">
          <div className="banner_text">
            <h3>Fress friuts</h3>
            <h1>
              Vegetable <br />
              100% Organic
            </h1>
            <small>Free Pickup and Delivery Available</small>
            <button>shop now</button>
          </div>
        </div>
      </div>
      <div className="home_product_section">
        <div className="home_additional">
          <div className="home_additional_heading">
            <p>Featured Product</p>
          </div>
          <div className="home_additional_button">
            <button onClick={() => searchButtonValue("all")}>all</button>
            {productTag.map((tag) => (
              <button key={tag} onClick={() => searchButtonValue(tag)}>
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="home_product">
          {sortData.map((data, index) => (
            <div className="homeproduct" key={index}>
              <Product product={data} />
            </div>
          ))}
        </div>
      </div>
      <div className="home_showcase">
        <div className="home_showcase_left">
          <img src={banner1} alt="" />
        </div>
        <div className="home_showcase_right">
          <img src={banner2} alt="" />
        </div>
      </div>
      <div className="home_blog_right_section">
        <div className="home_additional">
          <div className="home_additional_heading">
            <p>Blog</p>
          </div>
        </div>
        <div className="home_blog_right">
          {blogData.map((blog, index) => (
            <div className="homeblogs" key={index}>
              <BlogDetails blog={blog} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
