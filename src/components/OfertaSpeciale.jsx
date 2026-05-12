import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../product";
import "./OfertaSpeciale.css";

function OfertaSpeciale() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featured = products[currentIndex];

  const prev = () => setCurrentIndex((i) => (i - 1 + products.length) % products.length);
  const next = () => setCurrentIndex((i) => (i + 1) % products.length);

  const originalPrice = (featured.saleprice * 1.15).toFixed(2);
  const discount = Math.round(((originalPrice - featured.saleprice) / originalPrice) * 100);

  return (
    <div className="oferta-wrapper">
      <h2 className="oferta-title">Oferta speciale</h2>
      <div className="oferta-container">

        {/* Majtas - produkti i zgjedhur */}
        <div className="oferta-featured">
          <button className="oferta-arrow left" onClick={prev}>&#8249;</button>
          <div className="oferta-featured-content">
            <img src={featured.img} alt={featured.name} className="oferta-featured-img" />
            <h3 className="oferta-featured-name">{featured.name}</h3>
            <div className="oferta-prices">
              <span className="oferta-sale-price">{featured.saleprice.toFixed(2)} €</span>
              <span className="oferta-original-price">{originalPrice} €</span>
              <span className="oferta-discount">-{discount}%</span>
            </div>
            <p className="oferta-save">
              Ju kurseni {(originalPrice - featured.saleprice).toFixed(2)} € &nbsp;
              <span className="oferta-discount">-{discount}%</span>
            </p>
            <Link to={`/productdetails/${featured.id}`} className="oferta-btn">
              🛒 SHTO NË SHPORTË
            </Link>
          </div>
          <button className="oferta-arrow right" onClick={next}>&#8250;</button>
        </div>

        {/* Djathtas - lista e produkteve */}
        <div className="oferta-list">
          {products.map((p) => {
            const orig = (p.saleprice * 1.15).toFixed(2);
            const disc = Math.round(((orig - p.saleprice) / orig) * 100);
            return (
              <Link to={`/productdetails/${p.id}`} key={p.id} className="oferta-list-item">
                <img src={p.img} alt={p.name} className="oferta-list-img" />
                <div className="oferta-list-info">
                  <p className="oferta-list-name">{p.name}</p>
                  <div className="oferta-list-prices">
                    <span className="oferta-sale-price">{p.saleprice.toFixed(2)} €</span>
                    <span className="oferta-original-price">{orig} €</span>
                    <span className="oferta-discount">-{disc}%</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default OfertaSpeciale;
