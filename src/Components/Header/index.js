import React from "react";
import "./index.css";
import { Link } from "react-scroll";
export default function Header() {
  return (
    <header>
      <div className="heading">
        <h1>Suraj Kumar</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link activeClass="active" to="home" spy={true} smooth={true}>
              Home
            </Link>
          </li>

          <li>
            <Link activeClass="active" to="about" spy={true} smooth={true}>
              About
            </Link>{" "}
          </li>
          <li>
            <Link activeClass="active" to="skills" spy={true} smooth={true}>
              Skills
            </Link>{" "}
          </li>
          <li>
            <Link activeClass="active" to="projects" spy={true} smooth={true}>
              Projects
            </Link>{" "}
          </li>
          <li>
            <Link activeClass="active" to="contact" spy={true} smooth={true}>
              Contact
            </Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}
