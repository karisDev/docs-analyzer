import React from "react";
import logo from "../assets/logo/logo.webp";

const TopNavbar = (title) => {
  return (
    <nav className="topnav">
      <div className="topnav__title">{title}</div>
      <img className="topnav__logo" src={logo} alt="logo" />
    </nav>
  );
};

export default TopNavbar;
