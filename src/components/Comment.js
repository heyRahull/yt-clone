import { Avatar } from "@mui/material";
import React from "react";
import rahulImage from "../Images/rahul.png";

const Comment = ({ data }) => {
  // const { name, text, replies } = data;
  const createMarkup = (htmlString) => {
    return { __html: htmlString };
  };
  return (
    <div className="comment_mbl flex md:flex md:ml-0 md:pl-0 md:p-2 md:m-2 md:rounded-md">
      <Avatar
        alt="user"
        src={data.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
        className="mx-2 w-15 h-12"
      />
      <div className="px-3 break-words">
        <p className="font-bold text-sm">
          {data.snippet?.topLevelComment?.snippet?.authorDisplayName}
        </p>
        <p
          dangerouslySetInnerHTML={createMarkup(
            data.snippet?.topLevelComment?.snippet?.textDisplay
          )}
        />

        {/* <p>{data.snippet?.topLevelComment?.snippet?.textDisplay}</p> */}
      </div>
    </div>
  );
};

export default Comment;
