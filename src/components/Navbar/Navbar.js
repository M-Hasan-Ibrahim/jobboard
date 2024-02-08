import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassDollar } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar  w-full text-white flex items-center justify-around">
      <div className="icon flex items-center cursor-default">
        <FontAwesomeIcon
          icon={faMagnifyingGlassDollar}
          className="text-white text-2xl m-5"
        />

        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">Job Board</h1>
          <h3 className="text-sm">Find your dream job</h3>
        </div>
      </div>

      <nav className="nav-items w-1/3">
        <ul className="nav-list flex items-center justify-around">
          <li className="nav-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to={"/browse-jobs"}>Browse Jobs</Link>
          </li>
          <li className="nav-item">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="post-job w-1/4 h-full flex items-center justify-center">
        <div className="nav-item">
          <Link to={"/sign-in"}>Log in</Link>
        </div>
        <div className="post-job-button flex items-center justify-center p-3 m-3 w-1/2 font-bold rounded-xl cursor-pointer">
          <Link to={"/post-a-job"} className="h-full w-full text-center">
            Post A Job
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
