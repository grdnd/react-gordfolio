import React from "react";
import "../../App.css";

export default function Resume() {
  return (
    <>
      <div className="resume mb-0">
        <h1 className="title">Resume</h1>
        <div className="container">
          <div className="columns is-desktop is-centered">
            <div className="column is-half mt-0 is-flex is-flex-direction-column is-align-items-center">
              <ul className="skills is-flex is-flex-direction-column is-justify-content-center">
                <li>
                  <h2>&#125; Front-end Proficiencies &#123;</h2>
                </li>
                {/* <hr /> */}
                <li className="is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-html5-plain mobile-icon" />
                  <p>HTML</p>
                </li>
                <li className="is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-css3-plain mobile-icon" />
                  <p>CSS</p>
                </li>
                <li className="is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-javascript-plain mobile-icon" />
                  <p>JavaScript</p>
                </li>
                <li className="is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-jquery-plain mobile-icon" />
                  <p>jquery</p>
                </li>
                <li className="is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-react-original mobile-icon" />
                  <p>React</p>
                </li>
                <li className="is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-bootstrap-plain mobile-icon" />
                  <p>bootstrap</p>
                </li>
                <li className="is-flex is-align-items-center is-flex-direction-column">
                  <i class="devicon-bulma-plain mobile-icon" />
                  <p>Bulma</p>
                </li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="column is-half mt-0 is-flex is-flex-direction-column is-align-items-center">
              <ul className="skills">
                <li>
                  <h2>&#123; Back-end Proficiencies &#125;</h2>
                </li>
                {/* <hr /> */}
                <li className="is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-nodejs-plain mobile-icon" />
                  <p>Node.js</p>
                </li>
                <li className="is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-express-original mobile-icon" />
                  <p>express</p>
                </li>
                <li className="is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-sequelize-plain mobile-icon" />
                  <p>Sequelize</p>
                </li>
                <li className="is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-mysql-plain mobile-icon" />
                  <p>MySQL</p>
                </li>
                <li className="is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-mongodb-plain mobile-icon" />
                  <p>MongoDB</p>
                </li>
                <li className="is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-graphql-plain mobile-icon" />
                  <p>GraphQL</p>
                </li>
                <li>Mongoose</li>
                <li>REST</li>
                <li>APIs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
