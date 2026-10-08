import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section container">
      <div className="about-grid">
        {/* Left Column: Education */}
        <div className="education-column">
          <h2 className="section-heading">
            MY EDUCATION
          </h2>
          <div className="timeline">
            <div className="timeline-item fade-in">
              <div className="timeline-dot current"></div>
              <div className="timeline-card">
                <div className="card-header">
                  <h3>
                    Bachelor of Technology, Computer Science & Engineering
                  </h3>
                  <span className="year-badge">2023 - 2027</span>
                </div>
                <p className="institution">
                  NSHM Knowledge Campus, West Bengal
                </p>
                <p className="detail">(final year)</p>
              </div>
            </div>

            <div
              className="timeline-item fade-in"
              style={{ transitionDelay: "0.1s" }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="card-header">
                  <h3>Higher Secondary</h3>
                  <span className="year-badge">2023</span>
                </div>
                <p className="institution">
                  [Panchal High School (H.S)], West Bengal
                </p>
                <p className="detail">Marks: [65%]</p>
              </div>
            </div>

            <div
              className="timeline-item fade-in"
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="card-header">
                  <h3>Secondary</h3>
                  <span className="year-badge">2021</span>
                </div>
                <p className="institution">
                  [Panchal High School (H.S)], West Bengal
                </p>
                <p className="detail">Marks: [80%]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Center Divider */}
        <div className="column-divider"></div>

        {/* Right Column: About Me */}
        <div
          className="about-me-column fade-in"
          style={{ transitionDelay: "0.3s" }}
        >
          <h2 className="section-heading">
            <span className="serif-accent">About</span> ME
          </h2>
          <div className="about-text-content">
            <p className="first-line">
              I'm a frontend developer who loves building websites that look
              clean and work smoothly. I like turning an idea into something
              people can actually use.
            </p>
            <p>
              I started with HTML, CSS and JavaScript, and now I build projects
              with React. I'm also learning backend with Node.js, Express and
              MongoDB, so I can build complete web apps.
            </p>
            <p>
              I'm looking for an internship where I can learn, build real things
              and grow with a team. If you'd like to work together, feel free to
              reach out.
            </p>
          </div>
          <a href="/Somu-Mandal-CV.pdf" download className="pill-btn cv-btn">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
