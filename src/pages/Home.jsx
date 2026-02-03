import { useState, useEffect } from "react";
import Projects from "../components/Projects";
import Skills from "../components/Skills.jsx";
import { FaArrowDown } from "react-icons/fa";
import "../styles/Home.css";

import ShinyText from "../components/ShinyText.jsx";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const roles = ["Web Developer", "Full Stack Enthusiast", "CS Student"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div
            className="hero-text"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          >
            <h1 className="heading hero-title">
              <ShinyText
                className="gradient-text"
                text="Hi, I'm Abrahan Tolentino"
                speed={2}
                delay={1}
                color="#3b82f6"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
            </h1>

            <div className="role-container">
              <p className="role-text">I'm a</p>
              <div className="role-display glass-sm">
                <span key={currentRole} className="role-animated">
                  {roles[currentRole]}
                </span>
              </div>
            </div>

            <p className="body-text hero-description">
              Passionate about building beautiful, functional web applications.{" "}
              <br />I like experimenting with new technologies and finding
              simple solutions to complex problems.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button-primary">
                View My Work
              </a>
              <a href="#contact" className="button-secondary">
                Get In Touch
              </a>
            </div>
          </div>

          {/* <div className="scroll-indicator">
            <span className="text-muted">Scroll to explore</span>
            <FaArrowDown className="arrow-animate" />
          </div> */}
        </div>

        {/* Gradient Background Elements */}
        <div className="gradient-blob gradient-blob-1"></div>
        <div className="gradient-blob gradient-blob-2"></div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <h2 className="heading section-title">About Me</h2>

          <div className="about-content">
            <div className="about-text">
              <p className="body-text">
                I'm a Computer Science student at Bergen Community College with
                a passion for web development. I specialize in building modern,
                responsive web applications using React and full-stack
                technologies.
              </p>

              <p className="body-text">
                With experience in frontend and backend development, I enjoy
                solving complex problems and creating seamless user experiences.
                I'm constantly learning new technologies and best practices in
                the web development space.
              </p>

              <p className="body-text">
                When I'm not coding, you'll find me exploring new frameworks,
                contributing to open-source projects, or helping other
                developers grow their skills.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card glass">
                <h3 className="text-primary">5+</h3>
                <p className="text-white">Projects Completed</p>
              </div>
              <div className="stat-card glass">
                <h3 className="text-primary">2+</h3>
                <p className="text-white">Years Experience</p>
              </div>
              <div className="stat-card glass">
                <h3 className="text-primary">100%</h3>
                <p className="text-white">Dedication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <Projects />
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <Skills />
      </section>
    </div>
  );
};

export default Home;
