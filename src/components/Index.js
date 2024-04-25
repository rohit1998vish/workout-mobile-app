import React from "react";
import gif from "../Assests/cyclingimg.png";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="h-screen bg-gray-500 text-white">
      <div className="pt-[20%]">
        <h1 className="lg:pt-auto text-center  rounded-lg">
          Welcome To My Gym 
        </h1>
      </div>
      <div className="mt-10 flex justify-center">
        <img className="lg:h-auto w-auto" src={gif} alt="giflogo" />
      </div>
      <div className="flex justify-center">
        <Link to="track" className="text-2xl underline hover:text-white">
          Start
        </Link>
      </div>
    </div>
  );
};

export default index; 
