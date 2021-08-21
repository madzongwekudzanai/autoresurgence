import React, { Fragment } from "react";
import AboutUs from "../layout/AboutUs";
import FactCounter from "../layout/FactCounter";
import CallToAction from "../layout/CallToAction";

const About = () => {
  return (
    <Fragment>
      <AboutUs />
      <FactCounter />
      <CallToAction />
    </Fragment>
  );
};

export default About;
