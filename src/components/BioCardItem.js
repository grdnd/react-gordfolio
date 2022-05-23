import React from "react";
import { Link } from "react-router-dom";

function BioCardItem(props) {
  return (
    <>
      <li className="bio__cards__item">
        <Link className="bio__cards__item__link" to={props.path}>
          <figure
            className="bio__cards__item__pic-wrap"
            data-category={props.label}
          >
            <img
              src={props.src}
              alt=""
              className="bio__cards__item__img picture"
            />
          </figure>
          <div className="bio__cards__item__info">
            <h5 className="bio__cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default BioCardItem;
