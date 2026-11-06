
import React from "react";
import "./TechnologiesSection.css";

const technologyGroups = [
  {
    category: "Frontend Development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Bootstrap",
      "Responsive Design",
    ],
  },
  {
    category: "Backend Development",
    items: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JDBC",
    ],
  },
  {
    category: "Database Management",
    items: [
      "MySQL",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Eclipse",
      "Postman",
      "MySQL Workbench",
    ],
  },
  {
    category: "Mobile & IoT",
    items: [
      "React Native",
      "Firebase Realtime Database",
      "Python",
      "OpenCV",
    ],
  },
];

export default function TechnologiesSection() {
  return (
    <section className="technologies-section" id="technologies">
      <div className="section-wrap">

        <div className="section-heading reveal">
          <span className="eyebrow">02 / TECHNOLOGY STACK</span>

          <h2>
            Technologies I <em>work with.</em>
          </h2>

          <p className="section-sub">
            Technologies and development tools I use
            to build web and mobile applications.
          </p>
        </div>

        <div className="technology-groups">
          {technologyGroups.map((group, index) => (
            <div
              className={`technology-group reveal reveal-delay-${(index % 3) + 1}`}
              key={group.category}
            >
              <h3>{group.category}</h3>

              <div className="technology-list">
                {group.items.map((item) => (
                  <span className="technology-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
