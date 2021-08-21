import React, { Fragment } from "react";
import Slider from "./Slider";
import CallToAction from "./CallToAction";
import AboutUs from "./AboutUs";
import FactCounter from "./FactCounter";
import ServiceSection from "./ServiceSection";
import ContactUsSection from "./ContactUsSection";

const Landing = () => {
  return (
    <Fragment>
      <Slider />
      <CallToAction />
      <AboutUs />
      <FactCounter />
      <ServiceSection />
      <ContactUsSection />
    </Fragment>
  );
};

export default Landing;
