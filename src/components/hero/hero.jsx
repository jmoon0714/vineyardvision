import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <section id="hero" className="container">
      <div className="hero-content">
        <h1>Precision Vineyard Management</h1>
        <p className="subtext">
          Our robot autonomously navigates your vineyard, leveraging advanced
          camera systems and powerful vision algorithms for{" "}
          <strong>real-time disease detection</strong>.
        </p>
        <a href="#contact" className="btn" id="contactButton">
          Contact Us
        </a>
      </div>
      <div className="hero-image">
        <img src="hero.jpg" alt="Vineyard Vision Technology" />
      </div>
    </section>
  );
};

export default Hero;
