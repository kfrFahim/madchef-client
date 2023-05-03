import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CardItems = () => {

     const [chefdata , setChefdata] = useState([])

  useEffect(()=>{
     fetch("http://localhost:5000/chefdata/")
     .then(res => res.json())
     .then(data => setChefdata(data))
  } , [])

     console.log(chefdata);

     return ( 

<div className='mx-14 my-6 gap-5 grid grid-cols md:grid-cols-3'>
     {
          chefdata.map(cdata => <div className=''> 
               <div className=" card w-full border">
          <figure className="px-10 pt-10">
            <img src={cdata.chefPicture} className="rounded-full w-28 h-28" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{cdata.chefName}</h2>
               
          <p className='text-[16px] font-semibold '>Experience : {cdata.yearsOfExperience} Years </p>
          <div className='flex gap-3'>
            <p>Recipes : {cdata.numberOfRecipes}</p>
            <p>Likes : {cdata.likes}</p>
               </div>
            <div className="card-actions">

               <Link to={`/recipedetails/${cdata.id}`}> <button  className="btn btn-primary normal-case">Recipes</button> </Link>
              
            </div>
          </div>
        </div>
          </div> )
     }

</div>
     );
};

export default CardItems;