import React from "react";
import './Card.css'
const Card = (props) => {
    const{title,thumbnail,lectures,rating,enrolled,profileImg,instructor,price} = props.name;
  return (
    <div className="col text-start">
      <div className="card h-100 shadow">
        <img src={thumbnail} className="card-img-top" alt="..." />
        <div className="card-body p-4">
            <p className="d-flex justify-content-between">
            <span><i className="bi bi-book"></i> {lectures} Lesson</span>
            <span><i className="bi bi-star-fill text-warning"></i> {rating}({enrolled})</span>
            </p>
          <h5 className="card-title mb-4">{title}</h5>
          <img src={profileImg} className="round-img me-3" alt="..." />
          <span>{instructor}</span>
          <hr />
          <p className="d-flex justify-content-between">
          <span>{price}</span>
          <a href="#" className="text">View Deyails <i class="bi bi-arrow-right"></i></a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
