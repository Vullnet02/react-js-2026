import React from "react";
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <nav className="navbar">
      {/* <h2 className="logo">MyApp</h2> */}

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Product">Product</Link></li>
      </ul>

      <Link to="/LoginPage"><button className="login-button">Login</button></Link>   
        
    </nav>
  );
}

export default Navbar;