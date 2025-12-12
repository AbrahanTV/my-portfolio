import Cards from "./Cards.jsx";

const Projects = () => {
  const cardData = [
    {
      img: "/images/bigbit-picture.png",
      link: "https://bigbitsoftware.com/",
      name: "BigBit Software",
      description: "This is the website for a software company.",
    },
    {
      img: "/images/teamtnr-picture.png",
      link: "https://teamtnr.org/",
      name: "TeamTNR Adoptions",
      description: "Cat adoption website for a non-profit organization.",
    },
    {
      img: "/images/quotes-picture.png",
      link: "https://quotes-three-rust.vercel.app/",
      name: "Quote Generator App",
      description: "API calling app that shows random quotes.",
    },
  ];

  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center py-5">
        <p className="projects-p text-white">Projects</p>

        <div className="cards-cont">
          <div className="cards d-flex flex-row flex-wrap gap-3 justify-content-center">
            {cardData.map((item, index) => (
              <Cards
                key={index}
                img={item.img}
                link={item.link}
                name={item.name}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
