import React from "react";
import CardItem from "./CardItem";
import "../components/Cards.css";
import productPg from "./assets/images/project-images/PRODUCTpg.png";
import AA from "./assets/images/project-images/AlcoholicsAnonymous.png";
import FourFour from "./assets/images/project-images/404pg.png";
import LOGIN from "./assets/images/project-images/LOGINpg.png";
import TPG from "./assets/images/project-images/teamProfileGen.png";
import dayPlanner from "./assets/images/project-images/dayPlanner.jpg";
import codingQuiz from "./assets/images/project-images/codingQuiz.jpg";
import passwordGenerator from "./assets/images/project-images/passwordGenerator.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Here are some of my latest projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={productPg}
              text="A product page populated with items from your database!"
              label="E-Commerce | Node.js / Express / MySQL"
              href="https://groupprojectii-app.herokuapp.com/products"
            />
            <CardItem
              src={AA}
              text="A recipe builder for delicious cocktails!"
              label="Server-side | HTML / CSS / API / JavaScript"
              href="https://grdnd.github.io/group-project/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={FourFour}
              text="Every aspect of a website is of importance, even the broken pieces"
              label="404 | HTML / CSS / JavaScript"
              href="https://groupprojectii-app.herokuapp.com/404"
            />
            <CardItem
              src={LOGIN}
              text="Beautiful login pages to authenticate your users"
              label="Authentication | CSS / JS / Node / Handlebars"
              href="https://groupprojectii-app.herokuapp.com/login"
            />
            <CardItem
              src={TPG}
              text="Instantly generate a web page with your Dev team's profile"
              label="Team Management | HTML / CSS / Node / Inquirer"
              href="https://github.com/grdnd/teamProfile-gen"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={dayPlanner}
              text="Stay ahead of your tasks with this Work Day Scheduler"
              label="Scheduling | HTML / CSS / JavaScript"
              href="https://github.com/grdnd/dayPlanner"
            />
            <CardItem
              src={codingQuiz}
              text="Test your coding knowledge with this coding quiz"
              label="Assessment | HTML / CSS / JavaScript"
              href="https://github.com/grdnd/coding-quiz"
            />
            <CardItem
              src={passwordGenerator}
              text="Secure your accounts with this simple Password Generator"
              label="Team Management | HTML / CSS / JavaScript"
              href="https://github.com/grdnd/myPassNow"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
