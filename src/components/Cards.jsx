import { Link } from "react-router-dom";

const Cards = ({ img, name, description, link }) => {
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
    <div className="card w-25">
      <div className="card-body text-center">
        {wrappedImage}
        <h5 className="card-title">{name}</h5>
        <p className="card-text ">{description}</p>
      </div>
    </div>
  );
};

export default Cards;
