import React from "react";
import './Main.css'

function RightDiv(props) {
  return (
    <div className="right">
      <button className="btn"onClick={props.onClick}>{props.text}</button>
    </div>
  );
}

export default RightDiv;

