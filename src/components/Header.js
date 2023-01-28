import React from "react";
import "./Header.css";
//import logo from "./logo.png";

const Header = () => {
  return (
    <header>
      <img
        src="https://i.postimg.cc/sfBLnF6V/Screenshot-2023-01-28-at-9-08-01-PM.png"
        alt="logo"
        className="logo"
      />
      <div className="title-slogan">
        <h1>TechInterviewPro</h1>
        <h3>Ace your tech interviews</h3>
      </div>
      <button>Profile</button>
    </header>
  );
};

export default Header;
