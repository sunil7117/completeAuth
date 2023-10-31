import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import BlogDetails from "../components/BlogDetails";
import blog from "../assets/img/blog/blog-1.jpg";
import { Search } from "@mui/icons-material";
import "./blog.css";

const Blog = () => {
  const pagename = "blog";
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
    {
      img: blog,
      title: "Cooking tips make cooking simple",
      para: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
    },
  ];
  return (
    <>
      <Header pagename={pagename} />
      <Hero pagename={pagename} />
      <div className="blog">
        <div className="blog_left">
          <div className="blog_left_search">
            <input type="text" placeholder="Search..." />
            <Search sx={{ color: "#bbb" }} />
          </div>
          <div className="blog_left_category">
            <h2>Categories</h2>
            <ul className="blog_left_category_lists">
              <li className="blog_left_category_list">All</li>
              <li className="blog_left_category_list">Beauty (5)</li>
              <li className="blog_left_category_list">Food (5)</li>
              <li className="blog_left_category_list">lifeStyle (10)</li>
            </ul>
          </div>
          <div className="blog_left_searchby">
            <h2>Search By</h2>
            <div className="blog_left_searchby_buttons">
              <button className="blog_left_searchby_button">Apple</button>
              <button className="blog_left_searchby_button">Beauty</button>
              <button className="blog_left_searchby_button">Vegitables</button>
              <button className="blog_left_searchby_button">friuts</button>
              <button className="blog_left_searchby_button">Beauty</button>
              <button className="blog_left_searchby_button">Vegitables</button>
            </div>
          </div>
        </div>
        <div className="blog_right">
          {blogData.map((blog) => (
            <BlogDetails blog={blog} pagename={pagename} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
