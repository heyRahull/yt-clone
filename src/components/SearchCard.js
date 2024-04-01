import React, { useEffect, useState } from "react";
import { formatDate } from "../utils/helper";
import { Avatar } from "@mui/material";
import { GOOGLE_API_KEY } from "../utils/constants";
import { CHANNEL_DETAIL_API } from "../utils/constants";
import { formatViewCount } from "../utils/constants";

const SearchCard = ({ thumbnail, data }) => {
  const [viewCount, setViewCount] = useState();
  const [channelDetail, setChannelDetail] = useState();
  const { snippet, id } = data;
  const {
    channelId,
    channelTitle,
    description,
    publishedAt,
    thumbnails,
    title,
  } = snippet;
  const [thumbnailUrl, setThumbnailUrl] = useState(
    `https://img.youtube.com/vi/${id.videoId}/maxresdefault.jpg`
  );

  useEffect(() => {
    checkThumbnail();
  }, []);

  useEffect(() => {
    getChannelDetails();
  }, []);

  const getChannelDetails = async () => {
    const data = await fetch(
      `${CHANNEL_DETAIL_API}&id=${channelId}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();

    setChannelDetail(json.items[0].snippet.thumbnails.high.url);
  };

  useEffect(() => {
    getVideoDetails();
  }, []);

  const getVideoDetails = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id.videoId}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    console.log(json);
    setViewCount(json.items[0].statistics.viewCount);
  };

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
            <span className="text-xs text-gray-600">
              {formatViewCount(viewCount)}
            </span>
            <span className="text-xs text-gray-600">
              &nbsp; • {formatDate(publishedAt)}
            </span>
          </div>
          <span className="text-xs text-gray-600 md:py-3 flex items-center">
            <Avatar
              alt="channel_logo"
              src={channelDetail}
              className="mr-2 "
              sx={{ width: 24, height: 24 }}
            />
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
