import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Avatar } from "@mui/material";
import { CHANNEL_DETAIL_API, GOOGLE_API_KEY } from "../utils/constants";
import { formatViewCount } from "../utils/constants";

const Videocard = ({ info }) => {
  // console.log(info);
  const [channelDetail, setChannelDetail] = useState();
  const { snippet, statistics } = info;
  const { channelId, title, channelTitle, publishedAt, thumbnails } = snippet;

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

  const formatDate = (dateString) => {
    return formatDistanceToNow(new Date(dateString), { addSuffix: true });
  };

  //   console.log(info);
  return (
    <div className="video_card__mbl md:p-2 md:mx-1 md:mb-10 md:w-72 md:h-64">
      <img
        className="md:h-36 md:w-[100%] md:rounded-xl"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <div className="video_card__desc_mbl flex">
        <Avatar
          alt="channel_logo"
          src={channelDetail}
          className="mr-2 mt-2"
          sx={{ width: 34, height: 34 }}
        />
        <div>
          <h1 className="font-semibold pt-2 break-all line-clamp-2 mb-1">
            {title}
          </h1>
          <h4 className="text-xs text-gray-600">{channelTitle}</h4>
          <div className="flex">
            <h4 className="text-xs text-gray-600">
              {formatViewCount(statistics.viewCount)} views
            </h4>
            <h4 className="text-xs text-gray-600">
              &nbsp; • {formatDate(publishedAt)}
            </h4>
          </div>
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
