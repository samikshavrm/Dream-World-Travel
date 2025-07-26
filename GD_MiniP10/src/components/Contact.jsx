import React from "react";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <h1 className="contact-title">The Liminal Room</h1>
          <p className="contact-quote">
            You’ve wandered through echoes and upside gardens. Now it’s time to
            leave a whisper of your own.
          </p>
        </div>

        <div className="contact-right">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Dream</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
