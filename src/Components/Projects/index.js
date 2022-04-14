import React from "react";
import "./index.css";
import { GoMarkGithub } from "react-icons/go";
import { BsYoutube } from "react-icons/bs";

export default function Projects() {
  return (
    <div className="projects">
      <div className="projectsHeading">
        <h1>My Work & Portfolio</h1>
        <p>Take a moment to view some of my latest projects. </p>
      </div>
      <div className="projectsShow">
        <div className="project">
          <img src="../youtubeimg.png" alt="youtube" />
        </div>
        <div className="project">
          <img src="../Notionclone.png" alt="notion" />
        </div>
        <div className="project">
          <img src="../Hubhopper.png" alt="hubhopper" />
        </div>
      </div>
      <div className="projectsShow">
        <div className="project">
          <img src="../scorekeeper.png" alt="scorekeeper" />
        </div>
        <div className="project">
          <img src="../Newsverse.png" alt="newsapi" />
        </div>
        <div className="project">
          <img src="../Quizap.png" alt="quizapp" />
        </div>
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
