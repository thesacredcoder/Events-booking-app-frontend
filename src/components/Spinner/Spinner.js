import React from "react";
import "./Spinner.css";

function Spinner(props) {
  return (
    <div className="spinner">
      <div className="lds-dual-ring"></div>;
    </div>
  );
}

export default Spinner;
