import React, { useEffect } from "react";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Mission from "./components/mission/mission";
import Vision from "./components/vision/vision";
// import Team from './components/team/team';
// import News from './components/news/news';
import Technology from "./components/technology/technology";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import "./index.scss";

function App() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    const updateThemeColors = () => {
      const isDarkTheme = document.body.classList.contains("dark");

      // Update nav link colors
      const linkColor = isDarkTheme ? "#fff9ed" : "#0b795a";
      const spanColor = isDarkTheme ? "#0b795a" : "#011d28";
      const hoverColor = isDarkTheme ? "#0b795a" : "#011d28";
      const spanHoverColor = isDarkTheme ? "#fff9ed" : "#0b795a";
      const underlineColor = isDarkTheme ? "#fff9ed" : "#0b795a";

      const navLinks = document.querySelectorAll("nav a.nav-item");
      navLinks.forEach((link) => {
        link.style.color = linkColor;
        link.querySelector("span").style.color = spanColor;

        link.addEventListener("mouseover", () => {
          link.style.color = hoverColor;
          link.querySelector("span").style.color = spanHoverColor;
          link.style.transition = "all 0.3s ease";
        });

        link.addEventListener("mouseout", () => {
          link.style.color = linkColor;
          link.querySelector("span").style.color = spanColor;
          link.style.transition = "all 0.3s ease";
        });

        const afterElement = link.querySelector("::after");
        if (afterElement) {
          afterElement.style.backgroundColor = underlineColor;
        }
      });

      // Update hero colors
      const root = document.documentElement;
      root.style.setProperty(
        "--hero-background-color",
        isDarkTheme ? "#333" : "#fff9ed"
      );
      root.style.setProperty(
        "--hero-font-color",
        isDarkTheme ? "#fff" : "#000"
      );
      root.style.setProperty(
        "--hero-btn-background-color",
        isDarkTheme ? "#0b795a" : "#0b795a"
      );
      root.style.setProperty(
        "--hero-btn-font-color",
        isDarkTheme ? "#fff9ed" : "#fff9ed"
      );
      root.style.setProperty(
        "--hero-btn-hover-background-color",
        isDarkTheme ? "#04212b" : "#04212b"
      );

      // Update technology section colors
      root.style.setProperty(
        "--tech-background-color",
        isDarkTheme ? "#333" : "#fff9ed"
      );
      root.style.setProperty(
        "--tech-font-color",
        isDarkTheme ? "#fff" : "#04212b"
      );
      root.style.setProperty(
        "--tech-title-color",
        isDarkTheme ? "#fff9ed" : "#04212b"
      );
      root.style.setProperty(
        "--tech-highlight-color",
        isDarkTheme ? "#0b795a" : "#0b795a"
      );
      root.style.setProperty(
        "--feature-background-color",
        isDarkTheme ? "#444" : "#fff"
      );
      root.style.setProperty(
        "--feature-title-color",
        isDarkTheme ? "#fff9ed" : "#04212b"
      );
      root.style.setProperty(
        "--feature-font-color",
        isDarkTheme ? "#fff" : "#04212b"
      );

      // Update contact section colors
      root.style.setProperty(
        "--contact-background-color",
        isDarkTheme ? "#333" : "#fff9ed"
      );
      root.style.setProperty(
        "--contact-font-color",
        isDarkTheme ? "#fff" : "#04212b"
      );
      root.style.setProperty(
        "--contact-title-color",
        isDarkTheme ? "#fff9ed" : "#04212b"
      );
      root.style.setProperty(
        "--form-background-color",
        isDarkTheme ? "#444" : "#fff"
      );
      root.style.setProperty(
        "--form-border-color",
        isDarkTheme ? "#555" : "#ccc"
      );
      root.style.setProperty(
        "--form-input-background-color",
        isDarkTheme ? "#555" : "#fff"
      );
      root.style.setProperty(
        "--form-input-font-color",
        isDarkTheme ? "#fff" : "#000"
      );
      root.style.setProperty(
        "--form-submit-background-color",
        isDarkTheme ? "#0b795a" : "#0b795a"
      );
      root.style.setProperty(
        "--form-submit-font-color",
        isDarkTheme ? "#fff9ed" : "#fff9ed"
      );
      root.style.setProperty(
        "--form-submit-hover-background-color",
        isDarkTheme ? "#04212b" : "#04212b"
      );
    };

    updateThemeColors(); // Apply initial colors

    const themeToggleButton = document.getElementById("theme-toggle");
    themeToggleButton.addEventListener("change", () => {
      document.body.classList.toggle("dark");
      updateThemeColors(); // Update colors on theme change
    });

    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          entry.target.style.transition = "all 1s ease";
        }
      });
    }, options);

    sections.forEach((section) => {
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
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.querySelector(".card-inner").style.transform = "rotateY(180deg)";
      });
      card.addEventListener("mouseleave", () => {
        card.querySelector(".card-inner").style.transform = "rotateY(0deg)";
      });
    });

    const regions = document.querySelectorAll(".region");
    regions.forEach((region) => {
      region.addEventListener("mouseenter", () => {
        region.style.boxShadow = "0 0 20px #0b795a";
      });
      region.addEventListener("mouseleave", () => {
        region.style.boxShadow = "none";
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
