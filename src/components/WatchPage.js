import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import SuggestionContainer from "./SuggestionContainer";
import { GOOGLE_API_KEY } from "../utils/constants";

const WatchPage = () => {
  const [params, setParams] = useSearchParams();
  const [videoData, setVideoData] = useState([]);
  // console.log(params.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    getVideoDetails();
  }, []);

  const getVideoDetails = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${params.get(
        "v"
      )}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    // console.log(json);
    setVideoData(json.items);
  };

  return (
    <div className="flex flex-col md:max-w-screen-2xl">
      <div className="px-5 flex flex-wrap w-full">
        <div className="md:w-8/12 flex-grow">
          <iframe
            className="rounded-xl"
            width="100%"
            height="400"
            src={"https://www.youtube.com/embed/" + params.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full md:w-4/12 flex-grow mt-4 lg:mt-0 ">
          {/* <LiveChat /> */}
          <SuggestionContainer videoData={videoData} />
        </div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
