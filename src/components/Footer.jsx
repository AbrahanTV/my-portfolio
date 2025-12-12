import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiGithubactions } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

const Footer = () => {
  const icons = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiGithubactions />, name: "GitHub Actions" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <FaPython />, name: "Python" },
    { icon: <DiMysql />, name: "MySQL" },
  ];

  return (
    <>
      <footer
        id="footer"
        className="bg-gray d-flex flex-wrap justify-content-around p-5 px-3"
      >
        <div className="skills-cont w-25 d-flex flex-column align-items-start flex-wrap">
          <p className="heading text-white fs-1 fw-bold align-self-center">
            Skills
          </p>
          <div className="skills w-100 d-flex justify-content-center text-center gap-5 fs-5 code-text flex-wrap">
            {icons.map((icon, index) => (
              <div className="text-white ">
                <i key={index} className="fs-3">
                  {icon.icon}
                </i>
                <p>{icon.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="contacts d-flex flex-column align-items- gap-4 p-3 rounded-2">
          <h1 className="heading text-white">Contact</h1>
          <div className="my-info d-flex flex-column gap-2">
            <a
              href="mailto:abrahantolentinov@gmail.com"
              className="body-text text-white text-decoration-none fs-3 "
            >
              abrahantolentinov@gmail.com
            </a>
            <a
              href="tel+:9174027230"
              className="body-text text-white text-decoration-none fs-3 fw-"
            >
              917-402-7230
            </a>
          </div>
          <form action="" className="form">
            <label htmlFor="email" className="form-label fs-4 text-white">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Type your email"
            />
            <label htmlFor="message" className="form-label fs-4 text-white">
              Message
            </label>
            <textarea
              name="message"
              id=""
              className="form-control"
              placeholder="Send me a message"
            ></textarea>
          </form>
        </div>
      </footer>
    </>
  );
};

export default Footer;
