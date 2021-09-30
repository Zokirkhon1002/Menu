import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getMealById } from "../api";
import Loader from "../components/Loader";

function Recipe() {
  const { id } = useParams();
  console.log(id);
  const [recipe, setRecipe] = useState([]);
  const { goBack } = useHistory();
  const [showRecipe, setShowRecipe] = useState(false)

  const handleRecipeShow = ()=>{
    setShowRecipe(!showRecipe)
  }

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, []);

  return (
    <div>
      <button className="btn mgmg50 mgmgmg100" onClick={goBack}>
        Go back
      </button>
      {!recipe.idMeal ? (
        <Loader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h6>
            <b>Category:</b> {recipe.strCategory}
          </h6>
          {recipe.strArea ? (
            <h6>
              <b>Area:</b> {recipe.strArea}
            </h6>
          ) : null}
          <p>{recipe.strInstructions}</p>
          <button onClick={handleRecipeShow} className="btn mgmg50">Show Recipe</button>
          {showRecipe ? (
          <table className="centered">
          <thead>
            <tr>
              <th>Ingredients</th>
              <th>Measure</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(recipe).map((key) => {
              if (key.includes("Ingredient") && recipe[key]) {
                return (
                  <tr>
                    <td>{recipe[key]}</td>
                    <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
          ): null}

          {recipe.strYoutube ? (
            <div className="row">
              <h5>Video Recipe</h5>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                title={id}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}


export default Recipe;
