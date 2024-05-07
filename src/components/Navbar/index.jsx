import { Link } from "react-router-dom";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  return (
    <>
      <nav className="flex w-full m-0 justify-between p-8 bg-white flex-wrap border-b border-gray-md border-solid">
        <p className="float-start basis-4/12">Logo</p>
        <ul className="flex justify-center gap-4 basis-4/12 text-gray-md">
          <li className="active:text-black">Stays</li>
          <li className="active:text-black">Experiences</li>
          <li className="active:text-black">Online Experiences</li>
        </ul>
        <ul className="flex justify-end gap-4 basis-4/12">
          <li>Airbnb your home</li>
          <li>Region icon</li>
          <li>Login</li>
        </ul>
        <div className="w-full flex justify-center searchBar mt-5">
          <form>
            <ul className="flex justify-center rounded-full border-solid border-gray-md border shadow-lg">
              <li className="hover:bg-gray-light rounded-full ps-10">
                <div className="border-r border-solid border-gray-md pe-20 my-3 hover:border-transparent _where">
                  <p className="text-xs font-semibold">Where</p>
                  <p className="font-thin text-sm">Search Destinations</p>
                </div>
              </li>
              <li className="ps-10 hover:bg-gray-light hover:rounded-full my-0 _checkInListItem">
                <div className="border-r border-solid border-gray-md pe-20 my-3 hover:border-transparent _checkIn">
                  <p className="text-xs font-semibold">Check in</p>
                  <p className="font-thin text-sm">Add dates</p>
                </div>
              </li>
              <li className="hover:bg-gray-light hover:rounded-full my-0 ps-10 _checkOutListItem">
                <div className="border-r border-solid border-gray-md pe-20 my-3 hover:border-transparent _checkOut">
                  <p className="text-xs font-semibold">Check out</p>
                  <p className="font-thin text-sm">Add dates</p>
                </div>
              </li>
              <li className=" hover:bg-gray-light hover:rounded-full my-0 ps-10 _whoListItem flex justify-evenly">
                <div className="pe-20 my-3">
                  <p className="text-xs font-semibold">Who</p>
                  <p className="font-thin text-sm">Add guests</p>
                </div>
                <button type="submit" className="bg-red rounded-full p-3 m-2">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-gray-light px-1"
                  ></FontAwesomeIcon>
                </button>
              </li>
            </ul>
          </form>
        </div>
      </nav>
    </>
  );
}
