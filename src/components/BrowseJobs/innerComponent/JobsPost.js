import React from "react";

import ownerIcon from "../assets/owner-icon.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassDollar } from "@fortawesome/free-solid-svg-icons";

const JobsPost = (props) => {
  return (
    <div className="mt-10 mb-5 p-5 border-2 border-black post">
      <div className="header">
        <img src={ownerIcon} alt="" className="owner-icon" />
        <div className="owner">
          <div className="owner-name">{props.name}</div>
          <div className="company">{props.company}</div>
        </div>
        <div className="jobBoard-icon">
          <FontAwesomeIcon
            icon={faMagnifyingGlassDollar}
            className="text-black text-2xl m-5"
          />
        </div>
      </div>

      <div className="context">
        <p>{props.context}</p>
      </div>

      <form
        className="footer"
        action={`mailto: ${props.email}`}
        method="post"
        enctype="text/plain"
      >
        <button
          type="submit"
          className="apply font-bold rounded-xl p-3 w-1/6 flex justify-center "
        >
          Apply
        </button>
        <a className="info border-b-2 border-black cursor-pointer">More Info</a>
      </form>
    </div>
  );
};

export default JobsPost;
