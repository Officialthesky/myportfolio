import React from "react";
import "./index.css";

export default function Header() {
  return (
    <header>
      <div className="heading">
        <h1>Suraj Kumar</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Skills</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
