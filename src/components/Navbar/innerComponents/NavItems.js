import { useState } from "react";
import { Link } from "react-router-dom";

import navLinks from "./NavLinks";

import menu from "../assets/menu.png";
import x from "../assets/x.png";

const NavItems = () => {
  const [activeTab, setActiveTab] = useState("home");

  const [toggle, setToggle] = useState(false);

  const isActive = (tab) => {
    return activeTab === tab ? "active-nav-item" : "nav-item";
  };

  return (
    <>
      <div className="w-full sm:flex justify-around items-center hidden">
        <div className="nav-items w-3/4">
          <ul className="nav-list flex items-center justify-around">
            {navLinks.map((nav) => (
              <li className={isActive(nav.id)}>
                <Link to={nav.destination} onClick={() => setActiveTab(nav.id)}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="post-job-button flex items-center justify-center m-3 w-1/6 font-bold rounded-xl cursor-pointer">
          <Link
            to={"/post-a-job"}
            className="h-full w-full text-center p-3 "
            onClick={() => setActiveTab("post-a-job")}
          >
            Post A Job
          </Link>
        </div>
      </div>

      {/* small screen */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? x : menu}
          alt="menu"
          className="object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6  absolute top-20 right-0 mx-4 my-2 min-w[140px] bg-gradient-to-r from-gray-800 to-black opacity-65 rounded-xl sidebar z-10`}
        >
          <div className="w-full flex justify-around items-center">
            <div className="nav-items w-3/4">
              <ul className="nav-list flex items-center justify-around flex-col">
                {navLinks.map((nav) => (
                  <li className={`${isActive(nav.id)} mb-4`}>
                    <Link
                      to={nav.destination}
                      onClick={() => setActiveTab(nav.id)}
                    >
                      {nav.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="post-job-button flex items-center justify-center m-3 w-1/3 font-bold rounded-xl cursor-pointer">
              <Link
                to={"/post-a-job"}
                className="h-full w-full text-center p-3 "
                onClick={() => setActiveTab("post-a-job")}
              >
                Post A Job
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavItems;
