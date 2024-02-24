import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassDollar } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
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
        <h2 className="cursor-pointer">
          <a>Instagram</a>
        </h2>
        <h2>
          <a
            href="https://www.linkedin.com/in/mohamad-hasan-ibrahim-275933289/"
            target="_blanck"
          >
            Linkedin
          </a>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
