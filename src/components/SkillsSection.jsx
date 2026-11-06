import React from "react";
import "./SkillsSection.css";

const technicalSkills = [
  ["Java", 80],
  ["JavaScript", 85],
  ["React.js", 85],
  ["Node.js & Express.js", 75],
  ["MongoDB", 75],
  ["MySQL", 80],
  ["Spring Boot", 65],
  ["React Native & Firebase", 70],
];

const softSkills = [
  "Problem Solving",
  "Communication",
  "Teamwork",
  "Adaptability",
  "Critical Thinking",
  "Quick Learning",
];

export default function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-wrap">

        <div className="section-heading reveal">
          <span className="eyebrow">03 / MY CAPABILITIES</span>
          <h2>Skills & <em>strengths.</em></h2>
        </div>

        <div className="skills-layout">

          <div className="technical-skills reveal">
            <h3>Technical Skills</h3>

            {technicalSkills.map(([name, value]) => (
              <div className="skill-item" key={name}>
                <div className="skill-label">
                  <span>{name}</span>
                </div>

                <div className="skill-track">
                  <div
                    className="skill-progress"
                    style={{ "--skill-width": `${value}%` }}
                  />
                </div>
              </div>
            ))}

            <p className="skill-disclaimer">
              Bars are visual self-assessments, not test scores.
            </p>
          </div>

          <div className="soft-skills reveal reveal-delay-2">
            <h3>Professional Strengths</h3>

            <div className="soft-skill-list">
              {softSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
