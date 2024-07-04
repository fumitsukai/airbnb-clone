import { FaFacebookSquare, FaGoogle, FaApple } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import "./index.css";

export function SignupModal({ setToggleSignUp }) {
  return (
    <>
      <div className="bg-white w-2/5 mx-auto shadow-lg rounded-lg border border-gray-light relative">
        <button
          className="fixed rounded-full hover:bg-gray-light p-2 top-18 mt-3 ms-6"
          onClick={() => {
            setToggleSignUp(false);
          }}
        >
          <FaXmark size={18} />
        </button>
        <h1 className="font-bold text-center border-b py-4">
          Log in or sign up
        </h1>
        <div className="w-full h-full p-6">
          <h2 className="text-2xl font-medium mb-6 mt-3">Welcome to Airbnb</h2>
          <form action="" className="w-full my-4 border-b pb-6">
            <input
              type="text"
              name=""
              id=""
              className="w-full border rounded-t-md h-12 p-2"
              placeholder="Country/Region"
            />
            <input
              type="text"
              name=""
              id=""
              className="w-full border rounded-b-md h-12 p-2"
              placeholder="Phone number"
            />
            <p className="text-xs font-light my-3">
              We'll call or text you to confirm your number. Standard message
              and data rates apply.<a>Privacy Policy</a>
            </p>
            <button className="w-full bg-red rounded-md h-12 text-white ">
              Continue
            </button>
          </form>
          <div className="w-full mt-6 mb-2 text-sm font-medium">
            <button className="w-full border-2 border-black p-2 px-6 rounded-md mb-4 hover:bg-gray-light">
              <FaFacebookSquare
                className="m-auto float-start"
                size={24}
                color="#3b5998"
              />
              Continue with Facebook
            </button>
            <button className="w-full border-2 border-black p-2 px-6 rounded-md mb-4 hover:bg-gray-light">
              <FaGoogle className="m-auto float-start google" size={24} />
              Continue with Google
            </button>
            <button className="w-full border-2 border-black p-2 px-6 rounded-md mb-4 hover:bg-gray-light">
              <FaApple className="m-auto float-start" size={24} />
              Continue with Apple
            </button>
            <button className="w-full border-2 border-black p-2 px-6 rounded-md mb-4 hover:bg-gray-light">
              <MdOutlineEmail className="m-auto float-start" size={24} />
              Continue with email
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
