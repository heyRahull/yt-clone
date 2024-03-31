import React from "react";
import { formatDate } from "../utils/helper";

const SearchCard = ({ thumbnail, data }) => {
  const { snippet } = data;
  const { channelTitle, description, publishedAt, thumbnails, title } = snippet;
  return (
    <div className="flex m-2 p-2">
      <img
        className="rounded-3xl h-[237px] w-auto max-w-[422px]  md:h-[280px] md:w-auto md:max-w-[500px]"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <div className="flex flex-col mx-4">
        <span className="font-semibold line-clamp-2 break-keep text-md">
          {title}
        </span>
        <div className="flex ">
          <span className="text-xs text-gray-600">3.8M views</span>
          <span className="text-xs text-gray-600">
            &nbsp; • {formatDate(publishedAt)}
          </span>
        </div>
        <span className="text-xs text-gray-600 py-3">{channelTitle}</span>
        <span className="text-xs text-gray-600">{description}</span>
      </div>
    </div>
  );
};

export default SearchCard;
