import React from "react";
import { Link } from "react-router-dom";

const goalsPage = () => {
  return (
    <div className="px-10 py-10 my-40 ">
      <div className="bg-slate-200 rounded-lg mx-10">
        <div className="text-2xl text-center">
          <h1 className="pt-4">What are your goals?</h1>
        </div>
        <div className="mt-2 px-5">
          <p className=" ">
            Weight Loss <input type="checkbox" />
          </p>
          <p>
            Muscle Gain <input type="checkbox" />
          </p>
          <p>
            General Fitness <input type="checkbox" />
          </p>
          <p>
            Flexibility and Mobility <input type="checkbox" />
          </p>
          <p>
            Event - specific training <input type="checkbox" />
          </p>
          <p>
            Mindfulness and Mental Health <input type="checkbox" />
          </p>
        </div>
        <div className="py-5 text-center">
          <Link to="/workout">Confirm</Link>
        </div>
      </div>
    </div>
  );
};

export default goalsPage;
