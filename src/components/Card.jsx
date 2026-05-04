import React from 'react';
import '../components/Card.css';
import { useNavigate } from 'react-router-dom';

function Card() {

  const navigate  = useNavigate();
  

  const handleBuyNow= () => {
    navigate('/productdetails/4');
  };


  return (
    <div className="card">

      <img src="https://m.media-amazon.com/images/I/610LLQC8DhL._AC_SL1500_.jpg" alt="Titulli" className="card-image" />
      <h2 className="card-title">Smartwatch </h2>
      <p className="card-description">pershkrimi i produktit Smartwatch </p>
    <h3>Cmimi : 100$</h3>
    <button className="buttoni" onClick={handleBuyNow}>Blej Tani</button>

    </div>
  );
}

export default Card;