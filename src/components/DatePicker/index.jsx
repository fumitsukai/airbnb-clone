import { generateCalendar } from "../../utils/calendar";
import { getDate, addMonths, startOfToday, format } from "date-fns";
import { useState } from "react";

export function DatePicker() {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [month, setMonth] = useState(0);
  return (
    <>
      <div className="w-96">
        <div>
          {format(addMonths(startOfToday(), month), "MMMM yyyy")}
          <button
            onClick={(e) => {
              e.preventDefault();
              setMonth(month + 1);
            }}
          >
            Go
          </button>
        </div>
        <div className="grid grid-cols-7 w-full">
          {daysOfWeek.map((item) => (
            <h3>{item}</h3>
          ))}
          {generateCalendar(addMonths(startOfToday(), month)).map((item) => (
            <h3>{getDate(item)}</h3>
          ))}
        </div>
      </div>
      <div className="w-96 h-96">
        <div className="grid grid-cols-7 w-full">
          {daysOfWeek.map((item) => (
            <h3>{item}</h3>
          ))}
          {generateCalendar(addMonths(startOfToday(), month + 1)).map(
            (item) => (
              <button>{getDate(item)}</button>
            )
          )}
        </div>
      </div>
    </>
  );
}
