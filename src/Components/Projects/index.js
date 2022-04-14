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
          <img src="../youtubeimg.png" />
        </div>
        <div className="project">
          <img src="../Notionclone.png" />
        </div>
        <div className="project">
          <img src="../Hubhopper.png" />
        </div>
      </div>
      <div className="projectsShow">
        <div className="project">
          <img src="../scorekeeper.png" />
        </div>
        <div className="project">
          <img src="../Newsverse.png" />
        </div>
        <div className="project">
          <img src="../Quizap.png" />
        </div>
      </div>
      <div className="btnClass">
        <button>
          Visit Github{" "}
          <GoMarkGithub style={{ width: "20px", height: "20px" }} />
        </button>
        <button>
          Visit Youtube{" "}
          <BsYoutube style={{ color: "red", width: "20px", height: "20px" }} />
        </button>
      </div>
    </div>
  );
}
