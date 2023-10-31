import React from "react";
import "./blogDetails.css";
import { CalendarMonth, Chat, Comment } from "@mui/icons-material";
const BlogDetails = ({ blog, pagename }) => {
  return (
    <div className="blog_details">
      <div className="blog_img">
        <img src={blog?.img} alt="blog" />
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
        <p>{blog?.title}</p>
        <p>{blog?.para}</p>
        {pagename === "blog" && (
          <p>
            <button className="readmore">
              read more <span>--</span>
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
