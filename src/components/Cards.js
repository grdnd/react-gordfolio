import React from "react";
import CardItem from "./CardItem";
import "../components/Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Here are some of my latest projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="../../public/images"
              text="A product page populated with items from your database!"
              label="E-Commerce | Node.js / Express / MySQL"
              href="https://groupprojectii-app.herokuapp.com/products"
            />
            <CardItem
              src="/images/project-images/AlcoholicsAnonymous.png"
              text="A recipe builder for delicious cocktails!"
              label="Server-side | HTML / CSS / API / JavaScript"
              href="https://grdnd.github.io/group-project/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images/project-images/404pg.png"
              text="Every aspect of a website is of importance, even the broken pieces"
              label="404 | HTML / CSS / JavaScript"
              href="https://groupprojectii-app.herokuapp.com/404"
            />
            <CardItem
              src="/images/project-images/LOGINpg.png"
              text="Beautiful login pages to authenticate your users"
              label="Authentication | CSS / JS / Node / Handlebars"
              href="https://groupprojectii-app.herokuapp.com/login"
            />
            <CardItem
              src="/images/project-images/teamProfileGen.png"
              text="Instantly generate a web page with your Dev team's profile"
              label="Team Management | HTML / CSS / Node / Inquirer"
              href="https://github.com/grdnd/teamProfile-gen"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images/project-images/dayPlanner.jpg"
              text="Stay ahead of your tasks with this Work Day Scheduler"
              label="Scheduling | HTML / CSS / JavaScript"
              href="https://github.com/grdnd/dayPlanner"
            />
            <CardItem
              src="/images/project-images/codingQuiz.jpg"
              text="Test your coding knowledge with this coding quiz"
              label="Assessment | HTML / CSS / JavaScript"
              href="https://github.com/grdnd/coding-quiz"
            />
            <CardItem
              src="/images/project-images/passwordGenerator.jpg"
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
