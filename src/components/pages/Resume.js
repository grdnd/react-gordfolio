import React from "react";
import "../../App.css";

export default function Resume() {
  return (
    <>
      <div className="resume mb-0 mt-0">
        <h1 className="title">Resume</h1>
        <div className="container">
          <div className="columns is-desktop is-centered">
            <div className="column is-half mt-0 is-flex is-justify-content-center is-flex-direction-column is-align-items-center">
              <ul className="skills is-flex is-flex-direction-column is-justify-content-center">
                <li>
                  <h2>&#125; Front-end Proficiencies &#123;</h2>
                </li>
                {/* <hr /> */}
                <li className="skill-icon is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-html5-plain mobile-icon" />
                  <p>HTML</p>
                </li>
                <li className="skill-icon is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-css3-plain mobile-icon" />
                  <p>CSS</p>
                </li>
                <li className="skill-icon is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-javascript-plain mobile-icon" />
                  <p>JavaScript</p>
                </li>
                <li className="skill-icon is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-jquery-plain mobile-icon" />
                  <p>jquery</p>
                </li>
                <li className="skill-icon is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-react-original mobile-icon" />
                  <p>React</p>
                </li>
                <li className="skill-icon is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-bootstrap-plain mobile-icon" />
                  <p>bootstrap</p>
                </li>
                <li className="skill-icon is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-bulma-plain mobile-icon" />
                  <p>Bulma</p>
                </li>
                <li className="skill-icon">Responsive Design</li>
              </ul>
            </div>
            <aside className="divider-container is-flex is-justify-content-center">
              <hr className="hidden divider" />
            </aside>
            <div className="column is-half mt-0 is-flex is-flex-direction-column is-align-items-center">
              <ul className="skills">
                <li>
                  <h2 className="backend">
                    &#123; Back-end Proficiencies &#125;
                  </h2>
                </li>
                {/* <hr /> */}
                <li className="skill-icon is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-nodejs-plain mobile-icon" />
                  <p>Node.js</p>
                </li>
                <li className="skill-icon is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-express-original mobile-icon" />
                  <p>express</p>
                </li>
                <li className="skill-icon is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-sequelize-plain mobile-icon" />
                  <p>Sequelize</p>
                </li>
                <li className="skill-icon is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-mysql-plain mobile-icon" />
                  <p>MySQL</p>
                </li>
                <li className="skill-icon is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-mongodb-plain mobile-icon" />
                  <p>MongoDB</p>
                </li>
                <li className="skill-icon is-flex is-align-items-center is-flex-direction-column">
                  <i className="devicon-graphql-plain mobile-icon" />
                  <p>GraphQL</p>
                </li>
                <li className="skill-icon">Mongoose</li>
                <li className="skill-icon">REST</li>
                <li className="skill-icon">APIs</li>
              </ul>
            </div>
          </div>
          <div className="is-flex is-justify-content-center is-align-items-center">
            <h1 className="find-me">
              I am now on{" "}
              <a href="https://www.linkedin.com/in/gord-folio/">LinkedIn</a>!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
