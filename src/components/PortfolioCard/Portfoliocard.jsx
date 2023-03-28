import React, { Component } from "react";
import "./Portfoliocard.css";
import $ from "jquery/dist/jquery.min.js";
import { PortfolioModal } from "../PortfolioModal/PortfolioModal";
import { click } from "@testing-library/user-event/dist/click";

export default class Portfoliocard extends Component {
  render() {
    return (
      <>
        <div className="col-lg-4 col-md-6 col-sm-12 g-5">
          <div className="cardImg position-relative">
            <div className="overlayLayer position-absolute h-100 w-100  rounded-4 d-flex justify-content-center align-items-center cardsOverLay">
              <PortfolioModal imgSrc={this.props.image} />
            </div>
            <img
              src={this.props.image}
              alt=""
              className="img-fluid rounded-4"
            />
          </div>
        </div>
      </>
    );
  }
}
