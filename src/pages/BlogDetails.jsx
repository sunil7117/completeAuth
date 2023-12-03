import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const BlogDetails = () => {
  const pagename = "abcs adnf akdf vakdf ";
  return (
    <div>
      <Header />
      <Hero pagename={pagename} />
      <Footer />
    </div>
  );
};

export default BlogDetails;
