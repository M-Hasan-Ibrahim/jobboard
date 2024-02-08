import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassDollar } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import { Link } from "react-router-dom";
import Photo from "./photos/job-photo.png";

const Home = () => {
  return (
    <>
      <div className="home text-white flex items-center justify-around ">
        <div className="home-content ml-7">
          <h1 className="text-7xl font-bold">
            A Lot of <span className="jobs-span-word">Jobs</span> Listed
          </h1>
          <h1 className="text-5xl font-bold">Find Your Dream Job</h1>
          <h1 className="text-lg ">
            We provide online instant cash loans with quich approval that suit
            your term length
          </h1>
        </div>

        <div className="h-full flex items-end justify-center">
          <img src={Photo} className=" w-5/6" />
        </div>
      </div>

      <footer className="text-white flex items-center justify-around">
        <div className="icon flex items-center ">
          <FontAwesomeIcon
            icon={faMagnifyingGlassDollar}
            className="text-white text-2xl m-5"
          />

          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Job Board</h1>
            <h1 className="text-sm">Find your dream job</h1>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-slate-500 text-lg ">About Us</h1>
          <h2 className="cursor-pointer">About us</h2>
          <h2 className="cursor-pointer">Join us</h2>
        </div>

        <div>
          <h1 className="font-bold text-slate-500 text-lg ">Socials</h1>
          <h2>
            <a href="https://www.instagram.com/eazen023/" target="_blanck">
              Instagram
            </a>
          </h2>
          <h2>
            <a
              href="https://www.linkedin.com/in/mohamad-hasan-ibrahim/"
              target="_blanck"
            >
              Linkedin
            </a>
          </h2>
        </div>
      </footer>
    </>
  );
};

export default Home;
