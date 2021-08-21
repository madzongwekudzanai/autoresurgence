import React from "react";
import appoint from "./background/appoint.jpg";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section
      className="call-to-action"
      style={{ backgroundImage: `url(${appoint})` }}
    >
      <div className="inner-container clearfix">
        <div className="title-box">
          <h3>
            If You Have Any <span>technical solution ...</span> We Are Available
            For You We Manage Every Kind of Business , Join Now!!
          </h3>
        </div>
        <div className="btn-box">
          <Link to="/contact" className="theme-btn btn-style-one">
            Make An Appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
