import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassDollar } from "@fortawesome/free-solid-svg-icons";

const Logo = () => {
  return (
    <div className="icon flex items-center cursor-default w-1/3">
      <FontAwesomeIcon
        icon={faMagnifyingGlassDollar}
        className="text-white text-2xl m-5"
      />

      <div className="flex flex-col">
        <h1 className="font-bold text-2xl">Job Board</h1>
        <h3 className="text-sm">Find your dream job</h3>
      </div>
    </div>
  );
};

export default Logo;
