import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import Videocard from "./Videocard";
import { Link } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";
import { useSelector } from "react-redux";
import errorImg from "../Images/error400_img.jpg";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(false);
  // const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const categoryId = useSelector((store) => store.category.id);

  useEffect(() => {
    getYoutubeVideos();
  }, [categoryId]);

  const getYoutubeVideos = async () => {
    let apiUrl = `${YOUTUBE_VIDEO_API}&key=${GOOGLE_API_KEY}`;

    // Check if categoryId is not null before appending it to the URL
    if (categoryId !== null) {
      apiUrl += `&videoCategoryId=${categoryId}`;
    }

    const data = await fetch(apiUrl);
    const json = await data.json();
    console.log(json);
    if (json.error) {
      setError(true);
    } else {
      setError(false);
      setVideos(json.items);
    }
  };
  if (error == true) {
    return (
      <>
        <div className="flex flex-col items-center justify-center ">
          <h1 className="font-bold text-3xl pt-4 text-center">
            This category does not have any videos at the moment
          </h1>
          <img src={errorImg} className="p-9" />
        </div>
      </>
    );
  }
  return (
    <div className="videContainer_mbl md:flex md:flex-wrap pt-3">
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
