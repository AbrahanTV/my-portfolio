import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/Projects.css";

const Projects = () => {
  const cardData = [
    {
      img: "/images/bigbit-picture.png",
      tech: ["React", "Bootstrap", "Flask"],
      link: "https://bigbitsoftware.com/",
      name: "BigBit Software",
      description:
        "Professional website for a software company with modern UI and responsive design.",
      repo: "https://github.com/AbrahanTV/BigBit-Software-Website",
    },
    {
      img: "/images/teamtnr-picture.png",
      tech: ["React", "MySQL", "Flask"],
      link: "https://teamtnr.org/",
      name: "TeamTNR Adoptions",
      description:
        "Full-stack cat adoption platform for a non-profit, featuring user accounts and adoption tracking.",
      repo: "https://github.com/AbrahanTV/Cat-Adoption-Website",
    },
    {
      img: "/images/the-peoples-cto-picture.png",
      tech: ["React", "MySQL", "Flask"],
      link: "https://thepeoplescto.com/",
      name: "The People's CTO",
      description:
        "Educational platform for teaching coding to young students with interactive lessons.",
    },
    {
      img: "/images/bcc-website-picture.png",
      tech: ["TypeScript", "JavaScript", "CSS"],
      link: "https://bergencc.github.io/website/",
      name: "Developer Club Website",
      description:
        "Community website for college developers with news, events, and member profiles.",
      repo: "https://github.com/bergencc/website",
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
