const Cards = ({ img, name, description }) => {
  return (
    <>
      <div className="card">
        {/* <img src={img} className="card-img-top" /> */}
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
