import React from "react";
import { Link } from "react-router-dom";

const CollapsedSideBarRow = ({ icon, name }) => {
  return (
    <div className="sidebar__row">
      <ul className="md:hover:bg-slate-100 p-1">
        <div className=" items-center md:mb-1">
          <li className="m-2 mb-1 sideBarRow__icon text-gray-500 "> {icon}</li>
          <li className="text-xs mx-1 font-semibold">{name && name}</li>
        </div>
      </ul>
    </div>
  );
};

export default CollapsedSideBarRow;
