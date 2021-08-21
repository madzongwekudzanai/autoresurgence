import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { connect } from "react-redux";

const RegisterAdmin = ({ setAlert }) => {
  const [showSignUp, setShowSignUp] = useState(true);
  const [verificationSent, setVerificationSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const { name, email, password, password2 } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      try {
        await axios.post("/api/users/admin", {
          name,
          email,
          password
        });
        setVerificationSent(true);
        setAlert("Account created, please verify your email", "success", 10000);
        setFormData({
          ...formData,
          name: "",
          email: "",
          password: "",
          password2: ""
        });
      } catch (err) {
        setAlert("Invalid credentials", "danger");
      }
    }
  };
  return (
    <Fragment>
      {showSignUp === false || verificationSent === true ? (
        <Redirect to="/" />
      ) : (
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
              <span className="mod-header">Create Admin Account</span>
            </Modal.Title>
          </Modal.Header>
          <div className="contact-form fom-mod">
            <form id="contact-form" onSubmit={e => onSubmit(e)}>
              <div>
                <div>
                  <div>
                    <div
                      id="first-mod"
                      className="col-lg-12 col-md-12 col-sm-12 form-group"
                    >
                      <input
                        type="text"
                        onChange={e => onChange(e)}
                        name="name"
                        value={name}
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <input
                        onChange={e => onChange(e)}
                        type="email"
                        value={email}
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <input
                        onChange={e => onChange(e)}
                        value={password}
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <input
                        onChange={e => onChange(e)}
                        type="password"
                        value={password2}
                        name="password2"
                        placeholder="Confirm Password"
                        required
                      />
                    </div>
                    <div
                      id="last-mod"
                      className="col-lg-12 col-md-12 col-sm-12 form-group"
                    >
                      <button type="submit">Register</button>
                    </div>
                    <p className="modal-para">
                      Already have an account?{" "}
                      <Link to="/login">
                        <span className="modal-link">Sign in</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};

RegisterAdmin.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(RegisterAdmin);
