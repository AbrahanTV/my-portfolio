const Cards = ({ img, name, description }) => {
  return (
    <>
      <div className="card">
        {/* <img src={img} className="card-img-top" /> */}
        <div className="card-body">
          <div className="color w-25 p-2 bg-primary"></div>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
