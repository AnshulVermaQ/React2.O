const Card = ({ title, image,rating }) => {
    return (
      <div className="card" style={{ width: "18rem",height:"28rem" }}>
        <img src={image} height = "150px" className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <a href="#" className="btn btn-primary">
            {rating.rate}
          </a>
        </div>
      </div>
    );
  };
  
  export default Card;
  