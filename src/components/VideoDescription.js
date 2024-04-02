import React, { useEffect, useState } from "react";
import { Avatar, useMediaQuery } from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { formatDate } from "../utils/constants";
import Loader from "./Loader";
import {
  CHANNEL_DETAIL_API,
  GOOGLE_API_KEY,
  formatViewCount,
} from "../utils/constants";

const VideoDescription = ({ videoData }) => {
  const [channelDetail, setChannelDetail] = useState();
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [showMore, setShowMore] = useState(false); // State to track whether to show full description
  const isMobile = useMediaQuery("(max-width: 768px)"); // Check if screen width is less than 768px

  const mobileDescriptionLimit = 40; // Character limit for description in collapsed state on mobile
  const desktopDescriptionLimit = 200; // Character limit for description in collapsed state on desktop

  useEffect(() => {
    if (videoData && videoData.length) {
      const { snippet } = videoData[0];
      const { channelId } = snippet;
      if (channelId) {
        getChannelDetails(channelId);
      }
    }
  }, [videoData]);

  const getChannelDetails = async (channelId) => {
    const data = await fetch(
      `${CHANNEL_DETAIL_API}&id=${channelId}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();

    setChannelDetail(json.items[0]);
    setLoading(false);
  };
  // console.log(channelDetail);

  //Shimmer UI - If videoData is null or empty, render a placeholder or loading indicator
  if (!videoData || !videoData.length || loading) {
    return <div>Loading suggestions...</div>;
    // return <Loader />;
  }

  const { snippet, statistics } = videoData[0];
  const { title, channelTitle, channelId, publishedAt, description } = snippet;
  const { likeCount, viewCount, commentCount } = statistics;

  return (
    <div className="mt-3">
      <div className="flex flex-col">
        <span className="font-semibold text-xl videoTitle__mbl">{title}</span>
        <div className="md:flex md:justify-between mt-3">
          <div className="flex items-center channelDetail_mbl">
            <Avatar
              alt="user"
              src={channelDetail?.snippet?.thumbnails?.high?.url}
              className="mx-2 mr-4 w-15 h-12"
            />
            <div className="flex flex-col mr-6 w-52">
              <span className="text-md font-semibold line-clamp-1">
                {channelTitle}
              </span>
              <span className="text-xs">
                {formatViewCount(channelDetail?.statistics?.subscriberCount)}
                Subscribers
              </span>
            </div>
            <button
              onClick={() => setSubscribed(!subscribed)}
              className="px-4 py-[6px] pb-2 bg-black rounded-full"
            >
              {subscribed ? (
                <span className="text-white text-sm font-semibold flex items-center">
                  <NotificationsIcon fontSize="small" className="mr-1" />
                  Subscribe
                </span>
              ) : (
                <span className="text-white text-sm font-semibold flex items-center ">
                  <UnsubscribeIcon fontSize="small" className="mr-1 mt-1" />
                  UnSubscribe
                </span>
              )}
            </button>
          </div>

          <div className="flex items-center likeSection__mbl">
            <div className="">
              <button
                onClick={() => setClicked(!clicked)}
                className="px-4 py-[6px] bg-gray-100 hover:bg-gray-200 rounded-l-full border-r border-r-gray-200"
              >
                {clicked ? (
                  <ThumbUpAltIcon fontSize="small" className="mr-2" />
                ) : (
                  <ThumbUpAltOutlinedIcon fontSize="small" className="mr-2" />
                )}
                <span className="text-sm font-semibold">
                  {formatViewCount(likeCount)}
                </span>
              </button>
              <button
                onClick={() => setClicked(!clicked)}
                className="mr-2 px-4 py-[6px] hover:bg-gray-200 bg-gray-100 rounded-r-full dislike_mbl_small"
              >
                {clicked ? (
                  <ThumbDownAltOutlinedIcon fontSize="small" />
                ) : (
                  <ThumbDownAltIcon fontSize="small" />
                )}
              </button>
            </div>
            <button className="ripple px-4 py-[6px] bg-gray-100 rounded-full hover:bg-gray-200">
              <ShareIcon fontSize="small" className="mr-2" /> Share
            </button>

            <button className="ml-2 px-4 py-[6px] hover:bg-gray-200 bg-gray-100 rounded-full">
              <MoreHorizIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-3 p-2 bg-gray-100 h-[auto] rounded-md">
        <div className="flex flex-col m-2">
          <div>
            <span className="font-semibold mr-2">
              {formatViewCount(viewCount)} views
            </span>
            <span className="font-semibold mr-2">
              {formatDate(publishedAt)}
            </span>
            <span>hashtags</span>
          </div>
          <span className="text-lg pt-2" style={{ wordBreak: "break-word" }}>
            {showMore
              ? description
              : `${description.slice(
                  0,
                  isMobile ? mobileDescriptionLimit : desktopDescriptionLimit
                )}${
                  description.length >
                  (isMobile ? mobileDescriptionLimit : desktopDescriptionLimit)
                    ? "..."
                    : ""
                }`}
            {description.length >
              (isMobile ? mobileDescriptionLimit : desktopDescriptionLimit) && (
              <button
                onClick={() => setShowMore(!showMore)}
                className="font-semibold hover:underline focus:outline-none"
              >
                {showMore ? "Show less" : "Show more"}
              </button>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoDescription;
