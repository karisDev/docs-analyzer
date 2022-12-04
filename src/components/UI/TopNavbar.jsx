import React from "react";
import logo from "../../assets/logo/logo.webp";

const TopNavbar = ({ title }) => {
  return (
    <nav className="topnav">
      <h1 className="title">{title}</h1>
      <img className="logo" src={logo} alt="logo" />
    </nav>
  );
};

export default TopNavbar;
