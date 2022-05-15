import React from "react";
import CardItem from "./CardItem";
import "./BioCard.css";

function BioCard() {
  return (
    <div className="bio__cards">
      <div className="bio__cards__container">
        <div className="bio__cards__wrapper">
          <ul className="bio__cards__items">
            <CardItem
              src="/images/pfp.JPG"
              text="My name is Gordon Do"
              label="Web Development Student"
              path="/portfolio"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BioCard;
