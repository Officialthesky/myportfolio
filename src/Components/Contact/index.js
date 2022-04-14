import React from "react";
import "./index.css";
import { BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contactHeader">
        <div>
          <h1>Contact Me Here</h1>
        </div>
        <div className="contactPara">
          <p>
            I'm happy to answer any question you have or provide an estimate.
            Just send me a message in the form below with any questions you may
            have.
          </p>
        </div>
      </div>

      <div className="contactMedium">
        <div className="contactMediumInfo">
          <BiPhoneCall style={{ width: "50px", height: "30px" }} />
          <h2>Phone</h2>
          <p>Let's have a call</p>
          <h6>
            <a href="tel:+4733378901">8840957568</a>
          </h6>
        </div>
        <div className="contactMediumInfo">
          <MdEmail style={{ width: "50px", height: "30px" }} />
          <h2>Email</h2>
          <p>Drop me a mail</p>
          <h6>
            <a href="mailto:surajkumaryadavvvv@gmail.com">
              surajkumaryadavvvv@gmail.com
            </a>
          </h6>
        </div>
        <div className="contactMediumInfo">
          <SiLinkedin style={{ width: "50px", height: "30px" }} />
          <h2>Linkedin</h2>
          <p>Let's connect here</p>
          <h6>
            <a href="https://www.linkedin.com/in/surajthesky/" target="_blank">
              /surajthesky
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
}
