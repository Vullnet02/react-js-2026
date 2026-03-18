import { Link } from "react-router-dom";
import Home  from "./Slider";


function Product() {
  return (
    <div className="product">
      <h2>Product Name</h2>
      <p>Product Description</p>  
      <Link to="/product-details">View Details</Link>
    </div>
  );
}

export default Product;
