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
    <div className="flex m-2 p-2">
      <img
        style={{
          height: "237px", // Adjust height as needed
          width: "422px", // Adjust width as needed
          maxWidth: "100%", // Ensure the image doesn't exceed the container's width
        }}
        className="rounded-3xl h-[237px] w-auto max-w-[422px]  md:h-[280px] md:w-auto md:max-w-[500px]"
        src={thumbnailUrl}
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
