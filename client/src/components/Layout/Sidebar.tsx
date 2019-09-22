import React from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="col s3">
      <ul className="collection">
        <li className="collection-item">
          <Link className="waves-effect waves-light btn" to="/add/expense">
            Add Expense
          </Link>
        </li>
        <li className="collection-item">
          <Link className="waves-effect waves-light btn" to="/add/income">
            Add Income
          </Link>
        </li>
      </ul>

      {/* <a href="#" data-target="slide-out" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a> */}
    </div>
  );
};

export default Sidebar;
