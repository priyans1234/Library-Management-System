import React from 'react';
import './Card.css';

const Card = ({ imageSrc, name, description }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="Card" className="card-image" />
      <div className="card-content">
        <h2 className="card-name">{name}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;






