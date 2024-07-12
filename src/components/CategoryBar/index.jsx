import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import category from "../../utils/category";
import "./index.css";
import { useEffect, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { motion as m } from "framer-motion";

export function CategoryBar({ scroll, cat }) {
  const [scrollPos, setScrollPos] = useState(-1);
  function handleScroll(scrollPosition) {
    setScrollPos(scrollPosition);
    const element = document.getElementById("list");
    const scrollAmount = element.clientWidth * scrollPosition;
    element.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }
  const categoryListItems = category.map((item, index) => (
    <m.button
      key={index}
      className="pb-2 opacity-60 border-transparent border-b-2 hover:opacity-100 hover:border-gray-md"
      whileTap={{ scale: 0.9 }}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className="m-1 px-5"
        fontSize={18}
      ></FontAwesomeIcon>
      <span className="text-sm">{item.name}</span>
    </m.button>
  ));
  return (
    <>
      <div
        className={`w-full px-20 z-20${
          scroll ? "shadow-md" : "shadow-transparent"
        }
        `}
      >
        <div
          className="flex justify-start mt-6 mb-4 gap-8  overflow-hidden"
          id="list"
        >
          {categoryListItems}
          <button
            className={`absolute end-0 me-20 rounded-full border p-1  hover:shadow-lg bg-white ${
              scrollPos === 2 && "hidden"
            }`}
            onClick={() => handleScroll(1)}
          >
            <MdChevronRight size={24} />
          </button>

          <button
            className={
              "absolute start-20 rounded-full border p-1 hover:shadow-lg  bg-white"
            }
            onClick={() => handleScroll(-1)}
          >
            <MdChevronLeft size={24} />
          </button>
        </div>
      </div>
    </>
  );
}
