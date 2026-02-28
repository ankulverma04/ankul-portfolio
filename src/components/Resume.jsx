import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">

        <div className="resume-card">

          {/* Header */}
          <div className="text-center mb-4">
            <h2 className="resume-name">Ankul Verma</h2>
            <p className="resume-title">Full Stack Developer</p>
            <p className="resume-contact">
              Lucknow, India | 8081883230 <br />
              ankulvofficial@gmail.com
            </p>
          </div>

          <hr />

          <div className="row">

            {/* LEFT COLUMN */}
            <div className="col-md-6">
              <h5>Professional Summary</h5>
              <p>
                Full Stack MERN Developer with 7 months of apprenticeship experience.
                Skilled in React, Node.js, Express, MongoDB and API-driven apps.
              </p>

              <h5 className="mt-4">Technical Skills</h5>
              <ul>
                <li>JavaScript, HTML, CSS</li>
                <li>React, Bootstrap, Tailwind</li>
                <li>Node.js, Express.js</li>
                <li>MongoDB</li>
                <li>Git & GitHub</li>
              </ul>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-md-6">
              <h5>Work Experience</h5>
              <p>
                <strong>Techpile Technology Pvt. Ltd.</strong><br />
                Full Stack MERN Developer
              </p>
              <ul>
                <li>Built React components</li>
                <li>Created REST APIs</li>
                <li>MongoDB CRUD operations</li>
              </ul>

              <h5 className="mt-4">Education</h5>
              <p>
                B.Tech CSE (DS + AI) – 2022–2025<br />
                Diploma CSE – 2019–2022
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Resume;