import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import australia from "/img/au-03.png";
import europe from "/img/eu-c-04.png";
import world from "/img/wrld-15.png";
import { MapBtn } from "../MapBtn";
import { DatePicker, classNames } from "../DatePicker";
import { format } from "date-fns";
import { motion as m } from "framer-motion";

export default function SearchBarBig({ search, setSearch, scroll }) {
  const [selectedDayCheckin, setSelectedDayCheckin] = useState(null);
  const [selectedDayCheckout, setSelectedDayCheckout] = useState(null);

  const handleClick = (e) => {
    setSearch(e.target.getAttribute("name"));
  };
  return (
    <>
      <ul
        className={classNames(
          "relative flex justify-center rounded-full border-solid border-gray-md border shadow-lg w-full",
          search != null && "bg-gray-light"
        )}
      >
        <li
          className={classNames(
            "hover:bg-gray-light rounded-full ps-8",
            search === "where" && "bg-white hover:bg-white shadow-lg"
          )}
          name="where"
        >
          <div
            className={classNames(
              "border-r border-solid border-gray-md pe-16 my-3  hover:border-transparent _where",
              (search == "where" || search == "checkin") && "border-transparent"
            )}
            onClick={handleClick}
            name="where"
          >
            <p className="text-xs font-semibold" name="where">
              Where
            </p>
            <input
              className={classNames(
                "text-sm focus:outline-none bg-transparent"
              )}
              type="text"
              placeholder="Search Destination"
              name="where"
            ></input>
          </div>
        </li>
        <li
          className={classNames(
            "ps-6 hover:bg-gray-light rounded-full my-0 _checkInListItem",
            search === "checkin" && "bg-white hover:bg-white shadow-lg"
          )}
          name="checkin"
          onClick={handleClick}
        >
          <div
            className={classNames(
              "border-r border-solid border-gray-md pe-12 my-3 hover:border-transparent _checkIn",
              (search == "checkin" || search == "checkout") &&
                "border-transparent"
            )}
            name="checkin"
          >
            <p className="text-xs font-semibold" name="checkin">
              Check in
            </p>
            <p className={classNames("font-thin text-sm")} name="checkin">
              {selectedDayCheckin && format(selectedDayCheckin, "MMM dd")}
              {!selectedDayCheckin && "Add Dates"}
            </p>
          </div>
        </li>
        <li
          className={classNames(
            "hover:bg-gray-light rounded-full my-0 ps-6 _checkOutListItem",
            search == "checkout" && "bg-white hover:bg-white shadow-lg"
          )}
          name="checkout"
          onClick={handleClick}
        >
          <div
            className={classNames(
              "border-r border-solid border-gray-md pe-12 my-3 hover:border-transparent _checkOut",
              (search == "checkout" || search == "who") && "border-transparent"
            )}
            name="checkout"
          >
            <p className="text-xs font-semibold" name="checkout">
              Check out
            </p>
            <p className={classNames("font-thin text-sm")} name="checkout">
              {selectedDayCheckout && format(selectedDayCheckout, "MMM dd")}
              {!selectedDayCheckout && "Add Dates"}
            </p>
          </div>
        </li>
        <li
          className={classNames(
            "hover:bg-gray-light rounded-full my-0 ps-6 _whoListItem flex justify-evenly",
            search == "who" && "bg-white hover:bg-white shadow-lg"
          )}
          onClick={handleClick}
          name="who"
        >
          <div className="pe-48 my-3" name="who">
            <p className="text-xs font-semibold" name="who">
              Who
            </p>
            <p className={classNames("font-thin text-sm")} name="who">
              Add guests
            </p>
          </div>
          <m.button
            type="submit"
            className={classNames(
              "bg-red rounded-full p-3 m-2 text-white absolute end-0 transition-all ease-out duration-700"
              // search != null &&
              //   "after:content-['Search'] after:transition-all after:ease-out after:duration-700"
            )}
          >
            <FontAwesomeIcon
              icon={faSearch}
              className="text-gray-light px-1"
            ></FontAwesomeIcon>
            {search != null && <span>Search</span>}
          </m.button>
        </li>
      </ul>
      {search == "where" && (
        <div className="absolute  border bg-white rounded-3xl mt-3 shadow-lg z-40 p-5">
          <h4 className="font-semibold mb-3 mt-6">Search by region</h4>
          <div className="grid grid-cols-3">
            <MapBtn img={world} name="I'm Flexible" />
            <MapBtn img={europe} name="Europe" />
            <MapBtn img={australia} name="Australia" />
          </div>
        </div>
      )}
      {(search == "checkin" || search == "checkout") && (
        <div className="absolute w-3/5 bg-white rounded-3xl mt-3 shadow-lg p-10 border border-solid border-gray-md">
          <div className="flex justify-center">
            <div className="border border-solid p-1 grid grid-cols-3 w-2/5 rounded-full bg-gray-md">
              <button className="bg-gray-light rounded-full p-1">Dates</button>
              <button>Months</button>
              <button>Flexible</button>
            </div>
          </div>
          <div className="grid grid-cols-2 text-md place-content-center">
            <DatePicker
              selectedDayCheckin={selectedDayCheckin}
              selectedDayCheckout={selectedDayCheckout}
              setSelectedDayCheckin={setSelectedDayCheckin}
              setSelectedDayCheckout={setSelectedDayCheckout}
              search={search}
              setSearch={setSearch}
            />
          </div>
        </div>
      )}
      {search == "who" && (
        <div className="absolute border bg-white rounded-3xl mt-3 shadow-lg z-40 p-4 ps-7 right-[18.5em]">
          <div className="flex justify-between">
            <div className="m-5">
              <h3>Adults</h3>
              <p>Ages 13 or above</p>
            </div>
            <div className="flex justify-between flex-nowrap w-full h-full">
              <button>-</button>
              <p>0</p>
              <button>+</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
