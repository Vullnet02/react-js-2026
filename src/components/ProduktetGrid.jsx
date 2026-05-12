import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../product";
import "./ProduktetGrid.css";

const categories = ["Për ty", "Gaming", "Kompjuter", "Laptop", "Maus", "Tastierë", "TV", "Kufje & Mikrofon"];
const badges = ["Risi", "E shitur", "Risi", "Risi", "24h", "Outlet", "Risi", "E shitur"];
const badgeColors = ["#4fc3f7", "#ff7043", "#4fc3f7", "#4fc3f7", "#ff7043", "#ff7043", "#4fc3f7", "#ff7043"];

function ProduktetGrid() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="pg-wrapper">
      <h2 className="pg-title">Të rekomanduara</h2>

      <div className="pg-tabs">
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`pg-tab ${activeTab === i ? "active" : ""}`}
            onClick={() => setActiveTab(i)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="pg-grid">
        {products.map((p, i) => {
          const originalPrice = (p.saleprice * 1.15).toFixed(2);
          const discount = Math.round(((originalPrice - p.saleprice) / originalPrice) * 100);
          const badge = badges[i % badges.length];
          const badgeColor = badgeColors[i % badgeColors.length];
          return (
            <Link to={`/productdetails/${p.id}`} key={p.id} className="pg-card">
              <div className="pg-badge" style={{ background: badgeColor }}>{badge}</div>
              <button className="pg-heart" onClick={(e) => e.preventDefault()}>&#9825;</button>
              <img src={p.img} alt={p.name} className="pg-img" />
              <div className="pg-info">
                <p className="pg-name">{p.name}</p>
                <p className="pg-desc">{p.description}</p>
                <div className="pg-prices">
                  <span className="pg-sale">{p.saleprice.toFixed(2)} €</span>
                  <span className="pg-discount-badge">-{discount}%</span>
                </div>
                <span className="pg-original">{originalPrice} €</span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="pg-banner">
        <div className="pg-banner-text">
          <p className="pg-banner-sub">Mos e lë n'shportë.</p>
          <h2 className="pg-banner-title">Bleje sot!</h2>
          <p className="pg-banner-desc">Çdo produkt, pa përjashtim.<br /><strong>Zbritje deri në 60%</strong></p>
          <Link to="/product" className="pg-banner-btn">BLEJ TANI</Link>
        </div>
        <img
          src="https://50cdn.gjirafamall.tech/images/4c359a29-25e7-4cd2-992b-722bb1da6d5c/4c359a29-25e7-4cd2-992b-722bb1da6d5c.jpeg?w=1046&h=400&fit=crop&auto=format"
          alt="banner"
          className="pg-banner-img"
        />
      </div>
    </div>
  );
}

export default ProduktetGrid;
