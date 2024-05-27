import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="container">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>
          Have questions or need more information? Fill out the form below and
          we'll get back to you as soon as possible.
        </p>
        <div className="contact-form">
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <input type="submit" value="Send Message" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
