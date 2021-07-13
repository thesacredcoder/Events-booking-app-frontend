import React from "react";

import "./BookingControl.css";

function BookingControl(props) {
  return (
    <div className="booking-control">
      <button
        className={props.active === "list" ? "active" : ""}
        onClick={props.onChange.bind(this, "list")}
      >
        List
      </button>
      <button
        className={props.active === "chart" ? "active" : ""}
        onClick={props.onChange.bind(this, "chart")}
      >
        Chart
      </button>
    </div>
  );
}

export default BookingControl;
