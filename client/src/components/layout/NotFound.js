import React from "react";
import { Link } from "react-router-dom";
import errorImg from "./coverimage/error.png";

const NotFound = () => {
  return (
    <section className="error-section">
      <div className="auto-container">
        <div className="error-image">
          <div className="image">
            <img src={errorImg} alt="" />
          </div>
        </div>
        <h2>
          <span className="dark">Page </span> not{" "}
          <span className="theme_color"> found</span>
        </h2>
        <p>
          The page you are Looking for was Moved, Removed, Renamed or Might
          Never Existed
        </p>
        <Link to="/" className="theme-btn btn-style-three">
          Go Home
        </Link>
        <Link to="/contact" className="theme-btn btn-style-five">
          Contact
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
