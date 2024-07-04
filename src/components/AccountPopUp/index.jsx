import { useState } from "react";

export function AccountPopup({ setToggleSignUp, setAccountToggle }) {
  return (
    <>
      <div className="absolute right-1 top-12 border border-gray-light w-60 rounded-lg flex flex-col items-start shadow-lg bg-white z-50 py-2 text-sm font-light">
        <div className="w-full border-b mb-2">
          <button
            className="w-full text-start hover:bg-gray-light py-3 px-4 font-semibold"
            onClick={() => {
              setAccountToggle(false);
              setToggleSignUp(true);
            }}
          >
            Sign Up
          </button>
          <button
            className="w-full text-start hover:bg-gray-light py-3 mb-2 px-4"
            onClick={() => {
              setAccountToggle(false);
              setToggleSignUp(true);
            }}
          >
            Log In
          </button>
        </div>
        <button className="w-full text-start hover:bg-gray-light py-3 px-4">
          Gift Cards
        </button>
        <button className="w-full text-start hover:bg-gray-light py-3 px-4">
          Airbnb your home
        </button>
        <button className="w-full text-start hover:bg-gray-light py-3 px-4">
          Help Centre
        </button>
      </div>
    </>
  );
}
