import React, { useState } from "react";
import car_image from "./coverimage/car-image.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";

const ContactUsSection = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { name, email, phone, subject, message } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", {
        name,
        email,
        phone,
        subject,
        message
      });
      setAlert("Thank you, your email has been sent", "success", 10000);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      setAlert("Sorry, something went wrong", "danger");
    }
  };
  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <h2>Contact US</h2>
          <div className="separator">
            <span className="flaticon-support"></span>
          </div>
        </div>
        <div className="contact-form">
          <form
            id="contact-form"
            onSubmit={e => {
              onSubmit(e);
            }}
          >
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 form-group pull-right">
                <textarea
                  name="message"
                  value={message}
                  placeholder="Message"
                  onChange={e => {
                    onChange(e);
                  }}
                  required
                ></textarea>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="name"
                      value={name}
                      placeholder="Name"
                      onChange={e => {
                        onChange(e);
                      }}
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Email"
                      onChange={e => {
                        onChange(e);
                      }}
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="tel"
                      name="phone"
                      value={phone}
                      placeholder="Phone No"
                      onChange={e => {
                        onChange(e);
                      }}
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="subject"
                      value={subject}
                      placeholder="Subject"
                      onChange={e => {
                        onChange(e);
                      }}
                      required
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <button type="submit">send Message</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="contact-info">
          <div className="row clearfix">
            <div className="image-column col-lg-8 col-md-12 col-sm-12">
              <figure>
                <img src={car_image} alt="" />
              </figure>
            </div>
            <div className="info-column col-lg-4 col-md-12 col-sm-12">
              <h3>Contact Info</h3>
              <ul>
                <li>
                  <span className="icon flaticon-local"></span>
                  <p>
                    <strong>Adress:</strong>
                    <br />
                    2438 Mopane Avenue Marlborough.
                  </p>
                </li>
                <li>
                  <span className="icon flaticon-phone"></span>
                  <p>
                    <strong>Phone:</strong>
                    <br />
                    +263 77 275 1672
                  </p>
                  <p>
                    <span>Email:</span>
                    <Link to="/">revivalcarclinic@gmail.com</Link>
                  </p>
                </li>
                <li>
                  <span className="icon flaticon-timer"></span>
                  <p>
                    <strong>Workshop Timing:</strong>
                    <br /> 10:00am to 6:00pm Sunday Closed
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ContactUsSection.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(ContactUsSection);
