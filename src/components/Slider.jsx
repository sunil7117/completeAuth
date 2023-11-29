import React, { useEffect, useState } from "react";
import "./slider.css";
import slide1 from "../assets/img/categories/cat-1.jpg";
import slide2 from "../assets/img/categories/cat-2.jpg";
import slide3 from "../assets/img/categories/cat-3.jpg";
import slide4 from "../assets/img/categories/cat-4.jpg";
import slide5 from "../assets/img/categories/cat-5.jpg";

const Slider = ({ button }) => {
  const sourceImg = [slide1, slide2];
  const lenght = sourceImg.length;
  const [current, setCurrent] = useState(0);
  const handleNext = () => {
    setCurrent(current === lenght - 1 ? 0 : current + 1);
  };
  const handlePrev = () => {
    setCurrent(current === 0 ? lenght - 1 : current - 1);
  };

  // ===========Autoplay slider active============
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     handleNext();
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [handleNext]);
  return (
    <>
      <div className="slider_box">
        <div className="slider">
          <div className="slider_items">
            <div className="slider_item">
              <img src={slide1} alt="" />
            </div>
            <div className="slider_button">
              <button>Vegetabels</button>
            </div>
          </div>
          {/* ========== */}
          <div className="slider_items">
            <div className="slider_item">
              <img src={slide2} alt="" />
            </div>
            <div className="slider_button">
              <button>Vegetabels</button>
            </div>
          </div>
          {/* ========== */}
          <div className="slider_items">
            <div className="slider_item">
              <img src={slide3} alt="" />
            </div>
            <div className="slider_button">
              <button>Vegetabels</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
