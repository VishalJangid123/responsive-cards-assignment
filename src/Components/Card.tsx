import React from "react";
import { Place, Tag } from "../Places.type";

export default function Card({ place }: Place | any) {
  return (
    <div className="card" key={place.id}>
      <div className="card-image-container">
        <img src={place.img_url} alt={place.name} className="card-img" />
        <div className="card-name">
          <h3>{place.name}</h3>
        </div>
      </div>
      <div className="card-content">
        <p>{place.body}</p>
      </div>
      <div className="tags">
        {place.tagsNames.map((tag: Tag) => (
          <span className="tag" key={tag.id}>
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
}
