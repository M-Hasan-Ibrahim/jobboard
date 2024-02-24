import React from "react";

import "./Home.css";

import Photo from "./photos/job-photo.png";

import Footer from "./innerComponents/Footer";

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

      <Footer />
    </>
  );
};

export default Home;
