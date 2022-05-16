import React from "react";
import "./BioCard.css";
import BioCardItem from "./BioCardItem";

function BioCard() {
  return (
    <div className="bio__cards">
      <div className="bio__cards__container">
        <div className="bio__cards__wrapper">
          <ul className="bio__cards__items">
            <BioCardItem
              src="/images/pfp.JPG"
              text="Hi, my name is Gordon. Click here to view my work!"
              label="Web Developer"
              path="/portfolio"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BioCard;
