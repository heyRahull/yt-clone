import { Avatar } from "@mui/material";
import React from "react";
import rahulImage from "../Images/rahul.png";

const CommentReply = ({ data }) => {
  const { snippet } = data;
  const { authorProfileImageUrl, authorDisplayName, textDisplay } = snippet;
  const createMarkup = (htmlString) => {
    return { __html: htmlString };
  };
  return (
    <div className="comment_mbl pl-10 flex md:flex md:pl-0 md:p-2 md:m-2 rounded-md">
      <Avatar
        alt="user"
        src={authorProfileImageUrl}
        // className="mx-2 w-15 h-12"
        sx={{ width: 24, height: 24 }}
      />
      <div className="px-3 break-words">
        <p className="font-bold text-sm">{authorDisplayName}</p>
        <p dangerouslySetInnerHTML={createMarkup(textDisplay)} />
        {/* <p>{textDisplay}</p> */}
      </div>
    </div>
  );
};

export default CommentReply;
