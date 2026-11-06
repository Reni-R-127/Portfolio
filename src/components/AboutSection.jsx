import React from "react";
import { GraduationCap, BriefcaseBusiness, Award } from "lucide-react";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about-section section-wrap" id="about">

      <div className="section-heading reveal">
        <span className="eyebrow">01 / ABOUT ME</span>
        <h2>A little about <em>my journey.</em></h2>
      </div>

      <div className="about-grid">

        <div className="about-description reveal">
          <h3>
            Turning ideas into meaningful
            <span> digital experiences.</span>
          </h3>

          <p>
            I'm a Junior Full Stack Developer and B.E. Electronics
            and Communication Engineering graduate from Karpagam
            College of Engineering.
          </p>

          <p>
            I have hands-on experience developing responsive
            web applications, integrating REST APIs, working
            with databases and building mobile applications
            connected to IoT systems.
          </p>

          <p>
            I enjoy learning new technologies, solving technical
            problems and building practical software solutions.
          </p>

          <a
            href="/Reni_R_Resume_Z3_Connect.pdf"
            className="about-resume"
            target="_blank"
            rel="noreferrer"
          >
            View My Resume ↗
          </a>
        </div>

        <div className="about-highlights">

          <article className="about-info-card reveal reveal-delay-1">
            <GraduationCap />
            <div>
              <small>EDUCATION</small>
              <h4>B.E. Electronics & Communication</h4>
              <p>Karpagam College of Engineering</p>
              <strong>CGPA: 8.29 / 10</strong>
            </div>
          </article>

          <article className="about-info-card reveal reveal-delay-2">
            <BriefcaseBusiness />
            <div>
              <small>EXPERIENCE</small>
              <h4>Full Stack Developer (Probationary)</h4>
              <p>ProJenius Innovation Technology</p>
              <strong>August – October 2026</strong>
            </div>
          </article>

          <article className="about-info-card reveal reveal-delay-3">
            <Award />
            <div>
              <small>TRAINING</small>
              <h4>Java Full Stack Development</h4>
              <p>SLA Institute, Chennai</p>
              <strong>Grade A</strong>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
