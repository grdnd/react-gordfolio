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
      </div>
    </>
  );
}
