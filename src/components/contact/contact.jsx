import React from 'react';
import './contact.scss';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Want to learn more?</h2>
      <p>
        Get in touch below! We'd love to tell you more about our technology and give you a live demo at your vineyards.
      </p>
      <p>
        <a href="#schedule-call">Schedule a quick introductory call with us here.</a>
      </p>
      <p>Or, fill out the form below and we'll get back to you ASAP:</p>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in touch</h3>
          <p><strong>PHONE</strong></p>
          <p>(714) 745-0607</p>
          <p><strong>EMAIL</strong></p>
          <p>
            <a href="mailto:hm447@cornell.edu.com">contact@vineyard-vision.com</a>
          </p>
        </div>
        <div className="contact-form">
          <form>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="phone">Phone (optional)</label>
            <input type="text" id="phone" name="phone" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
