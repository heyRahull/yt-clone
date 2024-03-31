import React, { useEffect, useState } from "react";
import { formatDate } from "../utils/helper";

const SearchCard = ({ thumbnail, data }) => {
  const { snippet, id } = data;
  const { channelTitle, description, publishedAt, thumbnails, title } = snippet;
  const [thumbnailUrl, setThumbnailUrl] = useState(
    `https://img.youtube.com/vi/${id.videoId}/maxresdefault.jpg`
  );

  useEffect(() => {
    checkThumbnail();
  }, []);

  const checkThumbnail = async () => {
    const data = await fetch(
      `https://img.youtube.com/vi/${id.videoId}/maxresdefault.jpg`
    );
    if (!data.ok) {
      setThumbnailUrl(`https://img.youtube.com/vi/${id.videoId}/hqdefault.jpg`);
    }
  };

  return (
    <div className="md:flex md:m-2 md:p-2">
      <img
        className="md:rounded-3xl md:h-[237px] md:w-[422px] md:max-w-full w-full"
        src={thumbnailUrl}
        alt="thumbnail"
      />
      <div className="search_card__mbl md:flex md:flex-col md:mx-4">
        <span className="font-semibold line-clamp-2 break-keep text-md">
          {title}
        </span>
        <div className="searchVdeo_detail_mbl py-3">
          <div className="flex">
            <span className="text-xs text-gray-600">3.8M views</span>
            <span className="text-xs text-gray-600">
              &nbsp; • {formatDate(publishedAt)}
            </span>
          </div>
          <span className="text-xs text-gray-600 md:py-3">
            {channelTitle}
            <span className="md:hidden">&nbsp; • &nbsp;</span>
          </span>
        </div>
        <span className="text-xs text-gray-600 seacrCard_desc__mbl">
          {description}
        </span>
      </div>
    </div>
  );
};

export default SearchCard;
