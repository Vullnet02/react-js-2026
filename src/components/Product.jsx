
import { Link } from "react-router-dom";
import "./Product.css";



function Product({ name, description, img }) {
  return (
    <div className="product">
      <img className='img' src={img} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <Link to="/productdetails">View Details</Link>
    </div>
  );
}

export default Product;
