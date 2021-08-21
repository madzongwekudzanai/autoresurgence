import React, { useEffect, useState, Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import logo from "./coverimage/logo-auto-reg.png";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

const Header = ({ history, logout, auth: { isAuthenticated, loading } }) => {
  const [expandNav, setExpandNav] = useState(false);
  const toggleNavbar = () => {
    setExpandNav(!expandNav);
  };
  const [activeLink, setActiveLink] = useState(window.location.pathname);
  useEffect(() => {
    history.listen((location, action) => {
      // location is an object like window.location
      setActiveLink(`${location.pathname}`);
    });
  }, [history]);
  return (
    <Navbar
      collapseOnSelect={true}
      onToggle={toggleNavbar}
      expand="lg"
      expanded={expandNav}
      sticky="top"
    >
      <Link to="/">
        <Navbar.Brand>
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="Auto Resurgence logo"
          />
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Link
            onClick={toggleNavbar}
            className={`sticky-header ${activeLink === "/" ? "active" : null}`}
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={toggleNavbar}
            className={`sticky-header ${
              activeLink === "/about" ? "active" : null
            }`}
            to="/about"
          >
            About Us
          </Link>
          <Link
            onClick={toggleNavbar}
            className={`sticky-header ${
              activeLink === "/service" ? "active" : null
            }`}
            to="/service"
          >
            Our Service
          </Link>
          <Link
            onClick={toggleNavbar}
            className={`sticky-header ${
              activeLink === "/blog" ? "active" : null
            }`}
            to="/blog"
          >
            News & Updates
          </Link>
          <Link
            onClick={toggleNavbar}
            className={`sticky-header ${
              activeLink === "/contact" ? "active" : null
            }`}
            to="/contact"
          >
            Contact Us
          </Link>
          {!loading && (
            <Fragment>
              {isAuthenticated ? (
                <Link
                  onClick={() => {
                    logout();
                  }}
                  className="sticky-header"
                >
                  Log Out
                </Link>
              ) : (
                <Link
                  onClick={toggleNavbar}
                  to="/register"
                  className={`sticky-header ${
                    activeLink === "/register" ||
                    activeLink === "/login" ||
                    activeLink === "/reset"
                      ? "active"
                      : null
                  }`}
                >
                  Sign Up
                </Link>
              )}
            </Fragment>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { logout })(withRouter(Header));
