import React from "react";

const ScrollToTopButton = () => {
  return (
    <div id="myBtn" className="scroll-to-top">
      <span
        className="flaticon-double-up-arrow"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      ></span>
    </div>
  );
};

export default ScrollToTopButton;
