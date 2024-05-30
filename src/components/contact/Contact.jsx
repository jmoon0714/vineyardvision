import React from "react";

const Contact = () => {
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
    <section id="contact" className="py-16 bg-lightCream dark:bg-darkBlue">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-center text-darkBlue dark:text-lightCream mb-4">
            Contact Us
          </h2>
          <p className="text-center text-darkBlue dark:text-lightCream mb-8">
            Have questions or need more information? Fill out the form below and
            we'll get back to you as soon as possible.
          </p>
          <div className="contact-form">
            <form className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-lightCream dark:border-gray-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-lightCream dark:border-gray-600"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-lightCream dark:border-gray-600"
                rows="4"
              ></textarea>
              <input
                type="submit"
                value="Send Message"
                className="w-full px-4 py-2 bg-primary-700 text-lightCream rounded-lg hover:bg-primary-900 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
