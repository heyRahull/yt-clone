import { Avatar } from "@mui/material";
import React from "react";
import rahulImage from "../Images/rahul.png";

const Comment = ({ data }) => {
  // const { name, text, replies } = data;
  return (
    <div className="flex p-2 m-2 rounded-md">
      <Avatar
        alt="user"
        src={data.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
        className="mx-2 w-15 h-12"
      />
      <div className="px-3">
        <p className="font-bold text-sm">
          {data.snippet?.topLevelComment?.snippet?.authorDisplayName}
        </p>
        <p>{data.snippet?.topLevelComment?.snippet?.textDisplay}</p>
      </div>
    </div>
  );
};

export default Comment;
