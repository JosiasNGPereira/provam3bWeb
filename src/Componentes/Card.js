// src/components/Card.js
import React from 'react';
import '../Styles/Card.css';

const Card = () => {
  const comments = [
    "Esse lugar é maravilhoso! A vista é deslumbrante e a comida é deliciosa. - Ana",
    "Tive uma experiência incrível! Recomendo a todos que visitem. - Carlos",
    "Lugar perfeito para relaxar e se reconectar com a natureza. - Mariana"
  ];

  return (
    <div className="card-container">
      {comments.map((comment, index) => (
        <div className="card" key={index}>
          <p>{comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
