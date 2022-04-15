import React from "react";
import "./index.css";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skillsHeading">
        <h1>Skills</h1>
      </div>
      <div className="skillsProgress">
        <div className="skillsProgressInner">
          <div className="skillsProgressInnerText">
            <h5>HTML</h5>
            <p>80%</p>
          </div>
          <progress id="file" value="80" max="100">
            {" "}
            80%{" "}
          </progress>
        </div>
        <div className="skillsProgressInner">
          <div className="skillsProgressInnerText">
            <h5>CSS</h5>
            <p>70%</p>
          </div>
          <progress id="file" value="70" max="100">
            {" "}
            70%{" "}
          </progress>
        </div>
        <div className="skillsProgressInner">
          <div className="skillsProgressInnerText">
            <h5>JAVASCRIPT</h5>
            <p>50%</p>
          </div>
          <progress id="file" value="50" max="100">
            {" "}
            50%{" "}
          </progress>
        </div>
        <div className="skillsProgressInner">
          <div className="skillsProgressInnerText">
            <h5>REACT</h5>
            <p>60%</p>
          </div>
          <progress id="file" value="60" max="100">
            {" "}
            60%{" "}
          </progress>
        </div>
      </div>
    </div>
  );
}
