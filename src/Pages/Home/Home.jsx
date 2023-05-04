import React from "react";
import Banner from "../Banner/Banner";
import CardItems from "../CardItems/CardItems";
import OurService from "../OurService/OurService";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div className="text-center">
      <Banner></Banner>
      <CardItems></CardItems>
      <OurService></OurService>
      <Review></Review>
    </div>
  );
};

export default Home;
