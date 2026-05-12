import React from "react";
import '../components/TopProduct.css';
import { Link } from "react-router-dom";


function TopProduct({ id }) {
    return (
        <div className="top-product">
            <h2 className="top-product-title">Top Product</h2>
            <div className="top-product-list">
                <div className="top-product-item">
                    <img src="https://m.media-amazon.com/images/I/610LLQC8DhL._AC_SL1500_.jpg" alt="Titulli" 
                    className="top-product-image" />
                    <h3 className="top-product-name">Smartwatch</h3>
                     <Link className="buttoni" to={`/productdetails/${id || 1}`}>View Details</Link>
                </div>
                <div className="top-product-item">
                    <img src="https://m.media-amazon.com/images/I/610LLQC8DhL._AC_SL1500_.jpg" alt="Titulli" 
                    className="top-product-image" />
                    <h3 className="top-product-name">Smartwatch</h3>
                     <Link className="buttoni" to={`/productdetails/${id || 2}`}>View Details</Link>

       
                </div>  
                <div className="top-product-item">
                    <img src="https://m.media-amazon.com/images/I/610LLQC8DhL._AC_SL1500_.jpg" alt="Titulli" 
                    className="top-product-image" />
                    <h3 className="top-product-name">Smartwatch</h3>
                     <Link className="buttoni" to={`/productdetails/${id || 3}`}>View Details</Link>
                </div>
            </div>
        </div>
    );
}

export default TopProduct;