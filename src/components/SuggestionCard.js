import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { GOOGLE_API_KEY } from "../utils/constants";
import { formatViewCount } from "../utils/constants";

const SuggestionCard = ({ info }) => {
  const [viewCount, setViewCount] = useState();
  const { snippet, id } = info;
  const { channelId, channelTitle, title, publishedAt, thumbnails } = snippet;
  // console.log(info);
  const formatDate = (dateString) => {
    return formatDistanceToNow(new Date(dateString), { addSuffix: true });
  };

  useEffect(() => {
    getVideoDetails();
  }, []);

  const getVideoDetails = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id.videoId}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();

    setViewCount(json.items[0].statistics.viewCount);
  };

  return (
    <div className="md:flex md:m-2 md:w-full md:hover:bg-slate-100">
      <img
        className="md:h-20 md:w-auto md:max-w-40 md:rounded-lg w-full"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className="sugg_card__desc_mbl md:flex md:flex-col md:ml-2">
        <span className="font-semibold line-clamp-2 break-keep text-sm">
          {title}
        </span>
        <span className="my-[2px] text-xs text-gray-600">{channelTitle}</span>
        <div className="flex whitespace-nowrap">
          <span className="text-xs text-gray-600">
            {formatViewCount(viewCount)} views
          </span>
          <span className="text-xs text-gray-600 ">
            &nbsp; • {formatDate(publishedAt)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;
