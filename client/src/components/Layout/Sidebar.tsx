import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="col s3">
      <ul className="collection">
        <li className="collection-item">
          <a className="waves-effect waves-light btn">Add Expense</a>
        </li>
        <li className="collection-item">
          <a className="waves-effect waves-light btn">Add Income</a>
        </li>
      </ul>

      {/* <a href="#" data-target="slide-out" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a> */}
    </div>
  );
};

export default Sidebar;
