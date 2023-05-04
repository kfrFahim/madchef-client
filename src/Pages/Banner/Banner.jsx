import React from "react";

const Banner = () => {
  return (
    <div className=" mx-14">
      <div className="relative">
        <div>
          <img
            className="w-full md:h-[500px] rounded-xl"
            src="https://thebarn-eco.com.au/wp-content/uploads/2021/07/menu.jpg"
            alt=""
          />
        </div>
        <div className="absolute sm:top-0 md:top-48 right-0 bottom-0 left-0 sm:text-[14px] sm:mb-5">
          <h1 className="text-white mr-12">
            <span className="md:text-6xl text-[#FAB803]">Welcome </span>{" "}
            <span className="text-3xl text-[#7E9E2E]">To </span>{" "}
            <span className="md:text-5xl font-semibold text-[#DB0000]">
              MadChef
            </span>{" "}
          </h1>
          <p className="md:text-3xl md:my-6 ml-10 text-white">
            {" "}
            The Original Dish
          </p>
          <p className="text-white md:text-3xl md:my-6 ml-10">
            {" "}
            Inspired Recipes For Your Kitchen Table
          </p>

          <button className="bg-[#FAB803] text-[#DB0000] text-base font-semibold md:px-5 md:py-2  rounded hover:bg-[#313131] ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
