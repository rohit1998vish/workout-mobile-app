import React from "react";
import { Link } from "react-router-dom";
import { CiSquareChevLeft } from "react-icons/ci";
import fitness from "../Assests/fitness-tracker.png";
import { CgGym } from "react-icons/cg";
import { MdOutlineSportsGymnastics } from "react-icons/md";

const workout = () => {
  return (
    <div className="text-justify-center">
      <div className="mt-40  gap-20">
        <div className="px-10 h-12 w-12">
          <Link to="/goalspage">
            <CiSquareChevLeft />
          </Link>
        </div>
        <div className="text-center">
          <h1 className="font-bold">Workout Tracker</h1>
        </div>
      </div>
      <div className="h-40 w-80 mt-10 ">
        <img className="ml-[25%]" src={fitness} alt="" />
      </div>
      <div className="px-10 text-center border rounded-md mx-5 shadow-md">
        <p className="font-extrabold">!</p>
        <p>You've burned fewer calories than yesterday. Time to get moving!</p>
      </div>
      <div className="flex justify-between px-8 mt-5">
        <p className="font-bold text-gray-600">Upcoming workout</p>
        <p className="text-gray-400">See more</p>
      </div>
      <div className="flex justify-around border mx-8 mt-2">
        <div className="py-4">
          <CgGym />
        </div>
        <p className="py-3">Full Body Workout</p>
        <p className="py-3 text-gray-400">Today 3 pm</p>
        <input type="checkbox" />
      </div>

      <div className="flex justify-around border mx-8 mt-2">
        <div className="py-4">
          <MdOutlineSportsGymnastics />
        </div>
        <p className="py-3">Upper Body Workout</p>
        <p className="py-3 text-gray-400">Today 5:30 am</p>
        <input type="checkbox" />
      </div>

      <div className="my-4 px-8">
        <p>What Do You Want to Train</p>
      </div>
      <div className="px-2 py-2 border mx-8 mt-2 bg-slate-200 shadow-md">
        <p>Full Body workout</p>
        <p>Arms</p>
        <p>Chest</p>
      </div>
      <div className="text-center my-8 underline text-blue-700">
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  );
};

export default workout; 
