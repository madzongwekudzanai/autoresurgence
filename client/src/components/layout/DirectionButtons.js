import React, { Fragment } from "react";

const DirectionButtons = () => {
  return (
    <Fragment>
      <div className="scroll-to-top direction-btn" id="backBtn">
        <span className="flaticon-back"></span>
      </div>
      <div className="scroll-to-top direction-btn" id="nextBtn">
        <span className="flaticon-next"></span>
      </div>
    </Fragment>
  );
};

export default DirectionButtons;
