import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const RecipeDetail = () => {

  const [isLiked, setIsLiked] = useState(false)

    const notify = () => {
        toast("Added in Favorite")
        setIsLiked(true)
    }


  const { id } = useParams();

  const [recipe, setRecipe] = useState([]);
  const [rating, setRating] = useState(4);

  useEffect(() => {
    fetch(`https://madachef-kekappa-server.vercel.app/chefdata/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, []);

  console.log(recipe);

  

  return (
    <div className="mx-14">
      <div className=" grid grid-cols md:grid-cols-2 bg-slate-100">
        <div>
          <img
            className="w-96 h-96 rounded mx-auto cover"
            src={recipe.chefPicture}
            alt=""
          />
        </div>
        <div className="text-center">
          <h2 className="text-4xl my-5">{recipe.chefName}</h2>

          <p className="my-3">
            {" "}
            {recipe.chefName} may have first donned her whites at twenty-seven,
            but she has since worked in the kitchens of Gordon Ramsay and Clare
            Smyth, been mentored by Angela Hartnett and headed up
            Michelin-starred Italian restaurant Murano. Today, she is at the
            helm of her woodfire-focused restaurant Hicce at Kings Cross and
            Islington pub Hicce Hart.
          </p>

          <p className="text-[16px] font-semibold my-5">
            Experience : {recipe.yearsOfExperience} Years{" "}
          </p>
          <div className="flex gap-12 justify-center">
            <p>Recipes : {recipe.numberOfRecipes}</p>
            <div className="flex items-center gap-2">
              <FaThumbsUp className="items-center"></FaThumbsUp>
              <p> {recipe.likes}</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-4xl text-center font-medium mt-[80px]">
        LATEST RECIPES FROM OUR CHEF'S
      </h1>
      <hr className="w-48 h-1 mx-auto my-20 bg-black" />

      <div className="grid grid-cols md:grid-cols-2 bg-slate-200 my-4 ">
              <figure>
                <img
                  className="w-80 h-80 mx-auto mt-12 items-center rounded"
                  src={recipe.recipeimg3}
                  alt="Album"
                />
              </figure>

              <div className="border p-5">
                <p className="font-bold text-[17px]">
                  Ingredients :{" "}
                  <span className="font-medium text-[15px]">
                    {recipe.ingredients3}
                  </span>
                </p>
                <p className="font-bold text-[17px]">
                  Instructions :{" "}
                  <span className="font-medium text-[15px]">
                    {recipe.instructions3}
                  </span>
                </p>
                <div className="card-actions justify-between">
                  <div className="flex items-center gap-3">
                    <p>Rating :</p>
                    <Rating
                      className="my-4"
                      style={{ maxWidth: 100 }}
                      value={rating}
                      readOnly={setRating}
                    />
                  </div>
                  <button onClick={notify} className={isLiked ? "opacity-50" : "btn"}>
                    Favourite
                  </button>
                </div>
              </div>
            </div>

      <div>
        <div className="border bg-slate-200">
          <div className="card-body">
            <div className="text-center">
              <h2 className=" text-4xl"> {recipe.name2}</h2>
              <p className="font-bold text-[17px] my-5">
                Description :{" "}
                <span className="font-medium text-[15px]">
                  {recipe.description2}
                </span>
              </p>
            </div>
            <div className="grid grid-cols md:grid-cols-2 ">
              <figure>
                <img
                  className="w-80 h-80 mx-auto mt-12 items-center rounded"
                  src={recipe.recipeimg2}
                  alt="Album"
                />
              </figure>

              <div className="border p-5">
                <p className="font-bold text-[17px]">
                  Ingredients :{" "}
                  <span className="font-medium text-[15px]">
                    {recipe.ingredients2}
                  </span>
                </p>
                <p className="font-bold text-[17px]">
                  Instructions :{" "}
                  <span className="font-medium text-[15px]">
                    {recipe.instructions2}
                  </span>
                </p>
                <div className="card-actions justify-between">
                  <div className="flex items-center gap-3">
                    <p>Rating :</p>
                    <Rating
                      className="my-4"
                      style={{ maxWidth: 100 }}
                      value={rating}
                      readOnly={setRating}
                    />
                  </div>

                  <button onClick={notify} className={isLiked ? "opacity-50" : "btn"}>
                    Favourite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border bg-slate-200 my-4">
          <div className="card-body">
            <div className="text-center">
              <h2 className=" text-4xl"> {recipe.name2}</h2>
              <p className="font-bold text-[17px] my-5">
                Description :{" "}
                <span className="font-medium text-[15px]">
                  {recipe.description2}
                </span>
              </p>
            </div>

            <div className="grid grid-cols md:grid-cols-2 ">
              <figure>
                <img
                  className="w-80 h-80 mx-auto mt-12 items-center rounded"
                  src={recipe.recipeimg3}
                  alt="Album"
                />
              </figure>

              <div className="border p-5">
                <p className="font-bold text-[17px]">
                  Ingredients :{" "}
                  <span className="font-medium text-[15px]">
                    {recipe.ingredients3}
                  </span>
                </p>
                <p className="font-bold text-[17px]">
                  Instructions :{" "}
                  <span className="font-medium text-[15px]">
                    {recipe.instructions3}
                  </span>
                </p>
                <div className="card-actions justify-between">
                  <div className="flex items-center gap-3">
                    <p>Rating :</p>
                    <Rating
                      className="my-4"
                      style={{ maxWidth: 100 }}
                      value={rating}
                      readOnly={setRating}
                    />
                  </div>
                  <button onClick={notify} className={isLiked ? "opacity-50" : "btn"}>
                    Favourite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
