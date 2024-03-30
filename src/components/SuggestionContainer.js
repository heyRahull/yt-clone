import React, { useEffect, useState } from "react";
import SuggestionCard from "./SuggestionCard";
import { GOOGLE_API_KEY } from "../utils/constants";
import { Link } from "react-router-dom";

const SuggestionContainer = () => {
  const [suggestedVideos, setSuggestedVideos] = useState([]);

  useEffect(() => {
    fetchSuggestionVideos();
  }, []);

  const fetchSuggestionVideos = async () => {
    const data = await fetch(
      ` https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCHoryD8Gefwa-1fKhPzBchg&maxResults=50&key=
        ${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    setSuggestedVideos(json.items);
    // console.log(suggestedVideos);
  };

  return (
    <div className="md:h-[400px] ml-2 p-2">
      {suggestedVideos.map((suggestedVideo) => {
        if (suggestedVideo.id.kind === "youtube#video") {
          return (
            <Link
              key={suggestedVideo.id.videoId}
              to={"/watch?v=" + suggestedVideo.id.videoId}
            >
              <SuggestionCard
                key={suggestedVideo.id.videoId}
                info={suggestedVideo}
                views="1.5 M Views"
              />
            </Link>
          );
        }
      })}
    </div>
  );
};

export default SuggestionContainer;
