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

export function Navbar({ setToggleSignUp }) {
  const form = useRef(null);
  const accountBtn = useRef(null);
  const [search, setSearch] = useState(null);
  const [activeBtn, setActiveBtn] = useState("stays");
  const [accountToggle, setAccountToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleVerticalScroll = () => {
      setScroll(window.scrollY > 20);
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
      <div className="sticky top-0 z-40 bg-white">
        <nav className="flex w-full justify-between px-20 py-5 bg-white flex-wrap border-b border-gray-md border-solid">
          <div className="float-start basis-4/12 flex items-center order-1">
            <FaAirbnb size={38} color="#FF5A5F" className="my-auto" />
            <p className="font-extrabold text-2xl text-red my-auto ms-1">
              airbnb
            </p>
          </div>
          <div
            className={classNames(
              "flex justify-center  basis-4/12 text-gray-md my-auto order-2",
              scroll ? "hidden" : "visible"
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
          <div className="flex justify-end basis-4/12 my-auto order-3">
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

          <div
            className={`flex searchBar ${
              scroll
                ? "order-2 basis-4/12 w-2"
                : "order-4 justify-center w-full mt-5"
            }`}
          >
            <form ref={form}>
              <SearchBarBig
                search={search}
                setSearch={setSearch}
                scroll={scroll}
              />
            </form>
          </div>
        </nav>
        <CategoryBar scroll={scroll} />
      </div>
    </>
  );
}
