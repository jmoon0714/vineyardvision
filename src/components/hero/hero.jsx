import React from 'react';
import './hero.scss';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <h1>Detect and Protect</h1>
        <p>
          We're a startup spun out of Cornell University. Our<br />
          advanced camera systems & computer vision software <br />
          gather precision data for the visible fruit on any tree.
        </p>
        <a href="#contact" className="btn" id="contactButton">Contact Us</a>
      </div>
      <div className="hero-image">
        <img src="hero.jpg" alt="Vineyard Vision Technology" />
      </div>
    </section>
  );
};

export default Hero;
