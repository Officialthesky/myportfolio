import React from "react";
import "./index.css";
import { Link } from "react-scroll";

export default function About() {
  return (
    <div className="About" id="about">
      <div className="left">
        <h1>Hey There, I'm </h1>
        <h1>Suraj Kumar</h1>
        <p>
          I love writing code , reading books and listening smart podcasts.
          Exploring and learning something new everyday.
        </p>
        <button className="hiremeBtn">
          <Link activeClass="active" to="contact" spy={true} smooth={true}>
            Hire me
          </Link>{" "}
        </button>
      </div>
      <div className="right">
        <div className="aboutImage">
          <img src=""></img>
        </div>
      </div>
    </div>
  );
}
