import React from "react";
import fun from "./background/fun.jpg";
import { useSpring, animated } from "react-spring";

const FactCounter = () => {
  const props1 = useSpring({
    number: 1350,
    from: { number: 0 },
    config: { duration: 60000 }
  });
  const props2 = useSpring({
    number: 1350,
    from: { number: 0 },
    config: { duration: 60000 }
  });
  const props3 = useSpring({
    number: 1226,
    from: { number: 0 },
    config: { duration: 60000 }
  });
  const props4 = useSpring({
    number: 1350,
    from: { number: 0 },
    config: { duration: 50000 }
  });
  return (
    <section
      className="fun-fact-section"
      style={{ backgroundImage: `url(${fun})` }}
    >
      <div className="auto-container">
        <div className="row clearfix">
          <div className="count-box col-lg-3 col-md-6 col-sm-12 counted">
            <div className="inner-box">
              <div className="icon-box">
                <span className="flaticon-worker"></span>
              </div>
              <animated.span className="count-text">
                {props1.number.interpolate(val => Math.floor(val))}
              </animated.span>
              <div className="counter-title">
                <h5>Total experts</h5>
              </div>
            </div>
          </div>
          <div className="count-box col-lg-3 col-md-6 col-sm-12 counted">
            <div className="inner-box">
              <div className="icon-box">
                <span className="flaticon-taxi"></span>
              </div>
              <animated.span className="count-text">
                {props2.number.interpolate(val => Math.floor(val))}
              </animated.span>
              <div className="counter-title">
                <h5>Service done</h5>
              </div>
            </div>
          </div>
          <div className="count-box col-lg-3 col-md-6 col-sm-12 counted">
            <div className="inner-box">
              <div className="icon-box">
                <span className="flaticon-boy-broad-smile"></span>
              </div>
              <animated.span className="count-text">
                {props3.number.interpolate(val => Math.floor(val))}
              </animated.span>
              <div className="counter-title">
                <h5>Happy client</h5>
              </div>
            </div>
          </div>
          <div className="count-box col-lg-3 col-md-6 col-sm-12 counted">
            <div className="inner-box">
              <div className="icon-box">
                <span className="flaticon-car-service"></span>
              </div>
              <animated.span className="count-text">
                {props4.number.interpolate(val => Math.floor(val))}
              </animated.span>
              <div className="counter-title">
                <h5>Total service</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactCounter;
