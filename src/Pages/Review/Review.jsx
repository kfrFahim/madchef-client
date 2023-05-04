import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Review = () => {
  const [rating, setRating] = useState(5);

  return (
    <div className="mx-16">
      <h1 className="text-4xl font-medium mt-[80px]">
        Check out what our customers are saying on Google!
      </h1>
      <hr className="w-48 h-1 mx-auto my-10 bg-black" />

      <div className="grid grid-cols md:grid-cols-4 gap-4">
        <div className="bg-white shadow p-3">
          <div className="flex justify-center mb-3">
            <img
              className="w-6 h-6"
              src="https://s3.romw-cdn.co/media/1/1422/14212885/conversions/ACB-R5Srvpid08d2VRPY0TZPCrsRc7HplejvishdGMm9fA=s240-c-c0x00000000-cc-rp-mo-br100-60px.png"
              alt=""
            />
            <div className="text-center">
              <h4>Christina McClelland</h4>
              <Rating
                className="my-4 ml-5"
                style={{ maxWidth: 100 }}
                value={rating}
                onChange={setRating}
              />
              <p>Apr 25, 2022</p>
            </div>
          </div>
          <p>
            This is the second time that we have used APCS and they were
            incredible once again—outstanding food, service, timing and clean
            up. I literally did not have to lift a finger and my guests raved
            about the food all night. I would definitely recommend this company
            for big or small groups—our first event was for six people and the
            second for 24. 5 stars all around.
          </p>
        </div>

        <div className="bg-white shadow p-3">
        <div className="flex justify-center mb-3">
            <img
              className="w-6 h-6"
              src="https://s3.romw-cdn.co/media/1/1422/14212885/conversions/ACB-R5Srvpid08d2VRPY0TZPCrsRc7HplejvishdGMm9fA=s240-c-c0x00000000-cc-rp-mo-br100-60px.png"
              alt=""
            />
            <div className="text-center">
              <h4>E Myers</h4>
              <Rating
                className="my-4 ml-5"
                style={{ maxWidth: 100 }}
                value={rating}
                onChange={setRating}
              />
              <p>Sep 5, 2022</p>
            </div>
          </div>
          <p>

          We received this service as a gift. 5 stars!! Would highly recommend for personal and professional occasions.The chefs introduced each course and their bubbly energetic personalities made everything outstanding!
          
          </p>
        </div>

        <div className="bg-white shadow p-3">
        <div className="flex justify-center mb-3">
            <img
              className="w-6 h-6"
              src="https://s3.romw-cdn.co/media/1/1422/14212885/conversions/ACB-R5Srvpid08d2VRPY0TZPCrsRc7HplejvishdGMm9fA=s240-c-c0x00000000-cc-rp-mo-br100-60px.png"
              alt=""
            />
            <div className="text-center">
              <h4>Bradley Sosebee</h4>
              <Rating
                className="my-4 ml-5"
                style={{ maxWidth: 100 }}
                value={rating}
                onChange={setRating}
              />
              <p>Feb 25, 2023</p>
            </div>
          </div>
          <p>
            
          A customer for years, Atlanta Personal Chef Service has created & delivered several fabulous meals for book clubs, supper clubs, and dinner parties. Their food is tasty and delicious! APCS has wonderful presentation and easy to follow re-heat instructions. *****
          
          </p>
        </div>

        <div className="bg-white shadow p-3">
        <div className="flex justify-center mb-3">
            <img
              className="w-6 h-6"
              src="https://s3.romw-cdn.co/media/1/1422/14212885/conversions/ACB-R5Srvpid08d2VRPY0TZPCrsRc7HplejvishdGMm9fA=s240-c-c0x00000000-cc-rp-mo-br100-60px.png"
              alt=""
            />
            <div className="text-center">
              <h4>Will Lovett</h4>
              <Rating
                className="my-4 ml-5"
                style={{ maxWidth: 100 }}
                value={rating}
                onChange={setRating}
              />
              <p>Mar 16, 2022</p>
            </div>
          </div>
          <p>
            
          What an amazing night with Chef Jason and Chel. The Cauliflower soup was to die for with homemade Parmesan crisp and truffle oil as topping, the salad was delicious followed by steak and lobster as our entree. The chess pie was so delicious and paired amazing with a nice bottle of cab!  The chefs introduced each course and their bubbly energetic personalities made everything outstanding!
          
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
