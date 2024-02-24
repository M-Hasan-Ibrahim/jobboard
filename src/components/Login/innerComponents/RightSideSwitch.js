import React from "react";

import { Link } from "react-router-dom";

const RightSideSwitch = (props) => {
  return (
    <div className="signup-container flex justify-around items-center flex-col bg-slate-950 text-white rounded-2xl">
      <h1 className="font-bold w-5/6 ">{props.header}</h1>

      <p className="text-base w-2/3">{props.paragraph}</p>

      <Link
        to={props.destination}
        className="flex items-center justify-center w-3/4"
      >
        <button
          type="button"
          className="bg-black w-full text-white rounded-3xl text-[22px] p-1  border-white border-2"
        >
          {props.button}
        </button>
      </Link>
    </div>
  );
};

export default RightSideSwitch;
