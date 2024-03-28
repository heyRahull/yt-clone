import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { Link } from "react-router-dom";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import rahulImage from "../Images/rahul.png";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-10 flex justify-between items-center p-3 px-5 shadow-lg bg-white">
        <div className="flex ">
          <IconButton onClick={handleToggle} className="h-8 cursor-pointer">
            <MenuIcon />
          </IconButton>

          <a href="/">
            <img
              className="h-8 mx-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
              alt="logo"
            />
          </a>
        </div>
        <div className="flex w-2/4">
          <input
            className="flex-1 p-2 pl-4 border border-gray-400 rounded-l-full"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full">
            <SearchOutlinedIcon fontSize="small" />
          </button>
          {showSuggestions && suggestions.length > 0 && (
            <div className="fixed bg-white py-2 px-2 mt-12 shadow-lg rounded-lg w-[37rem] border border-gray-100">
              <ul>
                {suggestions.map((res, index) => (
                  <li
                    className="py-2 px-2 shadow-sm hover:bg-gray-100"
                    key={index}
                  >
                    <SearchOutlinedIcon fontSize="small" />{" "}
                    <span className="pl-1">{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex items-center">
          <IconButton>
            <VideoCallOutlinedIcon fontSize="medium" className="" />
          </IconButton>
          <IconButton>
            <NotificationsOutlinedIcon fontSize="medium" className="" />
          </IconButton>
          <Avatar alt="Remy Sharp" src={rahulImage} className="mx-3" />
        </div>
      </div>
      <div className="pt-20"></div>
    </>
  );
};

export default Head;
