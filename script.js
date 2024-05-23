document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  for (const link of links) {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector(link.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  }

  // Navigation hover effect
  const navLinks = document.querySelectorAll("nav a.nav-item");

  navLinks.forEach((link) => {
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

  // Section animations
  const sections = document.querySelectorAll("section");
  const options = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries, observer) => {
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

  // Additional animations for features
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
  contactButton.classList.add("pulse");
});
