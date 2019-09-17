import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="col s3">
      <ul id="slide-out" className="sidenav     ">
        <li>
          <a href="#!">First Sidebar Link</a>
        </li>
        <li>
          <a href="#!">Second Sidebar Link</a>
        </li>
      </ul>

      <a href="#" data-target="slide-out" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
    </div>
  );
};

export default Sidebar;
