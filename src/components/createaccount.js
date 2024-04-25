import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io";
import { Link } from "react-router-dom";

const createaccount = () => {
  return (
    <div className="bg-gray-300 my-40 rounded-lg mx-10"> 
      <form className="text-center">
        <h1 className="my-5 pt-5">Create an account</h1>
        <input
          className="rounded-full p-2"
          type="text"
          placeholder="First Name"
        />{" "}
        <br />
        <br />
        <input
          className="rounded-full p-2"
          type="text"
          placeholder="Last Name"
        />
        <br />
        <br />
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
        <br /><br />
      </form>
      <div className="flex justify-center">
        <input className="hover:bg-blue-600" type="checkbox" />
        <p>
          I agree to all <span className="text-blue-600 underline">T&C</span>
          and
          <span className="text-blue-600 underline cursor-pointer">
            Privacy Policy
          </span>
        </p>
      </div>
      <br />
      <div className="pb-5 text-center">
        <button className="bg-blue-300 text-white rounded-2xl px-10 py-4">
          Create an Account
        </button>
      </div>
      <hr />
      <div className="flex justify-center gap-5 text-4xl py-4">
        <FcGoogle />
        <IoLogoFacebook />
      </div>
      <div className="py-5 text-center">
        <p className="">
          Already have an account?
          <Link to="/sign" className=" text-blue-600 underline">
            Login
          </Link> 
        </p>
      </div>
    </div>
  );
};

export default createaccount;
