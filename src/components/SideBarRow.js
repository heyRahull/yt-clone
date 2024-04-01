import React from "react";
import { Link } from "react-router-dom";

const SideBarRow = ({ icon, name }) => {
  return (
    <div className="sidebar__row">
      <ul className="md:hover:bg-slate-100 p-1">
        <div className="flex m-2 items-center">
          <li className="sideBarRow__icon text-gray-500 "> {icon}</li>
          <li className="ml-5">{name && name}</li>
        </div>
      </ul>
    </div>
  );
};

export default SideBarRow;
