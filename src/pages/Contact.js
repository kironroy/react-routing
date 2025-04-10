import React from "react";
import "./Contact.css"; // Separate CSS for Contact

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p className="reach-out">Feel free to reach out!</p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="indent-input"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="indent-input"
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            className="indent-input"
          />
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
