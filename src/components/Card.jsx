// src/components/Card.jsx
import React, { useState } from 'react';
import './Card.css';

const Card = ({ title, description, image, pdfUrl }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p className="card-description">
          {isReadMore ? description : `${description.substring(0, 100)}...`}
          <span className="read-more" onClick={toggleReadMore}>
            {isReadMore ? "Show less" : "Read more"}
          </span>
        </p>
        <div className="card-footer">
          <a href={pdfUrl} download className="download-button">
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
