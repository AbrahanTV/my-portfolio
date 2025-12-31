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
import { SiJfrogpipelines } from "react-icons/si";

const Skills = () => {
  const icons = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiGithubactions />, name: "GitHub Actions" },
    { icon: <SiJfrogpipelines />, name: "CI/CD Pipelines" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <FaPython />, name: "Python" },
    { icon: <DiMysql />, name: "MySQL" },
  ];

  return (
    <>
      <div className="skills-cont d-flex flex-column flex-wrap p-5">
        <p className="heading text-white fs-1 fw-bold align-self-center mb-4">
          Skills
        </p>
        <div className="skills w-100 d-flex justify-content-center text-center fs-5 code-text flex-wrap">
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
    </>
  );
};

export default Skills;
