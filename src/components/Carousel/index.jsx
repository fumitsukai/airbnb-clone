import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

export default function Carousel() {
  const slides = [
    "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
    "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-mont-st-michel.jpg",
    "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-versailles-gardens.jpg",
    "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-chateau-de-chenonceau.jpg",
  ];
  const [current, setCurrent] = useState(0);
  function prev() {
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
    console.log(current);
  }
  function next() {
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
  }
  return (
    <>
      <div className="img max-w-96 rounded-lg h-72 relative overflow-hidden">
        <div
          className="flex transition-transform ease-out duration-500 bg-cover bg-center"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((s) => (
            <img src={s} className="h-72" />
          ))}
        </div>
        <h3 className="bg-white w-30 rounded-2xl m-4 float-start px-2 font-medium shadow-lg absolute top-0">
          Guest favourite
        </h3>
        <FontAwesomeIcon
          icon={faHeart}
          fontSize={24}
          className="right-0 m-4 hover:scale-110 transition ease-out duration-300  absolute top-0"
          color="white"
        />

        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            className={`bg-white opacity-80 rounded-full p-1 hover:opacity-100 hover:scale-110 dirBtn ${
              current === 0 ? "invisible" : "visible"
            }`}
            onClick={prev}
          >
            <MdChevronLeft size={24} className="chevron" />
          </button>
          <button
            className={`bg-white opacity-80 rounded-full p-1 hover:opacity-100 hover:scale-110 dirBtn ${
              current === slides.length - 1 ? "invisible" : "visible"
            }`}
            onClick={next}
          >
            <MdChevronRight size={24} className="chevron" />
          </button>
        </div>
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                className={`transition-all w-2 h-2 bg-white rounded-full ${
                  current === i ? "p-1" : "bg-opacity-50"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
