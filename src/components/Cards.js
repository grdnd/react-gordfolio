import CardItem from "./CardItem";
import "../components/Cards.css";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="cards">
      <h1>Here are some of my latest projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/project-images/PRODUCTpg.png"
              text="A product page populated with items from your database!"
              label="E-Commerce | Node.js / Express / MySQL"
              path="/resume"
            />
            <CardItem
              src="/images/project-images/AlcoholicsAnonymous.png"
              text="A recipe builder for delicious cocktails!"
              label="Server-side | HTML / CSS / API / JavaScript"
              path="/resume"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images/project-images/404pg.png"
              text="Every aspect of a website is of importance, even the broken pieces"
              label="404 | HTML / CSS / JavaScript"
              path="/resume"
            />
            <CardItem
              src="/images/project-images/LOGINpg.png"
              text="Beautiful login pages to authenticate your users"
              label="Authentication | HTML / CSS / JS / Node / Handlebars"
              path="/resume"
            />
            <CardItem
              src="/images/project-images/teamProfileGen.png"
              text="Instantly generate a web page with your Dev team's profile"
              label="Team Management | HTML / CSS / Node / Inquirer"
              path="/resume"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images/project-images/dayPlanner.jpg"
              text="Stay ahead of your tasks with this Work Day Scheduler"
              label="404 | HTML / CSS / JavaScript"
              path="/resume"
            />
            <CardItem
              src="/images/project-images/codingQuiz.jpg"
              text="Test your coding knowledge with this this coding quiz"
              label="Assessment | HTML / CSS / JavaScript"
              path="/resume"
            />
            <CardItem
              src="/images/project-images/passwordGenerator.jpg"
              text="Secure your accounts with this simple Password Generator"
              label="Team Management | HTML / CSS / JavaScript"
              path="/resume"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
