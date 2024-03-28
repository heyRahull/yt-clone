import React from "react";
import { Link } from "react-router-dom";

const SideBarRow = ({ icon, name }) => {
  return (
    <div className="sidebar__row">
      <ul className="hover:bg-slate-200 p-1">
        <Link to="/" className="flex m-2 items-center ">
          <li className="sideBarRow__icon text-gray-500 "> {icon}</li>
          <li className="ml-5">{name}</li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBarRow;
