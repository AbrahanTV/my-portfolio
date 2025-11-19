import Cards from "./Cards.jsx";

const Projects = () => {
  const cardData = [
    {
      img: "",
      name: "Project 1",
      description: "This is a description for project 1",
    },
    {
      img: "",
      name: "Project 2",
      description: "This is a description for project 2",
    },
    {
      img: "",
      name: "Project 3",
      description: "This is a description for project 3",
    },
  ];

  return (
    <>
      <div className="container">
        <p className="h2">Projects</p>

        {cardData.map((item, index) => (
          <div key={index}>
            <Cards
              img={item.img}
              name={item.name}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
