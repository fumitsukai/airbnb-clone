import { generateCalendar } from "../../utils/calendar";
import {
  getDate,
  addMonths,
  startOfToday,
  format,
  isBefore,
  isEqual,
  isSameMonth,
  isWithinInterval,
  addDays,
} from "date-fns";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function DatePicker({
  selectedDayCheckin,
  selectedDayCheckout,
  setSelectedDayCheckin,
  setSelectedDayCheckout,
  search,
  setSearch,
}) {
  const btn = useRef();

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [month, setMonth] = useState(0);
  function isInInterval(item) {
    return isWithinInterval(item, {
      start: addDays(selectedDayCheckin, 1),
      end: selectedDayCheckout - 1,
    });
  }
  return (
    <>
      <div className="m-6  p-5">
        <div className="mb-5 flex justify-start gap-24">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className={classNames(
              "my-auto cursor-pointer",
              month == 0 && "text-gray-md cursor-not-allowed"
            )}
            onClick={(e) => {
              e.preventDefault();
              if (month > 0) {
                setMonth(month - 1);
              }
            }}
          />
          <h2 className="font-bold">
            {format(addMonths(startOfToday(), month), "MMMM yyyy")}
          </h2>
        </div>
        <div className="grid grid-cols-7 w-full">
          {daysOfWeek.map((item) => (
            <h3 className="grid place-content-center text-sm mb-4 font-light">
              {item}
            </h3>
          ))}
          {generateCalendar(addMonths(startOfToday(), month)).map((item) => (
            <button
              className={classNames(
                "grid place-content-center font-medium p-2 my-1 rounded-full border border-solid border-transparent hover:border-black",
                isBefore(item, startOfToday()) &&
                  "text-gray-md hover:border-none cursor-default",
                (isEqual(item, selectedDayCheckin) ||
                  isEqual(item, selectedDayCheckout)) &&
                  "bg-black text-white",
                isInInterval(item) &&
                  selectedDayCheckin &&
                  selectedDayCheckout &&
                  "bg-gray-light rounded-none hover:rounded-full"
              )}
              ref={btn}
              onClick={(e) => {
                e.preventDefault();
                if (search == "checkin") {
                  setSelectedDayCheckin(item);
                  setSearch("checkout");
                } else if (
                  (search == "checkout" || selectedDayCheckin) &&
                  !isBefore(item, selectedDayCheckin)
                ) {
                  setSelectedDayCheckout(item);
                }
              }}
              disabled={isBefore(item, startOfToday())}
            >
              {getDate(item)}
            </button>
          ))}
        </div>
      </div>
      <div className="m-6 p-5">
        <div className="mb-5 flex justify-end gap-24">
          <h2 className="font-bold">
            {format(addMonths(startOfToday(), month + 1), "MMMM yyyy")}
          </h2>
          <FontAwesomeIcon
            icon={faAngleRight}
            className={classNames("my-auto", month >= 10 && "text-gray-md")}
            onClick={(e) => {
              e.preventDefault();
              if (month < 10) {
                setMonth(month + 1);
              }
            }}
          ></FontAwesomeIcon>
        </div>
        <div className="grid grid-cols-7 w-full">
          {daysOfWeek.map((item) => (
            <h3 className="grid place-content-center text-sm mb-4 font-light">
              {item}
            </h3>
          ))}
          {generateCalendar(addMonths(startOfToday(), month + 1)).map(
            (item) => (
              <button
                className={classNames(
                  "grid place-content-center font-medium p-2 my-1 rounded-full border border-solid border-transparent hover:border-black",
                  (isEqual(item, selectedDayCheckout) ||
                    isEqual(item, selectedDayCheckin)) &&
                    "bg-black text-white",
                  isInInterval(item) &&
                    selectedDayCheckin &&
                    selectedDayCheckout &&
                    "bg-gray-light rounded-none hover:rounded-full"
                )}
                ref={btn}
                onClick={(e) => {
                  e.preventDefault();
                  if (search == "checkin") {
                    setSelectedDayCheckin(item);
                    setSearch("checkout");
                  } else {
                    setSelectedDayCheckout(item);
                    setSearch("checkin");
                  }
                  if (selectedDayCheckin) {
                    setSearch("checkout");
                    setSelectedDayCheckout(item);
                  }
                }}
              >
                {getDate(item)}
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
}
