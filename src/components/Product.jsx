
import { Link } from "react-router-dom";
import "./Product.css";



function Product({ name, description, img, saleprice }) {
  return (
    <div className="product">
      <img className='img' src={img} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      {saleprice && <p className="price">Sale Price: ${saleprice}</p>}
      <Link className="buttoni" to="/productdetails">View Details</Link>
    </div>
  );
}

export default Product;