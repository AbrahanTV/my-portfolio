import { useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    setError(false);

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    try {
      const url =
        import.meta.env.MODE === "development"
          ? "http://127.0.0.1:5000/api/contact"
          : "https://apiabrahantolentinocom.vercel.app/api/contact";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSent(true);
      setTimeout(() => setSent(false), 4000);
      e.target.reset();
    } catch (error) {
      console.log("Error submitting form:", error);
      setError(true);
      setTimeout(() => setError(false), 4000);
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        {/* Contact Section */}
        <div className="footer-section">
          <h2 className="heading footer-title">Get In Touch</h2>
          <p className="body-text footer-subtitle">
            Have a question or project in mind? I'd love to hear from you.
          </p>

          <div className="contact-methods">
            <a
              href="mailto:abrahantolentinov@gmail.com"
              className="contact-item glass-sm"
            >
              <FaEnvelope className="contact-icon" />
              <div className="contact-text">
                <p className="contact-label">Email</p>
                <span className="contact-value">
                  abrahantolentinov@gmail.com
                </span>
              </div>
            </a>

            <a href="tel:9174027230" className="contact-item glass-sm">
              <FaPhone className="contact-icon" />
              <div className="contact-text">
                <p className="contact-label">Phone</p>
                <span className="contact-value">(917) 402-7230</span>
              </div>
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/AbrahanTV"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn glass-sm"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abrahan-tolentino-34b654313/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn glass-sm"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Contact Form Section */}
        <div className="footer-section">
          <h2 className="heading footer-title">Send a Message</h2>

          {sent && (
            <div className="form-message success-message">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {error && (
            <div className="form-message error-message">
              ✗ Error sending message. Please try again.
            </div>
          )}

          <form className="contact-form" onSubmit={submitForm}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                ref={nameRef}
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                ref={emailRef}
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                ref={messageRef}
                id="message"
                name="message"
                placeholder="Your message..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="button-primary submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="text-white">
          © {new Date().getFullYear()} Abrahan Tolentino. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
