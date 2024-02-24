import React from "react";
import "./Login.css";
import { useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

import RightSideSwitch from "./innerComponents/RightSideSwitch";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const emailHandler = (e) => setEmail(e.target.value);
  const [password, setPassword] = useState("");
  const passwordHandler = (e) => setPassword(e.target.value);

  return (
    <main className="main-container flex items-center justify-around">
      <div className="signin-container">
        <h1 className="font-bold">Sign In</h1>
        <form
          className="form-container flex justify-around flex-col"
          action="/"
          //   onSubmit={submitHander}
        >
          {/* email */}
          <input
            value={email}
            onChange={emailHandler}
            placeholder="Email address"
            type="email"
            name="email"
            required
            className="inputBoxes ml-2.5"
          />

          {/* password */}
          <div className="flex flex-col">
            <input
              value={password}
              onChange={passwordHandler}
              placeholder="Password"
              type="password"
              name="password"
              required
              className="inputBoxes ml-2.5"
            />
            <Link
              // to="/forgot-password"
              className="underline text-blue-400 text-sm ml-2.5 cursor-pointer"
            >
              Forgot password?
            </Link>
          </div>

          {/* Remember Me */}
          <label className="checkbox-container font-bold">
            Remember Me
            <input type="checkbox" />
            <span className="checkmark translate-y-1"></span>
          </label>

          {/* submit button */}
          <button
            type="submit"
            className="bg-black w-1/3 text-white rounded-3xl text-[18px] p-2 translate-x-full"
          >
            Sign In !
          </button>
        </form>
      </div>

      <RightSideSwitch
        header="Don't Have an Account?"
        paragraph="Sign up to join us! It only takes few minutes!"
        button="Sign Up!"
        destination="/sign-up"
      />
    </main>
  );
};

export default SignIn;
