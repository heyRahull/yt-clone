import { Avatar } from "@mui/material";
import React from "react";
import rahulImage from "../Images/rahul.png";

const CommentReply = ({ data }) => {
  const { snippet } = data;
  const { authorProfileImageUrl, authorDisplayName, textDisplay } = snippet;
  return (
    <div className="flex p-2 m-2 rounded-md">
      <Avatar
        alt="user"
        src={authorProfileImageUrl}
        // className="mx-2 w-15 h-12"
        sx={{ width: 24, height: 24 }}
      />
      <div className="px-3">
        <p className="font-bold text-sm">{authorDisplayName}</p>
        <p>{textDisplay}</p>
      </div>
    </div>
  );
};

export default CommentReply;
