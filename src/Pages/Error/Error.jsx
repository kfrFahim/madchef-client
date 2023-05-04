import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="mx-14">
      <img
        className="w-[600px] h-[450px] m-auto"
        src="https://cdn.dribbble.com/users/1012566/screenshots/4187820/topic-2.jpg"
        alt=""
      />

      <div className="flex justify-center my-8">
        <Link className="text-center" to="/">
          <button className="btn border bg-white text-blue-500">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
