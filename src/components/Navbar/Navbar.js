import { useState } from "react";

import "./Navbar.css";

import NavItems from "./innerComponents/NavItems";

import Logo from "./innerComponents/Logo";

const Navbar = () => {
  return (
    <nav className="navbar w-full text-white flex items-center justify-around">
      <Logo />

      <NavItems />
    </nav>
  );
};

export default Navbar;
