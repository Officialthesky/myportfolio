import React, { useState } from "react";
import "./index.css";
import { GoMarkGithub } from "react-icons/go";
import { BsYoutube } from "react-icons/bs";
import { data } from "./Data.js";
export default function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projectsHeading">
        <h1>My Work & Portfolio</h1>
        <p>Take a moment to view some of my latest projects. </p>
      </div>
      <div className="projectsShow">
        {data.map((item, index) => {
          return <Project item={item} />;
        })}
      </div>
      <div className="btnClass">
        <a
          href="https://github.com/Officialthesky"
          target="_blank"
          rel="noreferrer"
        >
          Visit Github{" "}
          <GoMarkGithub style={{ width: "20px", height: "20px" }} />
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          Visit Youtube{" "}
          <BsYoutube style={{ color: "red", width: "20px", height: "20px" }} />
        </a>
      </div>
    </div>
  );
}

export function Project({ item }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className="project"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <img src={item.img} alt={item.name} />
      {isShown ? (
        <div className="overlay">
          <p>
            <a href={item.live} target="_blank" rel="noreferrer">
              Live
            </a>
          </p>
          <p>
            <a href={item.video} target="_blank" rel="noreferrer">
              Video
            </a>
          </p>
          <p>
            <a href={item.Github} target="_blank" rel="noreferrer">
              Github
            </a>
          </p>
        </div>
      ) : null}
    </div>
  );
}
