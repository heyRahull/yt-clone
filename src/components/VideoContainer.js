import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import Videocard from "./Videocard";
import { Link } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getYoutubeVideos();
  }, []);

  const getYoutubeVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API + GOOGLE_API_KEY);
    const json = await data.json();
    // console.log(json);
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        return (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <Videocard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
