import React, { useEffect } from "react";
import { formatDistanceToNow } from "date-fns";

const SuggestionCard = ({ info, views }) => {
  const { snippet, id } = info;
  const { channelTitle, title, publishedAt, thumbnails } = snippet;

  const formatDate = (dateString) => {
    return formatDistanceToNow(new Date(dateString), { addSuffix: true });
  };
  return (
    <div className="md:flex md:m-2 md:w-full md:hover:bg-slate-100">
      <img
        className="md:h-20 md:w-auto md:max-w-40 md:rounded-lg w-full"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className="sugg_card__desc_mbl md:flex md:flex-col md:ml-2">
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
