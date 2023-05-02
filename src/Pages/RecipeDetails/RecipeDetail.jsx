import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {

     const { id } = useParams();

     const [recipe , setRecipe] = useState([])

     useEffect( () => {
          fetch(`http://localhost:5000/chefdata/${id}`)
          .then(res => res.json())
          .then(data => setRecipe(data))

          console.log(recipe);
     },[])


     return (
          <div>
               Recipe details here
          </div>
     );
};

export default RecipeDetail;