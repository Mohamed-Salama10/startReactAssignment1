import React, { Component } from "react";
import "./About.css";
import Star from "../Star/Star";
import Navbar from "../Navbar/Navbar";
export default class About extends Component {
  render() {
    return (
      <>
      <Navbar/>
        <div className="py-5 vh-100" id="AboutSection">
          <h2 className="text-center text-white">About</h2>
          <Star />

          <div className="container-fluid w-50  mt-5">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div>
                  <p className="fs-5 w-75 text-white p-4">
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-sm-12">
                <div className="text-center">
                  <p className="fs-5 w-75 text-white p-4 ">
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
