import React, { useEffect } from "react";
import { formatDistanceToNow } from "date-fns";

const SuggestionCard = ({ info, views }) => {
  const { snippet, id } = info;
  const { channelTitle, title, publishedAt, thumbnails } = snippet;

  const formatDate = (dateString) => {
    return formatDistanceToNow(new Date(dateString), { addSuffix: true });
  };
  return (
    <div className="flex m-2 w-full hover:bg-slate-100">
      <img
        className="h-20 w-auto max-w-40 rounded-lg"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className="flex flex-col ml-2">
        <span className="font-bold line-clamp-2 break-keep text-sm">
          {title}
        </span>
        <span className="text-xs text-gray-600">{channelTitle}</span>
        <div className="flex whitespace-nowrap">
          <span className="text-xs text-gray-600">{views}</span>
          <span className="text-xs text-gray-600 ">
            &nbsp; • {formatDate(publishedAt)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;
