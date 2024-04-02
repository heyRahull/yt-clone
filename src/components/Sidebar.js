import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import SideBarRow from "./SideBarRow";
import CollapsedSideBarRow from "./CollapsedSideBarRow";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  //early return
  if (isMenuOpen == false) {
    return (
      <>
        {/* Collapsed Sidebar */}
        <div className="collapsed_sidebar_desktop fixed z-10 top-[66px] bottom-0 md:left-0 bg-white h-full w-16 shadow-lg p-2">
          <div className="">
            <Link to="/">
              <CollapsedSideBarRow icon={<HomeIcon />} name={"Home"} />
            </Link>
            <Link to="/search?search_query=trending">
              <CollapsedSideBarRow icon={<WhatshotIcon />} name={"Trend"} />
            </Link>
            <Link to="/search?search_query=music taylor swift">
              <CollapsedSideBarRow icon={<LibraryMusicIcon />} name={"Music"} />
            </Link>
            <Link to="/shorts">
              <CollapsedSideBarRow
                icon={<VideoLibraryIcon />}
                name={"Shorts"}
              />
            </Link>
          </div>
        </div>
        <div className="md:hidden collapsed_sidebar_mbl bg-white z-[60]">
          <div className="flex justify-around">
            <Link to="/">
              <CollapsedSideBarRow icon={<HomeIcon />} name={"Home"} />
            </Link>
            <Link to="/search?search_query=trending">
              <CollapsedSideBarRow icon={<WhatshotIcon />} name={"Trend"} />
            </Link>
            <Link to="/search?search_query=music taylor swift">
              <CollapsedSideBarRow icon={<LibraryMusicIcon />} name={"Music"} />
            </Link>
            <Link to="/shorts">
              <CollapsedSideBarRow
                icon={<VideoLibraryIcon />}
                name={"Shorts"}
              />
            </Link>
          </div>
        </div>
      </>
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
          <Link to="/">
            <SideBarRow icon={<HomeIcon />} name={"Home"} />
          </Link>
          <Link to="/search?search_query=trending">
            <SideBarRow icon={<WhatshotIcon />} name={"Trending"} />
          </Link>
          <Link to="/search?search_query=music taylor swift">
            <SideBarRow icon={<LibraryMusicIcon />} name={"Music"} />
          </Link>
          <Link to="/live?v=4AKrtL9wBmU">
            <SideBarRow icon={<SubscriptionsIcon />} name={"Live Videos"} />
          </Link>
        </div>
        <h1 className="font-bold m-4">
          You <ChevronRightIcon />
        </h1>
        <ul>
          <SideBarRow icon={<VideoLibraryIcon />} name={"Libraries"} />
          <SideBarRow icon={<HistoryIcon />} name={"History"} />

          <SideBarRow icon={<WatchLaterIcon />} name={"Watch Later"} />
          <SideBarRow icon={<ThumbUpOutlinedIcon />} name={"Liked Videos.."} />
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
