import React from "react";
import { useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

import "../Login.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const firstNameHandler = (e) => setFirstName(e.target.value);

  const [lastName, setLastName] = useState("");
  const lastNameHandler = (e) => setLastName(e.target.value);

  const [email, setEmail] = useState("");
  const emailHandler = (e) => setEmail(e.target.value);

  const [password, setPassword] = useState("");
  const passwordHandler = (e) => setPassword(e.target.value);

  const [verifyPassword, setVerifyPassword] = useState("");
  const verifyPasswordHandler = (e) => setVerifyPassword(e.target.value);

  const [gender, setGender] = useState("");
  const genderHandler = (e) => {
    setGender(e.target.value);
  };

  const [birthDay, setbirthDay] = useState("");
  const birthDayHandler = (e) => {
    setbirthDay(e.target.value);
    console.log(e.target.value);
  };
  const current = new Date().toISOString().split("T")[0];

  //   const submitHandler = async (e) => {
  //     e.preventDefault();

  //     const signupInfo = {
  //       firstName: firstName,
  //       lastName: lastName,
  //       birthDay: birthDay,
  //       email: email,
  //       password: password,
  //       verifyPassword: verifyPassword,
  //     };

  //     const response = await axios.post(
  //       "http://localhost:5000/users/signup",
  //       signupInfo,
  //       { withCredentials: true }
  //     );

  //     if (response.data.status === "failed") {
  //       console.log(response.data.message);
  //     } else {
  //       console.log("tout est bien");
  //     }
  //   };

  return (
    <main className="main-container flex items-center justify-around">
      <div className="signin-container">
        <h1 className="font-bold">Sign Up</h1>
        <form
          //   onSubmit={submitHandler}
          className="form-container flex justify-around flex-col  "
          action="/"
        >
          {/* name */}
          <div className="flex ">
            <input
              value={firstName}
              onChange={firstNameHandler}
              placeholder="First Name"
              type="text"
              name="firstName"
              required
              className="name"
            />
            <input
              value={lastName}
              onChange={lastNameHandler}
              placeholder="Last Name"
              type="text"
              name="lastName"
              required
              className="name"
            />
          </div>

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
          <input
            value={password}
            onChange={passwordHandler}
            placeholder="Password"
            type="password"
            name="password"
            required
            className="inputBoxes ml-2.5"
          />

          <input
            value={verifyPassword}
            onChange={verifyPasswordHandler}
            placeholder="Verify Password"
            type="password"
            name="password"
            required
            className="inputBoxes ml-2.5"
          />

          {/* gender list */}
          <select
            onChange={genderHandler}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="Choose Gender"
            defaultValue="choose gender"
          >
            <option value="choose gender" disabled>
              Choose Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          {/* age */}
          <input
            value={birthDay}
            onChange={birthDayHandler}
            type="date"
            max={current}
            required
            className="inputBoxes ml-2.5"
          />

          {/* Remember Me */}
          <label className="checkbox-container font-bold">
            Remember Me
            <input type="checkbox" />
            <span className="checkmark translate-y-1"></span>
            <span className="checkmark translate-y-1"></span>
          </label>

          {/* submit button */}
          <button
            type="submit"
            className="bg-black w-1/3 text-white rounded-3xl text-[22px] p-2 translate-x-full"
          >
            Sign Up !
          </button>
        </form>
      </div>

      {/* sign in side */}

      <div className="signup-container flex justify-around items-center flex-col bg-slate-950 text-white rounded-2xl">
        <h1 className="font-bold w-5/6 ">Already Have an Account?</h1>

        <p className="text-base w-2/3">
          Welcome back! Sign in with your account to join us!
        </p>

        <Link to="/sign-in" className="flex items-center justify-center w-3/4">
          <button
            type="submit"
            className="bg-black w-full text-white rounded-3xl text-[22px] p-1  border-white border-2"
          >
            Sign In !
          </button>
        </Link>
      </div>
    </main>
  );
};

export default SignUp;
