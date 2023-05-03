import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/chefdata/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, []);

  console.log(recipe);

  return (
    <div className="mx-14">
      Recipe details here
      <div>
        <div className="card grid grid-cols-2 bg-base-100 shadow-xl">
          <figure>
            <img className="" src={recipe.recipeimg1} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Recipe Name : {recipe.name1}</h2>
            <p className="font-bold text-[17px]">Description : <span className="font-medium text-[15px]">{recipe.description1}</span></p>
            <p className="font-bold text-[17px]">Ingredients : <span className="font-medium text-[15px]">{recipe.ingredients1}</span></p>
            <p className="font-bold text-[17px]">Instructions : <span className="font-medium text-[15px]">{recipe.instructions1}</span></p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="card grid grid-cols-2 bg-base-100 shadow-xl">
          <figure>
            <img src={recipe.recipeimg2} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Recipe Name : {recipe.name2}</h2>
            <p className="font-bold text-[17px]">Description : <span className="font-medium text-[15px]">{recipe.description2}</span></p>
            <p className="font-bold text-[17px]">Ingredients : <span className="font-medium text-[15px]">{recipe.ingredients2}</span></p>
            <p className="font-bold text-[17px]">Instructions : <span className="font-medium text-[15px]">{recipe.instructions3}</span></p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="card grid grid-cols-2 bg-base-100 shadow-xl">
          <figure>
            <img src={recipe.recipeimg3} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Recipe Name : {recipe.name3}</h2>
            <p className="font-bold text-[17px]">Description : <span className="font-medium text-[15px]">{recipe.description3}</span></p>
            <p className="font-bold text-[17px]">Ingredients : <span className="font-medium text-[15px]">{recipe.ingredients3}</span></p>
            <p className="font-bold text-[17px]">Instructions : <span className="font-medium text-[15px]">{recipe.instructions3}</span></p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
