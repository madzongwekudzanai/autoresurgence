import React, { useState, useEffect } from "react";
import pagetit from "./background/pagetit.jpg";
import { Link, withRouter } from "react-router-dom";

const PageTitle = ({ history }) => {
  const [activeLink, setActiveLink] = useState(window.location.pathname);
  useEffect(() => {
    history.listen((location, action) => {
      // location is an object like window.location
      setActiveLink(`${location.pathname}`);
    });
  }, [history]);
  return (
    <section
      className="page-title"
      style={{ backgroundImage: `url(${pagetit})` }}
    >
      <div className="auto-container">
        <div className="inner-container clearfix">
          <h1>
            {activeLink === "/about"
              ? "ABOUT US"
              : activeLink === "/service"
              ? "OUR SERVICE"
              : activeLink === "/contact"
              ? "CONTACT US"
              : "BLOG"}
          </h1>
          <ul className="bread-crumb clearfix">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {activeLink === "/about"
                ? "About Us"
                : activeLink === "/service"
                ? "Our Service"
                : activeLink === "/contact"
                ? "Contact Us"
                : "News & Updates"}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default withRouter(PageTitle);
