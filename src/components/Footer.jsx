import React from "react";
import { Link } from "react-router-dom";
import '../components/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3 className="footer-title">Contact Us</h3>
                <p className="footer-info">Email:
                    <a href="mailto:admin@admin.com" className="footer-link">
                        admin@admin.com
                    </a>
                </p>
                <p className="footer-info">Phone: +355 69 123 4567</p>
                <p className="footer-info">Address: Rruga Mbretresha Teut, Mitrovice, Kosove</p>
            </div>  
            <div className="footer-bottom">
                <p className="footer-copyright">© 2026 MyApp. All rights reserved.</p>
                <ul className="footer-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Product">Product</Link></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;