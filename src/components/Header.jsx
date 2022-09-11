import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header--left-side">
        <img src="images\logo.svg" alt="logo" />
        <h3 className="header--element">Features</h3>
        <h3 className="header--element">Pricing</h3>
        <h3 className="header--element">Resources</h3>
      </div>
      <div className="header--right-side">
        <h3 className="header--element">Login</h3>
        <button className="header--sign-up">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
