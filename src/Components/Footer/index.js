import React from "react";
import "./index.css";
import { BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FaPodcast } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="icons">
        <div className="socialIcons">
          <BsTwitter style={{ width: "30px", height: "30px" }} />
        </div>
        <div className="socialIcons">
          <FaGithub style={{ width: "30px", height: "30px" }} />
        </div>
        <div className="socialIcons">
          <AiFillLinkedin style={{ width: "30px", height: "30px" }} />
        </div>
        <div className="socialIcons">
          <FaPodcast style={{ width: "30px", height: "30px" }} />
        </div>
      </div>

      <div>
        <p>Suraj Kumar</p>
      </div>
    </footer>
  );
}
