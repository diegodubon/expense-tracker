import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper teal ">
        <a href="#" className="brand-logo center">
          Expense-Tracker
        </a>
        <ul id="nav-mobile" className="right hide-on-sm-and-down"></ul>
      </div>
    </nav>
  );
};

export default Navbar;
