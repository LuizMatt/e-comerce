import React from "react";
import "./Card.css";

const Card = ({ title, description, imageUrl, price }) => {
  return (
    <div className="card">
      <img
        src={`http://localhost:3000${imageUrl}`}
        alt={title}
        className="card-image"
      />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-price">R$ {parseFloat(price).toFixed(2)}</p>
        <div className="card-buttons">
          <button className="card-button">Adicionar ao carrinho</button>
          <button className="card-outline">Fazer orçamento</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
