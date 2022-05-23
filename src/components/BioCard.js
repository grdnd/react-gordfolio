import React from "react";
import "./BioCard.css";
import BioCardItem from "./BioCardItem";
import picture from "./assets/images/pfp.JPG";

function BioCard() {
  return (
    <div className="bio__cards">
      <div className="bio__cards__container is-flex is-justify-content-center is-align-items-center is-flex-direction-column">
        <div className="bio__cards__wrapper">
          <ul className="bio__cards__items">
            <BioCardItem
              src={picture}
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
