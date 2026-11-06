import React from "react";
import "./ExperienceSection.css";

const experience = [
  {
    date: "AUGUST 2026 – OCTOBER 2026",
    title: "Full Stack Developer (Probationary)",
    company: "ProJenius Innovation Technology Pvt. Ltd.",
    location: "Madurai, Tamil Nadu",
    description:
      "Contributed to MERN stack web application development, responsive React components, backend APIs, MongoDB operations and company website projects.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Git"],
  },
  {
    date: "JUNE 2025 – NOVEMBER 2025",
    title: "Java Full Stack Development",
    company: "SLA Institute",
    location: "Chennai, Tamil Nadu",
    description:
      "Completed structured Java Full Stack training covering Java, Spring Boot, REST APIs, HTML, CSS and MySQL.",
    technologies: ["Java", "Spring Boot", "MySQL", "REST APIs"],
  },
  {
    date: "AUGUST 2022 – SEPTEMBER 2022",
    title: "Web Development Intern",
    company: "MAT-G TECH",
    location: "Hosur, Tamil Nadu",
    description:
      "Completed a virtual internship focused on web development and product-development activities.",
    technologies: ["Web Development"],
  },
];

export default function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-wrap">

        <div className="section-heading reveal">
          <span className="eyebrow">06 / EXPERIENCE</span>
          <h2>My professional <em>journey.</em></h2>
        </div>

        <div className="experience-timeline">
          {experience.map((item, index) => (
            <article
              className={`experience-item reveal reveal-delay-${(index % 3) + 1}`}
              key={item.title}
            >
              <div className="experience-marker" />

              <div className="experience-content">
                <span className="experience-date">{item.date}</span>
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                <span className="experience-location">{item.location}</span>
                <p>{item.description}</p>

                <div className="experience-tags">
                  {item.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
