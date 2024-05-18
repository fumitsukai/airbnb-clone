import { Link } from "react-router-dom";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import australia from "/img/au-03.png";
import europe from "/img/eu-c-04.png";
import world from "/img/wrld-15.png";
import { MapBtn } from "../MapBtn";
import Calendar from "react-calendar";
import { DatePicker } from "../DatePicker";

export function Navbar() {
  const form = useRef(null);
  const [search, setSearch] = useState(null);
  const handleClick = (e) => {
    setSearch(e.target.getAttribute("name"));
    console.log(e.target.getAttribute("name"));
  };

  function handleOutsideClick(e) {
    if (form.current && !form.current.contains(e.target)) {
      setSearch(null);
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  }, []);

  function handleChange(val1, val2) {
    console.log(val1, val2);
  }

  return (
    <>
      <nav className="flex w-full m-0 justify-between px-10 py-5 bg-white flex-wrap border-b border-gray-md border-solid">
        <p className="float-start basis-4/12">Logo</p>
        <ul className="flex justify-center gap-4 basis-4/12 text-gray-md mb-3">
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
          <form ref={form}>
            <ul className="flex justify-center rounded-full border-solid border-gray-md border shadow-lg">
              <li
                className="hover:bg-gray-light rounded-full ps-8"
                name="where"
              >
                <div
                  className="border-r border-solid border-gray-md pe-24 my-3  hover:border-transparent _where"
                  onClick={handleClick}
                  name="where"
                >
                  <p className="text-xs font-semibold" name="where">
                    Where
                  </p>
                  <input
                    className="text-sm focus:outline-none bg-transparent"
                    type="text"
                    placeholder="Search Destination"
                    name="where"
                  ></input>
                </div>
              </li>
              <li
                className="ps-6 hover:bg-gray-light hover:rounded-full my-0 _checkInListItem"
                name="checkin"
                onClick={handleClick}
              >
                <div
                  className="border-r border-solid border-gray-md pe-12 my-3 hover:border-transparent _checkIn"
                  name="checkin"
                >
                  <p className="text-xs font-semibold" aria-disabled>
                    Check in
                  </p>
                  <p className="font-thin text-sm">Add dates</p>
                </div>
              </li>
              <li className="hover:bg-gray-light hover:rounded-full my-0 ps-6 _checkOutListItem">
                <div className="border-r border-solid border-gray-md pe-12 my-3 hover:border-transparent _checkOut">
                  <p className="text-xs font-semibold">Check out</p>
                  <p className="font-thin text-sm">Add dates</p>
                </div>
              </li>
              <li className=" hover:bg-gray-light hover:rounded-full my-0 ps-6 _whoListItem flex justify-evenly">
                <div className="pe-32 my-3">
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
            {search == "where" && (
              <div className="absolute w-4/12 border bg-white rounded-3xl mt-3 shadow-lg z-50 p-4 ps-7">
                <h4 className="font-semibold mb-3 mt-6">Search by region</h4>
                <div className="grid grid-cols-3">
                  <MapBtn img={world} name="I'm Flexible" />
                  <MapBtn img={europe} name="Europe" />
                  <MapBtn img={australia} name="Australia" />
                </div>
              </div>
            )}
            {search == "checkin" && (
              <div className="absolute w-7/12 bg-white grid grid-cols-2 h-96">
                <DatePicker />
              </div>
            )}
          </form>
        </div>
      </nav>
    </>
  );
}
