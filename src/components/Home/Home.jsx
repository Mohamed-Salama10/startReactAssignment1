import React, { Component } from "react";
import "./Home.css";
import Star from "../Star/Star";
import Navbar from "../Navbar/Navbar";
export default class Home extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <div className=" home vh-100 d-flex justify-content-center  align-items-center">
        <div className="w-25 d-flex flex-column text-text-center justify-item-center  align-items-center">
        <img src={require("./Images/avataaars.jpg")} className="img-fluid logoImg  rounded-circle" alt="Logo" />
          <h1 className="mt-3 text-white text-center startReact">Start React</h1>
          <Star color='white'/>
          <p className="mt-4 text-white fs-4">Graphic Artist - Web Designer - Illustrator</p>
            
        </div>
        
      </div>
      </>
    );
  }
}
