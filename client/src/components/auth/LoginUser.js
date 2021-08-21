import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

const LoginUser = ({ auth: { isAuthenticated }, login }) => {
  const [showSignUp, setShowSignUp] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

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
        <form id="contact-form" onSubmit={e => onSubmit(e)}>
          <div>
            <div>
              <div>
                <div
                  id="first-mod"
                  className="col-lg-12 col-md-12 col-sm-12 form-group"
                >
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
                    type="password"
                    value={password}
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

LoginUser.propTypes = {
  auth: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { login })(LoginUser);
