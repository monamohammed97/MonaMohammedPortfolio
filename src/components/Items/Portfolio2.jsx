import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Portfolio({ portfolio: { id, name, category, image, slug } }) {
  return (
    <Link to={`/${id}/${slug}`}>
      <div className="portfolio-item">
        <div className="details">
          <h4 className="title">{name}</h4>
          <span className="term">{category.join(",  ")}</span>
        </div>
        <span className="plus-icon">+</span>
        <div className="thumb">
          <img src={image} alt={name} loading="lazy" />
          <div className="mask"></div>
        </div>
      </div>
    </Link>
  );
}

export default Portfolio;
