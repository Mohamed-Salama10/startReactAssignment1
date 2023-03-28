import React, { Component } from "react";
import "./Star.css";
export default class Star extends Component {
  render() {
    return (
      <div className="d-flex w-75 justify-content-center align-items-center mt-3 m-auto ">
        <div className="hr-line me-3 "></div>

        <i className="fa-solid fa-star fa-2x star "></i>
        <div className="hr-line ms-3 "></div>
      </div>
    );
  }
}
/*
function toogleColor(color) {
    let hrLine = document.querySelectorAll(".hr-line");
    if (color =='white') {
      hrLine.classList.add("text-white")
    }
    
  }
 */
