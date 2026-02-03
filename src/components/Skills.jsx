import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import { SiGithubactions, SiFlask } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import "../styles/Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3Alt />, name: "CSS" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { icon: <FaPython />, name: "Python" },
        { icon: <SiFlask />, name: "Flask" },
        { icon: <DiMysql />, name: "MySQL" },
      ],
    },
    {
      category: "Tools & DevOps",
      skills: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <SiGithubactions />, name: "GitHub Actions" },
      ],
    },
  ];

  return (
    <div className="skills-container">
      <div className="section-header">
        <h2 className="heading section-title">Technical Skills</h2>
        <p className="body-text section-subtitle">
          Languages, frameworks, and tools I work with
        </p>
      </div>

      <div className="skills-categories">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="category-group">
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="skill-item glass-sm"
                  style={{
                    animationDelay: `${(catIndex * 3 + skillIndex) * 0.05}s`,
                  }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
