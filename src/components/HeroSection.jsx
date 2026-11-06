
import React from "react";
import { ArrowUpRight, Download } from "lucide-react";
import "./HeroSection.css";

import profileImage from "../images/Reni_profile.jpeg";

function HeroSection() {
  return (
    <section className="hero-reference" id="home">
      <div className="hero-reference-inner">

        {/* LEFT CONTENT */}
        <div className="hero-reference-copy">
          <p className="hero-greeting">
            Hello, I'm <span>Reni R.</span>
          </p>

          <h1>
            Junior Full Stack
            <span>Developer</span>
          </h1>

          <p className="hero-description">
            I build responsive web applications, develop
            backend services, and create meaningful digital
            experiences with modern technologies.
          </p>

          <div className="hero-reference-actions">
            <a href="#contact" className="hero-hire-btn">
              Hire Me <ArrowUpRight size={16} />
            </a>

            <a
              href="/Reni_R_Resume.pdf"
              className="hero-resume-btn"
              download
            >
              Get Resume <Download size={16} />
            </a>
          </div>
        </div>

        {/* RIGHT PROFILE IMAGE */}
        <div className="hero-reference-visual">
          <div className="portrait-ring">
            <img
              src={profileImage}
              alt="Reni R - Full Stack Developer"
            />
          </div>

          <span className="portrait-decoration decoration-one">
            ✧
          </span>

          <span className="portrait-decoration decoration-two">
            ✦
          </span>
        </div>

      </div>

      {/* BOTTOM WAVE */}
      <svg
        className="hero-wave"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,100 C180,100 220,0 430,65 C620,125 700,175 900,100 C1100,25 1210,0 1440,65 L1440,180 L0,180 Z"
          fill="#173E70"
        />

        <path
          d="M0,100 C180,100 220,0 430,65 C620,125 700,175 900,100 C1100,25 1210,0 1440,65"
          fill="none"
          stroke="#C5A45D"
          strokeWidth="2"
        />
      </svg>
    </section>
  );
}

export default HeroSection;
