import React from "react";
import "../../App.css";
import BioCard from "../BioCard";

export default function AboutMe() {
  return (
    <>
      <div className="about-me mt-0">
        <h1 className="title mt-0 mb-0" id="abt-me">
          About Me
        </h1>
      </div>
      <BioCard />
      <div className="about-me-text-container is-flex is-justify-content-center is-align-items-center mt-0 mb-0">
        <div className="about-me-text-wrapper is-flex is-justify-content-center is-align-items-center">
          <div className="about-me-text-box">
            <div className="about-me-text-title-container">
              <h1>Expression Over Impression</h1>
            </div>
            <div className="about-me-text-content">
              <p>
                I am an aspiring web developer based in Los Angeles and Orange
                County, California.
                <br></br>
                <br></br>Throughout my lifetime I have been infatuated with art
                of all forms, and have seen firsthand the many ways
                self-expression propels individuals to become the greatest
                versions of themselves. Throughout my time as a web developer,
                <br></br>
                <span className="is-flex is-justify-content-center is-align-items-center">
                  I wish to accomplish my dream of helping creators bring their
                  visions come to life.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
