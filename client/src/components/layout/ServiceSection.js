import React from "react";
import pattern_2 from "./background/pattern-2.png";
import { Link } from "react-router-dom";

const ServiceSection = () => {
  return (
    <section
      className="services-section-two"
      style={{ backgroundImage: `url(${pattern_2})` }}
    >
      <div className="auto-container">
        <div className="sec-title text-center">
          <h2>Our Best Service</h2>
          <div className="separator">
            <span className="flaticon-support"></span>
          </div>
        </div>
        <div className="row clearfix">
          <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="icon-box">
                <span className="flaticon-dashboard"></span>
              </div>
              <h3>
                <Link to="/service">Speed & Engine Testing</Link>
              </h3>
              <p></p>
              <Link to="/service" className="read-more">
                Read More <i className="fa fa-angle-double-right"></i>
              </Link>
            </div>
          </div>
          <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="icon-box">
                <span className="flaticon-repair"></span>
              </div>
              <h3>
                <Link to="/service">Car Liquids Replacement</Link>
              </h3>
              <p></p>
              <Link to="/service" className="read-more">
                Read More <i className="fa fa-angle-double-right"></i>
              </Link>
            </div>
          </div>
          <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="icon-box">
                <span className="flaticon-maintenance"></span>
              </div>
              <h3>
                <Link to="/service">Trusted & Quality Service</Link>
              </h3>
              <p></p>
              <Link to="/service" className="read-more">
                Read More <i className="fa fa-angle-double-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="services-list">
          <div className="row clearfix">
            <div className="service col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="flaticon-gas-station"></span>
                </div>
                <h3>
                  <Link to="/service">Car Liquids Replacement</Link>
                </h3>
                <p>We will put together a detailed</p>
              </div>
            </div>
            <div className="service col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="flaticon-electric-car"></span>
                </div>
                <h3>
                  <Link to="/service">Electric Car Loading</Link>
                </h3>
                <p>We will put together a detailed</p>
              </div>
            </div>
            <div className="service col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <span className="flaticon-battery"></span>
                </div>
                <h3>
                  <Link to="/service">Battery & Engine Restore</Link>
                </h3>
                <p>We will put together a detailed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
