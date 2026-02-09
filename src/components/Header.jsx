import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header glass">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text gradient-text">AT</span>
        </div>

        <nav className={`nav ${isOpen ? "active" : ""}`}>
          <button onClick={() => scrollToSection("home")} className="nav-link">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="nav-link">
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="nav-link"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="nav-link"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="nav-link"
          >
            Contact
          </button>
        </nav>

        <div className="header-actions">
          <a
            href="/files/Abrahan_Resume_Updated_2026.pdf"
            download
            className="button-secondary"
          >
            Resume
          </a>
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
