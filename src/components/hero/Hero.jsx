import React from "react";

const Hero = () => {
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="bg-lightCream dark:bg-darkBlue py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center px-4 md:px-8">
        <div className="hero-content text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl text-primary-700 font-bold text-darkBlue dark:text-triadic1-300">
            Precision Vineyard Management
          </h1>
          <p className="subtext text-lg text-darkBlue dark:text-lightCream pb-6">
            Our robot autonomously navigates your vineyard, using advanced
            camera systems and powerful vision AI for{" "}
            <strong>real-time disease detection</strong>.
          </p>
          <a
            href="#contact"
            className="btn bg-primary-700 text-lightCream hover:bg-primary-900 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-triadic1-500 dark:hover:bg-triadic1-900"
            id="contactButton"
            onClick={handleSmoothScroll}
          >
            Contact Us
          </a>
        </div>
        <div className="hero-image md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <img
            src="hero.jpg"
            alt="Vineyard Vision Technology"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
