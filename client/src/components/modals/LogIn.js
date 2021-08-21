import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [showSignUp, setShowSignUp] = useState(true);
  return (
    <Modal
      centered
      show={showSignUp}
      onHide={() => {
        setShowSignUp(!showSignUp);
      }}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <span className="mod-header">Sign In</span>
        </Modal.Title>
      </Modal.Header>
      <div className="contact-form fom-mod">
        <form id="contact-form">
          <div>
            <div>
              <div>
                <div
                  id="first-mod"
                  className="col-lg-12 col-md-12 col-sm-12 form-group"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div
                  id="last-mod"
                  className="col-lg-12 col-md-12 col-sm-12 form-group"
                >
                  <button type="submit">log in</button>
                </div>
                <p className="modal-para">
                  <Link to="/reset">
                    <span className="modal-link">Forgot password?</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default LogIn;
