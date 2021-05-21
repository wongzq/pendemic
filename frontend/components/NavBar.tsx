import React from "react";

type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <nav>
      <div className="navbar__logo">
        <h1>Ninja List</h1>
      </div>
      <a>Home</a>
      <a>About</a>
      <a>Ninja Listing</a>
    </nav>
  );
};
export default NavBar;
