import React from "react";
import "../Login.css";
import { useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const emailHandler = (e) => setEmail(e.target.value);
  const [password, setPassword] = useState("");
  const passwordHandler = (e) => setPassword(e.target.value);

  //   const submitHander = async (e) => {
  //     e.preventDefault();

  //     const loginInfo = {
  //       email: email,
  //       password: password,
  //     };
  //     const response = await axios.post(
  //       "http://localhost:5000/users/login",
  //       loginInfo,
  //       { withCredentials: true }
  //     );

  //     if (response.data.status === "failed") {
  //       alert(response.data.message);
  //     } else {
  //       console.log(response.data);
  //     }
  //   };

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
              to="/forgot-password"
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
            className="bg-black w-1/3 text-white rounded-3xl text-[22px] p-2 translate-x-full"
          >
            Sign In !
          </button>
        </form>
      </div>

      {/* sign up side */}

      <div className="signup-container flex justify-around items-center flex-col bg-slate-950 text-white rounded-2xl">
        <h1 className="font-bold w-5/6 ">Don't Have an Account?</h1>

        <p className="text-base w-2/3">
          Sign up to join us! It only takes few minutes!
        </p>

        <Link to="/sign-up" className="flex items-center justify-center w-3/4">
          <button
            type="button"
            className="bg-black w-full text-white rounded-3xl text-[22px] p-1  border-white border-2"
          >
            Sign Up !
          </button>
        </Link>
      </div>
    </main>
  );
};

export default SignIn;
