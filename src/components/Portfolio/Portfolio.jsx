import React, { Component } from "react";
import "./Portfolio.css";
import Star from "../Star/Star";
import Portfoliocard from "../PortfolioCard/Portfoliocard";
import cabin from "../Portfolio/Images/cabin.png";
import cake from "../Portfolio/Images/cake.png";
import circus from "../Portfolio/Images/circus.png";
import game from "../Portfolio/Images/game.png";
import safe from "../Portfolio/Images/safe.png";
import submarine from "../Portfolio/Images/submarine.png";
import { PortfolioModal } from "../PortfolioModal/PortfolioModal";
import Navbar from "../Navbar/Navbar";
let imageArrays = [cabin, cake, circus, game, safe, submarine];

export default class Portfolio extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <div className="py-5">
          <h2 className="text-center">PORTFOLIO</h2>
          <Star />
          <div className="container w-55  m-auto ">
            <div className="row">
              {imageArrays.map(function (element, idx) {
                return <Portfoliocard key={idx} image={element} />;
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
