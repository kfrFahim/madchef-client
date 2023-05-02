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
               <div className=" card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={cdata.chefPicture} className="rounded-xl w-24 h-24" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{cdata.chefName}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">

               <Link to={`/recipedetails`}> <button  className="btn btn-primary">Buy Now</button> </Link>
              
            </div>
          </div>
        </div>
          </div> )
     }

</div>
     );
};

export default CardItems;