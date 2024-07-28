import React from "react";

const Card = ({title, data}) => {
  return (
    <div className="weather-card">
      <h4>{title}</h4>
      <p>{data}</p>
    </div>
  );
};

export default Card;
