import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/Projects.css";

const Projects = () => {
  const cardData = [
    {
      img: "/images/bigbit-picture.png",
      tech: ["React", "Python", "Flask"],
      link: "https://bigbitsoftware.com/",
      name: "BigBit Software",
      description:
        "A professional software company website with a React frontend and Flask backend. Handles contact form submissions with server-side validation and sends transactional emails via SendGrid.",
      repo: "https://github.com/AbrahanTV/BigBit-Software-Website",
    },
    {
      img: "/images/teamtnr-picture.png",
      tech: ["React", "MySQL", "Flask"],
      link: "https://teamtnr.org/",
      name: "TeamTNR Adoptions",
      description:
        "Full-stack cat adoption platform for a non-profit. Users can submit adoption applications through a multistep form made with React, which are stored in a MySQL database and managed through a Flask backend.",
      repo: "https://github.com/AbrahanTV/Cat-Adoption-Website",
    },
    {
      img: "/images/teamtnr-dashboard-porftolio.png",
      tech: ["React", "MySQL", "Flask"],
      link: "https://teamtnr-dashboard.vercel.app/#admin",
      name: "TeamTNR Dashboard",
      description:
        "An administrative dashboard for the cat adoption platform. Staff log in via Google Auth and can view and manage all adoption applications pulled from the MySQL database, with real-time updates across rescue operations.",
      repo: "https://github.com/AbrahanTV/TeamTNR-Web-Application-Dashboard-",
    },
    {
      img: "/images/the-peoples-cto-picture.png",
      tech: ["React", "MySQL", "Flask"],
      link: "https://thepeoplescto.com/",
      name: "The People's CTO",
      description:
        "A personal brand website for The People's CTO, built with React and a Flask backend. Visitors can submit inquiries through a contact form, with data stored in a MySQL database. The site features a clean, modern design and highlights the client's expertise in technology leadership.",
    },
    {
      img: "/images/bcc-website-picture.png",
      tech: ["TypeScript", "JavaScript", "CSS"],
      link: "https://bergencc.github.io/website/",
      name: "Developer Club Website",
      description:
        "A community website for a college developer club, built in TypeScript. Features club news, upcoming events, and member profiles to keep the community connected and informed.",
      repo: "https://github.com/bergencc/website",
    },
    {
      img: "/images/f1-project-picture.png",
      tech: ["React", "API", "Vercel"],
      link: "https://f1-project-weld.vercel.app/",
      name: "Formula 1 Race Tracker & Calendar",
      description:
        "React app tracking the live Formula 1 season. Displays race calendar, driver roster, and constructor standings using data from the F1 and OpenF1 APIs. Features a real-time race countdown and team-colored UI.",
      repo: "https://github.com/AbrahanTV/F1-Project",
    },
    {
      img: "/images/quotes-picture.png",
      tech: ["API", "JavaScript", "CSS"],
      link: "https://quotes-three-rust.vercel.app/",
      name: "Quote Generator",
      description:
        "Interactive app that fetches and displays random quotes from public APIs.",
      repo: "https://github.com/AbrahanTV/quotes/tree/master",
    },
  ];

  return (
    <div className="projects-container">
      <div className="section-header">
        <h2 className="heading section-title">Featured Projects</h2>
        <p className="body-text section-subtitle">
          A selection of projects that showcase my skills and experience
        </p>
      </div>

      <div className="projects-grid">
        {cardData.map((item, index) => (
          <div key={index} className="project-card card">
            <div className="project-image">
              <img src={item.img} alt={item.name} />
              <div className="image-overlay">
                <div className="overlay-buttons">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-btn"
                    title="View Live"
                  >
                    <FaExternalLinkAlt />
                  </a>
                  {item.repo && (
                    <a
                      href={item.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-btn"
                      title="View Code"
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="project-content">
              <h3 className="project-name">{item.name}</h3>
              <p className="project-description body-text">
                {item.description}
              </p>

              <div className="tech-stack">
                {item.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-btn"
                >
                  <FaExternalLinkAlt /> Visit
                </a>
                {item.repo && (
                  <a
                    href={item.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn"
                  >
                    <FaGithub /> Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
