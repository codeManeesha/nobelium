import './Main.css'
import React from "react";

function LeftDiv(props) {
  return (
    <div className="left">
      <img src={props.image} alt="random" />
    </div>
  );
}

export default LeftDiv;
