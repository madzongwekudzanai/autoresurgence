import React from "react";
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";

const Alerts = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <Alert
      style={{
        position: "fixed",
        bottom: "20px",
        left: "15px",
        zIndex: "100"
      }}
      key={alert.id}
      variant={alert.alertType}
    >
      {alert.msg}
    </Alert>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alerts);
