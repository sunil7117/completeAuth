import React from "react";
import "./home.css";
import prod from "../assets/img/product/product-1.jpg";
import blog from "../assets/img/blog/blog-1.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Product from "../components/Product";
import BlogDetails from "../components/BlogDetails";
const Home = () => {
  const prodData = { name: "crab pool security", price: 40.0 };
  const blogData = {
    title: "Cooking tips make cooking simple",
    para: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
  };
  return (
    <>
      <Header />
      <Hero pagename={"home"} />
      <Product img={prod} data={prodData} />
      <BlogDetails img={blog} data={blogData} />
      <Footer />
    </>
  );
};

export default Home;
