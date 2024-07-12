import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import "./index.css";
import { FaAirbnb } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { RxHamburgerMenu, RxAvatar } from "react-icons/rx";
import { AccountPopup } from "../AccountPopUp";
import { CategoryBar } from "../CategoryBar";
import SearchBarBig from "../SearchBarBig";
import { classNames } from "../DatePicker";
import { motion as m } from "framer-motion";
import { SearchBarSmall } from "../SeachBarSmall";

export function Navbar({ setToggleSignUp }) {
  const form = useRef(null);
  const accountBtn = useRef(null);
  const [search, setSearch] = useState(null);
  const [activeBtn, setActiveBtn] = useState("stays");
  const [accountToggle, setAccountToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [cat, setCat] = useState(true);
  useEffect(() => {
    const handleVerticalScroll = () => {
      setScroll(window.scrollY > 20);
      // setCat(window.scrollY < 20);
      setSearch(window.scrollY < 20 && null);
    };
    window.addEventListener("scroll", handleVerticalScroll);
    return () => window.removeEventListener("scroll", handleVerticalScroll);
  }, []);

  const filterSearch = (e) => {
    setActiveBtn(e.target.getAttribute("name"));
  };

  function handleOutsideClick(e) {
    if (form.current && !form.current.contains(e.target)) {
      setSearch(null);
    }
    if (accountBtn.current && !accountBtn.current.contains(e.target)) {
      setAccountToggle(false);
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  }, []);

  function toggleAccount() {
    setAccountToggle(true);
  }

  return (
    <>
      <div className="sticky top-0 bg-white z-40">
        <nav
          className={classNames(
            "flex w-full justify-between px-20 py-5 bg-white flex-wrap border-b border-gray-md border-solid pb-28 z-30",
            scroll && "pb-5"
          )}
        >
          <div className="float-start basis-4/12 flex items-center z-50">
            <FaAirbnb size={38} color="#FF5A5F" className="my-auto" />
            <p className="font-extrabold text-2xl text-red my-auto ms-1">
              airbnb
            </p>
          </div>
          {scroll && (
            <SearchBarSmall
              search={search}
              setSearch={setSearch}
              setScroll={setScroll}
              setCat={setCat}
            />
          )}

          <div className="flex justify-end basis-4/12 my-auto z-50">
            <div className="hover:bg-gray-light rounded-full">
              <button className="text-sm font-semibold p-3">
                Airbnb your home
              </button>
            </div>
            <button className="hover:bg-gray-light rounded-full px-4 me-1">
              <FiGlobe />
            </button>
            <div className="relative" ref={accountBtn}>
              <button
                className="flex rounded-full border items-center hover:shadow-md py-1"
                onClick={toggleAccount}
              >
                <RxHamburgerMenu className="ms-4" />
                <RxAvatar size={34} color="gray" className="mx-2" />
              </button>
              {accountToggle == true && (
                <AccountPopup
                  setToggleSignUp={setToggleSignUp}
                  setAccountToggle={setAccountToggle}
                />
              )}
            </div>
          </div>

          <m.div
            className={`flex searchBar justify-center w-full absolute top-5 left-0`}
            layout
            style={{
              scale: scroll ? "0" : "1",
              translateY: scroll ? "-100%" : "0",
            }}
          >
            <form ref={form} className="z-40">
              <div
                className={classNames(
                  "flex justify-center  basis-4/12 text-gray-md my-auto order-2 mb-5"
                )}
              >
                <div
                  className={classNames(
                    "px-4 py-3",
                    activeBtn === "stays"
                      ? "text-black"
                      : "rounded-full hover:bg-gray-light hover:text-gray-500"
                  )}
                >
                  <button onClick={filterSearch} name="stays">
                    Stays
                  </button>
                </div>
                <div
                  className={classNames(
                    "px-4 py-3",
                    activeBtn === "experiences"
                      ? "text-black"
                      : "rounded-full hover:bg-gray-light hover:text-gray-500"
                  )}
                >
                  <button
                    className="active:text-black "
                    onClick={filterSearch}
                    name="experiences"
                  >
                    Experiences
                  </button>
                </div>
                <div
                  className={classNames(
                    "px-4 py-3",
                    activeBtn === "onlinexp"
                      ? "text-black"
                      : "rounded-full hover:bg-gray-light hover:text-gray-500"
                  )}
                >
                  <button
                    className="active:text-black "
                    onClick={filterSearch}
                    name="onlinexp"
                  >
                    Online Experiences
                  </button>
                </div>
              </div>
              <SearchBarBig
                search={search}
                setSearch={setSearch}
                scroll={scroll}
              />
            </form>
          </m.div>
        </nav>
      </div>
      <CategoryBar scroll={scroll} cat={cat} />
    </>
  );
}
