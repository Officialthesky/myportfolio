import React from "react";
import "./index.css";
import { BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FaPodcast } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="icons">
        <div className="socialIcons">
          <a
            href="https://twitter.com/Surajthesky"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <BsTwitter style={{ width: "30px", height: "30px" }} />
          </a>
        </div>
        <div className="socialIcons">
          <a
            href="https://github.com/Officialthesky"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaGithub style={{ width: "30px", height: "30px" }} />
          </a>
        </div>
        <div className="socialIcons">
          <a
            href="https://www.linkedin.com/in/surajthesky/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <AiFillLinkedin style={{ width: "30px", height: "30px" }} />
          </a>
        </div>
        <div className="socialIcons">
          <a
            href="https://open.spotify.com/show/4NR58Gr61Awrn8lu6DsLm3"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaPodcast style={{ width: "30px", height: "30px" }} />
          </a>
        </div>
      </div>

      <div className="footerEndQuote">
        <p>
          Make your life full of colors,and stand up high <br />
          Like rainbow look awesome with their seven colors in the sky <br />
          -Suraj Kumar
        </p>
      </div>
    </footer>
  );
}
