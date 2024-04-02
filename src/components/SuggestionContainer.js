import React, { useEffect, useState } from "react";
import SuggestionCard from "./SuggestionCard";
import { GOOGLE_API_KEY } from "../utils/constants";
import { Link } from "react-router-dom";
import { YOUTUBE_SUGGESTION_API } from "../utils/constants";
import Loader from "./Loader";

const SuggestionContainer = ({ videoData }) => {
  const [loading, setLoading] = useState(true);
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const channelId = videoData[0]?.snippet?.channelId;
  useEffect(() => {
    if (videoData.length > 0) {
      fetchSuggestionVideos();
    }
  }, [videoData]);
  // console.log(channelId);
  const fetchSuggestionVideos = async () => {
    const data = await fetch(
      `${YOUTUBE_SUGGESTION_API}&channelId=${channelId}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    setSuggestedVideos(json.items);
    setLoading(false);
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="md:h-[400px] md:ml-2 md:p-2">
      {suggestedVideos &&
        suggestedVideos.map((suggestedVideo) => {
          if (suggestedVideo.id.kind === "youtube#video") {
            return (
              <Link
                key={suggestedVideo.id.videoId}
                to={"/watch?v=" + suggestedVideo.id.videoId}
              >
                <SuggestionCard
                  key={suggestedVideo.id.videoId}
                  info={suggestedVideo}
                />
              </Link>
            );
          }
        })}
    </div>
  );
};

export default SuggestionContainer;
