import React from 'react';
import { Link } from 'react-router-dom'

function MealItem({strMeal, strMealThumb, idMeal}) {
    return (
        <div className="card">
        <div className="card-image">
          <img src={strMealThumb} alt={strMeal} />
        </div>
        <div className="card-content">
        <h4 className="card-title"><b>{strMeal}</b></h4>
        </div>
        <div className="card_action">
            <Link to={`/meal/${idMeal}`} className="btn mgmg50">
                Watch Recipe
            </Link>
        </div>
      </div>
    );
}

export default MealItem;