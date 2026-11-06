import React from "react";
import {
  Mail,
  Linkedin,
  Github,
  ArrowUpRight,
} from "lucide-react";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-wrap">

        <div className="contact-heading reveal">
          <span className="eyebrow">07 / GET IN TOUCH</span>
          <h2>Let's create something <em>meaningful.</em></h2>
          <p>
            Looking for a Junior Full Stack Developer?
            Let's connect and discuss opportunities.
          </p>
        </div>

        <div className="contact-grid">

          <a href="mailto:jesreni2004@gmail.com" className="contact-card">
            <Mail />
            <div>
              <small>EMAIL</small>
              <h3>jesreni2004@gmail.com</h3>
            </div>
            <ArrowUpRight />
          </a>

          <a
            href="https://www.linkedin.com/in/reni-r-048a52269"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <Linkedin />
            <div>
              <small>LINKEDIN</small>
              <h3>Connect with me</h3>
            </div>
            <ArrowUpRight />
          </a>

          <a
            href="https://github.com/Reni-R-127"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <Github />
            <div>
              <small>GITHUB</small>
              <h3>View my projects</h3>
            </div>
            <ArrowUpRight />
          </a>

        </div>
      </div>
    </section>
  );
}
