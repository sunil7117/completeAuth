import React from "react";
import "./blogDetails.css";
import { CalendarMonth, Chat, Comment } from "@mui/icons-material";
const BlogDetails = ({ img, data }) => {
  return (
    <div className="blog">
      <div className="blog_img">
        <img src={img} alt="blog" />
      </div>
      <div className="blog_detail">
        <p>
          <span>
            <CalendarMonth /> May 4,2019
          </span>
          <span>
            <Comment />5
          </span>
        </p>
        <p>{data.title}</p>
        <p>{data.para}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
