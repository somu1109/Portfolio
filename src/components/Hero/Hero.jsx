import React, { useState, useEffect } from 'react';
import './Hero.css';
import me from '../../assets/me.png';

const Hero = () => {
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimKey(prev => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-section container">
      <div className="hero-content">
        
        {/* Top Floating Elements */}
        <div className="status-pill">
          <span className="dot"></span> Available for internships
        </div>
        
        <div className="short-desc">
          Frontend Developer who builds<br/>
          clean, fast and responsive websites<br/>
          using HTML, CSS, JavaScript and React.
        </div>

        {/* Big Greeting Text behind photo */}
        <div className="greeting-text">
          <span className="hey">Hey,</span>
          <span className="there">there</span>
        </div>

        {/* Photo Container */}
        <div className="photo-container">
          <img src={me} alt="Somu Mandal" className="profile-img" />
          <div className="photo-fade"></div>
        </div>

        {/* Bottom Giant Texts */}
        <div className="bottom-text-left">
          I AM<br/>SOMU
        </div>

        <div className="bottom-text-right" key={animKey}>
          {["FRONTEND", "WEB", "DEVELOPER"].map((line, i, arr) => {
            const baseDelay = i === 0 ? 0 : i === 1 ? 8 : 11;
            return (
              <React.Fragment key={i}>
                {line.split('').map((char, j) => (
                  <span
                    key={j}
                    className="rise-letter"
                    style={{ animationDelay: `${(baseDelay + j) * 0.05}s` }}
                  >
                    {char}
                  </span>
                ))}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Hero;
