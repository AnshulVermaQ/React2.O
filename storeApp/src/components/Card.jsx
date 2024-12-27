import { useDispatch } from "react-redux";
import { addItems } from "../store/CardSlice";


const Card = ({item, title, image,rating }) => {
  const dispatch = useDispatch();

  const handleCart = () =>{
    dispatch(addItems(item));
  }
    return (
      <div className="card" style={{ width: "18rem",height:"28rem" }}>
        <img src={image} height = "150px" className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <a href="#" className="btn btn-primary">
            {rating}
          </a>
        </div>
       <button onClick={handleCart} className="btn  btn-primary">Add to cart</button>
      </div>
    );
  };
  
  export default Card;
  