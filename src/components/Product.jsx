
import { Link } from "react-router-dom";
import Home  from "./Slider";
import OIP from "../assets/OIP.webp";
import "./Product.css";



function Product() {
  return (

    <>
    <div className="produkti">
      <div className="product">
        <img className='img'  src={OIP} alt="React Logo" />
        <h2>Product Name</h2>
        <p>Product Description</p>  
        <Link to="/product-details">View Details</Link>
      </div>
      <div className="product">
        <img className='img'  src={OIP} alt="React Logo" />
        <h2>Product Name</h2>
        <p>Product Description</p>  
        <Link to="/product-details">View Details</Link>
      </div>
      <div className="product">
        <img className='img'  src={OIP} alt="React Logo" />
        <h2>Product Name</h2>
        <p>Product Description</p>  
        <Link to="/product-details">View Details</Link>
      </div>
    </div>
    </>
  );
}

export default Product;
