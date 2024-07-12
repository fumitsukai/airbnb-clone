import { FaSearch } from "react-icons/fa";
import { motion as m } from "framer-motion";

export function SearchBarSmall({ search, setSearch, setScroll, setCat }) {
  return (
    <>
      <m.div
        className="flex border shadow-md rounded-full p-2 hover:shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={setCat(false)}
      >
        <button
          className="border-e px-4 font-semibold text-sm"
          onClick={() => {
            setScroll(false);
            setSearch("where");
          }}
        >
          Anywhere
        </button>
        <button
          className="border-e px-4 font-semibold text-sm"
          onClick={() => {
            setScroll(false);
            setSearch("checkin");
          }}
        >
          Any week
        </button>
        <button className="px-4 font-light text-sm">Add guests</button>
        <button className="bg-red p-2 rounded-full">
          <FaSearch className="text-white" size={14} />
        </button>
      </m.div>
    </>
  );
}
