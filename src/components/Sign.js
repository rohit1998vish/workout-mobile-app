import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import { Link } from "react-router-dom";

const Sign = () => {
  return (
    <div className="bg-gray-300 my-40 rounded-lg mx-10">
      <form className="text-center">
        <h1 className="my-5 pt-5">Welcome Back</h1>
        <input
          className="rounded-full p-2"
          type="Email"
          placeholder="Enail id"
        />
        <br />
        <br />
        <input
          className="rounded-full p-2"
          type="passwod"
          placeholder="Password"
        />
        <br />
      </form>
      <div className="flex justify-center">
        <p className="mt-2 underline">Forgot your passwod?</p>
      </div>
      <br />
      <div className="pb-5 text-center">
        <Link
          to="/goalspage"
          className="bg-blue-300 text-white rounded-2xl px-10 py-4"
        >
          Sign In
        </Link>
      </div>
      <hr />
      <div className="flex justify-center gap-5 text-4xl py-4">
        <FcGoogle />
        <IoLogoFacebook />
      </div>
      <div className="py-5 text-center">
        <p className="">
          Don't have an account yet?
          <Link to="/createaccount" className=" text-blue-600 underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Sign;
