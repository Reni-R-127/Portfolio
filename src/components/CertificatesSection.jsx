import React from "react";
import { Award, ExternalLink } from "lucide-react";
import "./CertificatesSection.css";

const certificates = [
  {
    title: "Java Full Stack Development",
    organization: "SLA Institute, Chennai",
    detail: "Grade A · November 2025",
  },
  {
    title: "Internet of Things",
    organization: "NPTEL",
    detail: "January – April 2024",
  },
  {
    title: "Problem Solving & Coding Challenges",
    organization: "HackerRank",
    detail: "Coding practice and problem solving",
  },
];

export default function CertificatesSection() {
  return (
    <section className="certificates-section" id="certificates">
      <div className="section-wrap">
        <div className="section-heading reveal">
          <span className="eyebrow">05 / CERTIFICATIONS</span>
          <h2>Learning & <em>achievements.</em></h2>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <article
              className={`certificate-card reveal reveal-delay-${(index % 3) + 1}`}
              key={certificate.title}
            >
              <div className="certificate-icon">
                <Award />
              </div>

              <h3>{certificate.title}</h3>
              <p>{certificate.organization}</p>
              <span>{certificate.detail}</span>

              <div className="certificate-bottom">
                <span>PROFESSIONAL DEVELOPMENT</span>
                <ExternalLink size={15} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
