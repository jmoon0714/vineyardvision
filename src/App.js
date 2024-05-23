import React, { useEffect } from 'react';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Mission from './components/mission/mission';
import Vision from './components/vision/vision';
// import Team from './components/team/team';
// import News from './components/news/news';
import Technology from './components/technology/technology';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import './index.scss';

function App() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    const navLinks = document.querySelectorAll("nav a.nav-item");
    navLinks.forEach(link => {
      link.addEventListener("mouseover", () => {
        link.style.color = "#0B795A"; // Emphasis color on hover
        link.querySelector("span").style.color = "#04212B"; // Dark blue color for "our" on hover
        link.style.transition = "all 0.3s ease";
      });
      link.addEventListener("mouseout", () => {
        link.style.color = "#04212B"; // Dark blue color
        link.querySelector("span").style.color = "#0B795A"; // Emphasis color for "our"
        link.style.transition = "all 0.3s ease";
      });
    });

    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          entry.target.style.transition = "all 1s ease";
        }
      });
    }, options);

    sections.forEach(section => {
      section.style.opacity = 0;
      section.style.transform = "translateY(50px)";
      observer.observe(section);
    });

    const features = document.querySelectorAll(".feature");
    features.forEach((feature, index) => {
      feature.style.opacity = 0;
      feature.style.transform = `translateY(${50 + index * 10}px)`;
      setTimeout(() => {
        feature.style.transition = "all 0.5s ease";
        feature.style.opacity = 1;
        feature.style.transform = "translateY(0)";
      }, 1000 + index * 200);
    });

    // Add pulsing animation to contact button
    const contactButton = document.getElementById("contactButton");
    if (contactButton) {
      contactButton.classList.add("pulse");
    }

    // Hover effect for regions
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
      });
      card.addEventListener('mouseleave', () => {
        card.querySelector('.card-inner').style.transform = 'rotateY(0deg)';
      });
    });

    const regions = document.querySelectorAll('.region');
    regions.forEach(region => {
      region.addEventListener('mouseenter', () => {
        region.style.boxShadow = '0 0 20px #0b795a';
      });
      region.addEventListener('mouseleave', () => {
        region.style.boxShadow = 'none';
      });
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Mission />
      <Vision />
      {/* <Team />
      <News /> */}
      <Technology />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;