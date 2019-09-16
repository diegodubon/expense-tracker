import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">
          Expense-Tracker
        </a>
        <ul id="nav-mobile" className="right hide-on-sm-and-down"></ul>
      </div>
    </nav>
  );
};

export default NavBar;
