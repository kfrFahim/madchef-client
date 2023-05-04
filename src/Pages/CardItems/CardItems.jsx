import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const CardItems = () => {
  const [chefdata, setChefdata] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    fetch("https://madachef-kekappa-server.vercel.app/chefdata/")
      .then((res) => res.json())
      .then((data) => setChefdata(data));
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-medium mt-[80px]">BEST MAXICAN CHEF'S</h1>
      <hr className="w-48 h-1 mx-auto my-10 bg-black" />

      <div>
        <div className="mx-14 my-6 gap-5 grid grid-cols md:grid-cols-3">
          {chefdata.map((cdata) => (
            <div key={cdata.id} className="">
              <div className=" card w-full border">
                <figure className="px-10 pt-10">
                  <img
                    src={cdata.chefPicture}
                    className="rounded-full w-28 h-28"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{cdata.chefName}</h2>

                  <p className="text-[16px] font-semibold ">
                    Experience : {cdata.yearsOfExperience} Years{" "}
                  </p>
                  <div className="flex gap-6">
                    <p>Recipes : {cdata.numberOfRecipes}</p>
                    <div className="flex items-center gap-2">
                      <FaThumbsUp className="items-center"></FaThumbsUp>
                      <p> {cdata.likes}</p>
                    </div>
                  </div>
                  <Rating
                    className="my-4"
                    style={{ maxWidth: 100 }}
                    value={rating}
                    onChange={setRating}
                  />
                  <div className="card-actions">
                    <Link to={`/recipedetails/${cdata.id}`}>
                      {" "}
                      <button className="btn btn-primary normal-case">
                        Recipes
                      </button>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardItems;
