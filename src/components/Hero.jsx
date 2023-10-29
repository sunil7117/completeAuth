import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";
const Hero = ({ pagename }) => {
  return (
    <div className="hero">
      <div className="hero_section">
        <p>{pagename}</p>
        <p>
          <Link to="/" className="link">
            Home
          </Link>
          - <span>{pagename}</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
