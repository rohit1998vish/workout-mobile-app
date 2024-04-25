import React from "react";
import run from "../Assests/runAway.png";
import right from "../Assests/rightSide.png";
import { Link } from "react-router-dom";

const Track = () => {
  return (
    <div className="h-screen  px-10">
      <div className="pt-20 flex justify-center gap-80">
        <div className=" pt-5 underline">
          <Link to="/">Back</Link>
        </div>
        <div className="pt-5 underline">
          <Link to="/get">Skip</Link>
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <img src={run} alt="" />
      </div>
      <div className=" mt-5 text-center">
        <h1 className="font-bold">Track Your Goal</h1>
        <p className=" mt-2 text-center">
          Sure, I can help you track your goals! What goal are you currently
          working on?
        </p>
      </div>

      <div className="w-10 mt-5 ml-[38%]">
        <Link to="/get">
          <img
            className="bg-blue-500 rounded-full p-1.5 hover:bg-white cursor-pointer"
            src={right}
            alt="btn"
          />
        </Link>
      </div>
    </div>
  );
};

export default Track;
