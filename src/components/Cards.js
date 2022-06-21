import React from "react";
import CardItem from "./CardItem";
import "../components/Cards.css";
import FourFour from "./assets/images/project-images/404pg.png";
import AA from "./assets/images/project-images/AlcoholicsAnonymous.png";
import codingQuiz from "./assets/images/project-images/codingQuiz.jpg";
import dayPlanner from "./assets/images/project-images/dayPlanner.jpg";
import Notes from "./assets/images/project-images/expres-note-taker.png";
import portfolio2 from "./assets/images/project-images/gordfolio2-preview.png";
import LOGIN from "./assets/images/project-images/LOGINpg.png";
import BOOKS from "./assets/images/project-images/MERN-book-search-engine.png";
import passwordGenerator from "./assets/images/project-images/passwordGenerator.jpg";
import productPg from "./assets/images/project-images/PRODUCTpg.png";
import JATE from "./assets/images/project-images/pwa-jate.png";
import TPG from "./assets/images/project-images/teamProfileGen.png";

function Cards() {
  return (
    <div className="cards">
      <h1>Here are some of my latest projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={portfolio2}
              text="A fully mobile-responsive portfolio to display your latest projects and to tell your story."
              label="Personal Domain | HTML / CSS / JavaScript"
              href="https://grdnd.github.io/gordfolio2/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={productPg}
              text="A product page populated with items from your database!"
              label="E-Commerce | Node.js / Express / MySQL"
              href="https://groupprojectii-app.herokuapp.com/products"
            />
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
          </ul>
          <ul className="cards__items">
            <CardItem
              src={BOOKS}
              text="A book search engine powered by google books that allows you to personalize your own library!"
              label="Server-side | HTML / CSS / API / JavaScript"
              href="https://mern-bookies.herokuapp.com/"
            />
            <CardItem
              src={JATE}
              text="A text editor that allows users to store and take coding notes, with built in JavaScript formatting and availability offline"
              label="PWA | Node | Express | JavaScript | Babel | Webpack"
              href="https://pwa-just-a-text-editor.herokuapp.com/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={codingQuiz}
              text="Test your coding knowledge with this coding quiz"
              label="Assessment | HTML / CSS / JavaScript"
              href="https://github.com/grdnd/coding-quiz"
            />
            <CardItem
              src={TPG}
              text="Instantly generate a web page with your Dev team's profile"
              label="Team Management | HTML / CSS / Node / Inquirer"
              href="https://github.com/grdnd/teamProfile-gen"
            />
            <CardItem
              src={dayPlanner}
              text="Stay ahead of your tasks with this Work Day Scheduler"
              label="Scheduling | HTML / CSS / JavaScript"
              href="https://github.com/grdnd/dayPlanner"
            />
            <CardItem
              src={passwordGenerator}
              text="Secure your accounts with this simple Password Generator"
              label="Team Management | HTML / CSS / JavaScript"
              href="https://github.com/grdnd/myPassNow"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={AA}
              text="A recipe builder for delicious cocktails!"
              label="Server-side | HTML / CSS / API / JavaScript"
              href="https://grdnd.github.io/group-project/"
            />
            <CardItem
              src={Notes}
              text="Save important reminders to your local storage for future access!"
              label="Note Taker | JavaScript | Node | Express | UUID | REST

              "
              href="https://note-taker-expr.herokuapp.com/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
