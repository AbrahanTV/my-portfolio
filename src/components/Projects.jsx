import Cards from "./Cards.jsx";

const Projects = () => {
  const cardData = [
    {
      img: "/images/bigbit-picture.png",
      tech: ["React", "Bootstrap", "Flask"],
      link: "https://bigbitsoftware.com/",
      name: "BigBit Software",
      description: "This is the website for a software company.",
      repo: "https://github.com/AbrahanTV/BigBit-Software-Website",
    },
    {
      img: "/images/teamtnr-picture.png",
      tech: ["React", "Flask", "Bootstrap"],
      link: "https://teamtnr.org/",
      name: "TeamTNR Adoptions",
      description: "Cat adoption website for a non-profit organization.",
      repo: "https://github.com/AbrahanTV/Cat-Adoption-Website",
    },
    {
      img: "/images/quotes-picture.png",
      tech: ["API", "JavaScript", "CSS"],
      link: "https://quotes-three-rust.vercel.app/",
      name: "Quote Generator App",
      description: "API calling app that generates random quotes.",
      repo: "https://github.com/AbrahanTV/quotes/tree/master",
    },
  ];

  return (
    <>
      <div className="container d-flex flex-column align-items-center p-5 rounded-4 bg-primary">
        <p className="projects-p text-white heading">Projects</p>

        <div className="cards-cont">
          <div className="cards d-flex gap-4 justify-content-center flex-wrap">
            {cardData.map((item, index) => (
              <Cards
                key={index}
                img={item.img}
                link={item.link}
                tech={item.tech}
                name={item.name}
                description={item.description}
                repo={item.repo}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
