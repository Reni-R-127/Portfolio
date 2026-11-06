
import React, { useRef } from "react";

import {
  Code2,
  Database,
  Smartphone,
  BookOpen,
  Plane,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import "./ProjectsSection.css";

const projects = [
  {
    number: "01",
    title: "IoT Website & Admin Dashboard",
    type: "Professional Project",
    stack: "React.js · Node.js · Express.js · MongoDB",
    description:
      "Contributed to a responsive IoT learning platform and administration system with dynamic content management.",
    icon: <Code2 />,
    features: [
      "Responsive website development",
      "Course, blog and pricing management",
      "Admin and staff functionality",
      "REST API integration",
    ],
  },
  {
    number: "02",
    title: "3D Printing Website & Admin Dashboard",
    type: "Professional Project",
    stack: "React.js · Node.js · Express.js · MongoDB",
    description:
      "Contributed to a business website and admin platform for 3D printing services and product management.",
    icon: <Database />,
    features: [
      "Responsive frontend development",
      "Product management",
      "Backend API integration",
      "Cart and order workflows",
    ],
  },
  {
    number: "03",
    title: "Back Posture Monitoring App",
    type: "IoT & Mobile Application",
    stack: "React Native · Firebase · IoT",
    description:
      "A mobile application connected to a hardware posture-monitoring belt to monitor sitting posture.",
    icon: <Smartphone />,
    features: [
      "Live posture status dashboard",
      "Firebase data synchronization",
      "Posture angle graphs",
      "History and alert tracking",
    ],
  },
  {
    number: "04",
    title: "Book Store Management Application",
    type: "Academic Project",
    stack: "Java · Spring Boot · MySQL · HTML · CSS",
    description:
      "A book management application developed using Spring Boot and MVC architecture with database integration.",
    icon: <BookOpen />,
    features: [
      "CRUD operations",
      "REST API development",
      "MySQL database connectivity",
      "HTML and CSS frontend",
    ],
  },
  {
    number: "05",
    title: "Airline Reservation System",
    type: "Academic Project",
    stack: "Java · OOP · Eclipse IDE",
    description:
      "A Java-based flight reservation application designed using object-oriented programming principles.",
    icon: <Plane />,
    features: [
      "Flight booking functionality",
      "Object-oriented design",
      "Encapsulation and inheritance",
      "Modular class structure",
    ],
  },
];

export default function ProjectsSection() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction * 370,
      behavior: "smooth",
    });
  };

  return (
    <section className="projects-section" id="projects">
      <div className="section-wrap">

        <div className="projects-heading reveal">
          <div>
            <span className="eyebrow">
              04 / SELECTED WORK
            </span>

            <h2>
              Projects with <em>purpose.</em>
            </h2>

            <p className="section-sub">
              A selection of professional and academic
              projects demonstrating my development experience.
            </p>
          </div>

          <div className="project-controls">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous projects"
            >
              <ArrowLeft />
            </button>

            <button
              onClick={() => scroll(1)}
              aria-label="Next projects"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="projects-slider" ref={sliderRef}>
          {projects.map((project) => (
            <article
              className="project-slide"
              key={project.number}
            >
              <div className="project-slide-top">
                <span>{project.number}</span>
                <div>{project.icon}</div>
              </div>

              <span className="project-type">
                {project.type}
              </span>

              <h3>{project.title}</h3>

              <p className="project-stack">
                {project.stack}
              </p>

              <p className="project-description">
                {project.description}
              </p>

              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className="project-card-bottom">
                <span>PROJECT OVERVIEW</span>
                <ArrowUpRight />
              </div>
            </article>
          ))}
        </div>

        <p className="project-scroll-note">
          Explore all five projects using the arrows or horizontal scroll.
        </p>

      </div>
    </section>
  );
}
