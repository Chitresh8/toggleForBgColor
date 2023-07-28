import React, { Fragment, useState } from "react";
import "./Toggle.css";

export const Toggle = () => {
  const [backgroundColor, setBackgroundColor] = useState(false);

  const toggleBackgroundColor = () => {
    setBackgroundColor(!backgroundColor);
  };

  const toggleBackGroundColor = {
    backgroundColor: backgroundColor ? "black" : "white",
    color: backgroundColor ? "white" : "black",
    textAlign: "center",
    border: backgroundColor ? "10px solid cyan" : "none",
    borderRadius: backgroundColor ? "5px" : "none",
    height: "111px",
    paddingBottom: backgroundColor ? "5px" : "5px",
  };

  return (
    <Fragment>
      <div className="toggleSection">
        <div style={toggleBackGroundColor}>
          <h3>Toggle Background Color</h3>
          <button
            className="styleBtn"
            onClick={toggleBackgroundColor}
          >
            Click
          </button>
        </div>
      </div>
    </Fragment>
  );
};
