import React from "react";
import { formatDistanceToNow } from "date-fns";

const Videocard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, publishedAt, thumbnails } = snippet;

  const formatViewCount = (viewCount) => {
    viewCount = parseInt(viewCount); // Convert viewCount to a number
    // Check if viewCount is greater than or equal to 1 million
    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(1) + "M";
    }
    // Check if viewCount is greater than or equal to 1 thousand
    else if (viewCount >= 1000) {
      return (viewCount / 1000).toFixed(0) + "K";
    }
    // For view counts less than 1 thousand
    else {
      return viewCount;
    }
  };

  const formatDate = (dateString) => {
    return formatDistanceToNow(new Date(dateString), { addSuffix: true });
  };

  //   console.log(info);
  return (
    <div className="video_card__mbl md:p-2 md:mx-1 md:mb-10 md:w-72 md:h-64 md:hover:shadow-xl">
      <img
        className="md:h-36 md:w-64 md:rounded-xl"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <div className="video_card__desc_mbl">
        <h1 className="font-bold pt-2 break-all line-clamp-2">{title}</h1>
        <h4 className="text-sm text-gray-600">{channelTitle}</h4>
        <div className="flex">
          <h4 className="text-sm text-gray-600">
            {formatViewCount(statistics.viewCount)} views
          </h4>
          <h4 className="text-sm text-gray-600">
            &nbsp; • {formatDate(publishedAt)}
          </h4>
        </div>
      </div>
    </div>
  );
};

const AdVideocard = (Videocard) => {
  return (
    <div className="p-1 m-1 border border-red-500">
      <Videocard />
    </div>
  );
};
export default Videocard;
