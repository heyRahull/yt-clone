import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import SideBarRow from "./SideBarRow";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  //early return
  if (isMenuOpen == false) {
    return (
      <div className="fixed z-10 top-[66px] left-0 bg-white h-full w-16 shadow-lg p-2 ">
        <div className="">
          <SideBarRow icon={<HomeIcon />} />
          <SideBarRow icon={<WhatshotIcon />} />
          <SideBarRow icon={<SubscriptionsIcon />} />
          <SideBarRow icon={<VideoLibraryIcon />} />
        </div>
        <ul>
          {/* <SideBarRow icon={<HistoryIcon />} />
          <SideBarRow icon={<SubscriptionsIcon />} />
          <SideBarRow icon={<WatchLaterIcon />} />
          <SideBarRow icon={<ThumbUpOutlinedIcon />} /> */}
        </ul>
      </div>
    );
  }
  return (
    <>
      {/**Backdrop */}
      <div
        className="fixed top-0 left-0 h-full w-full bg-black opacity-50 z-10"
        onClick={handleToggle}
      ></div>
      {/**Sidebar */}
      <div className="fixed  z-10 top-[66px] left-0 bg-white h-full w-64 shadow-lg p-5 ">
        <div className="border-b-[1px]">
          <SideBarRow icon={<HomeIcon />} name={"Home"} />
          <SideBarRow icon={<WhatshotIcon />} name={"Trending"} />
          <SideBarRow icon={<SubscriptionsIcon />} name={"Subscription"} />
        </div>
        <h1 className="font-bold m-4">
          You <ChevronRightIcon />
        </h1>
        <ul>
          <SideBarRow icon={<VideoLibraryIcon />} name={"Libraries"} />
          <SideBarRow icon={<HistoryIcon />} name={"History"} />
          <SideBarRow icon={<SubscriptionsIcon />} name={"Your Videos"} />
          <SideBarRow icon={<WatchLaterIcon />} name={"Watch Later"} />
          <SideBarRow icon={<ThumbUpOutlinedIcon />} name={"Liked Videos.."} />
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
