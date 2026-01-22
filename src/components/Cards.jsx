import { Link } from "react-router-dom";

const Cards = ({ img, name, description, link, tech, repo }) => {
  const image = <img src={img} className="card-img card-picture" alt={name} />;

  const wrappedImage = link ? (
    link.startsWith("/") ? (
      <Link to={link}>{image}</Link>
    ) : (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {image}
      </a>
    )
  ) : (
    image
  );

  return (
    <div className="card col-md-3">
      <div className="card-body text-center d-flex flex-column">
        {wrappedImage}
        <div className="techs d-flex gap-2 my-3 flex-wrap justify-content-center">
          {tech &&
            tech.map((techs, index) => (
              <p
                key={index}
                className="code-text text-white tech-bg p-1 rounded-1"
              >
                {techs}
              </p>
            ))}
        </div>
        <h5 className="card-title">{name}</h5>
        <p className="body-text card-text">{description}</p>
        {repo && (
          <div className="repo-cont fs-5 d-flex justify-content-start">
            <a
              href={repo}
              target="blank"
              className="repo-link text-white text-decoration-none  p-2 rounded "
            >
              Github
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
