import React from "react";
import { Link } from "react-router-dom";
import about_img from "./coverimage/about-img.jpg";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <h2>Welcome to AutoResurgence</h2>
            <h4>Repair and Car Service</h4>
            <div className="primary-text">
              We offer a wide range of hydraulic cartridge valves, customized
              hydraulic integrated manifolds and valves for hydraulic breaking
              systems
            </div>
            <div className="text">
              We work with clients big and small across a range of sectors and
              we utilise all forms of media to get your name out there in a way
              that’s right for you. We have a number of different teams within
              our agency that specialise in different areas of business so you
              can be sure that you won’t receive a generic service and although
              we can’t boast years and years of service we can ensure you that
              is a good thing in this industry
            </div>
            <ul className="list-style-one clearfix">
              <li>Professional car cleaning</li>
              <li>Monthly car inspections</li>
              <li>Car painting assets and service</li>
              <li>Creating new car assets and wheels</li>
            </ul>
          </div>
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="image-box">
              <Link to="/">
                <img src={about_img} alt="" />
              </Link>
            </div>
            <div className="row clearfix">
              <div className="column col-lg-6 col-md-6 col-sm-12">
                <h3>
                  <Link to="/about">Our Mission</Link>
                </h3>
                <p>
                  Our most popular service is our Virtual Receptionist. We know
                  that sometimes it’s difficult to get to the phone
                </p>
                <Link to="/about" className="read-more">
                  Read More
                </Link>
              </div>
              <div className="column col-lg-6 col-md-6 col-sm-12">
                <h3>
                  <Link to="/about">Our History</Link>
                </h3>
                <p>
                  If you are in the middle of something and you don’t want to
                  miss that important call that could be the start of an
                  exciting
                </p>
                <Link to="/about" className="read-more">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
