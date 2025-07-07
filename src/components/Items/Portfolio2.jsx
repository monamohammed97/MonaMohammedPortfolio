import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import {
  TbLocationShare
} from "react-icons/tb";

function Portfolio({ portfolio: { id, name, category, image, slug, demoLink } }) {
  return (
    <Link to={`/${id}/${slug}`}>
      <div className="portfolio-item">
        <div className="details">
          <h4 className="title">{name}</h4>
          <span className="term">{category.join(",  ")}</span>
        </div>
        <span className="plus-icon">+</span>
        <Link to={demoLink}  onClick={(e) => {
          e.stopPropagation(); 
        }} className="view-icon">
          <span>Live Preview </span>
          <TbLocationShare />
        </Link>

        <div className="thumb">
          <img src={image} alt={name} loading="lazy" />
          <div className="mask"></div>
        </div>
      </div>
    </Link>
  );
}

export default Portfolio;
