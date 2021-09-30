import React from "react";
import { Link } from "react-router-dom";

function CatagoryItem(props) {
  const { strCategory, strCategoryThumb, strCategoryDescription } =
    props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="card-content">
      <h4 className="card-title"><b>{strCategory}</b></h4>
        <p>
          {strCategoryDescription.slice(0,60)}....
        </p>
      </div>
      <div className="card_action">
          <Link to={`/category/${strCategory}`} className="btn mgmg50">
              Watch catagory
          </Link>
      </div>
    </div>
  );
}

export default CatagoryItem;
