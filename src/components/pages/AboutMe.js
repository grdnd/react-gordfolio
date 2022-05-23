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
        <BioCard />
        <div className="about-me-text-container is-flex is-justify-content-center is-align-items-center mt-0 mb-0">
          <div className="about-me-text-title-container is-flex">
            <span>Expression</span>
            <span>over</span>
            <span>Impression</span>
          </div>
          <div className="about-me-text-wrapper mt-0">
            <div className="about-me-text-box">
              <div className="about-me-text-content">
                <p className="fade">
                  For as long as I can remember, I have been infatuated with art
                  of all forms, and have seen firsthand the many ways
                  self-expression propels individuals to become the greatest
                  versions of themselves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
