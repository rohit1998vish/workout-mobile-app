import React from "react";
import racing from "../Assests/cyclingracing.png";
import right from "../Assests/rightSide.png";
import { Link } from "react-router-dom";

const get = () => {
  return (
    <div className="mt-10 h-screen px-5">
    <div className="pt-20 flex justify-center gap-80">
    <div className=" pt-5 underline">
      <Link to="/track">Back</Link>
    </div>
    <div className="pt-5 underline">
      <Link to="/createaccount">Skip</Link>
    </div>
  </div>

      <div className="mt-5 flex justify-center">
        <img src={racing} alt="" />
      </div>
      <div className="mt-5">
        <h1 className="font-bold">Get Burn</h1>
        <p className="mt-5 text-justify">
          Are you referring to a fitness goal, like burning calories through
          exercise? If so, what specific activities or routines are you
          following to achieve this goal? Let me know how I can assist you in
          tracking your progress.
        </p>
      </div>
      <div className="h-auto w-10 mt-5 ml-[38%]">
        <Link to="/createaccount">
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

export default get;
