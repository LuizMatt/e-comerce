  import React from "react";
  import "./Card.css"; 

  const Card = ({ title, description, imageUrl }) => {
    return (
      <div className="card">
        <img src={imageUrl} alt={title} className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <button className="card-button"> Adicionar ao carrinho</button>
        </div>
      </div>
    );
  };

  export default Card;
