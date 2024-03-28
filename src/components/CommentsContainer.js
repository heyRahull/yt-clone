import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Rahul Agarwal",
    text: "lorem ipsum dolor sit amet, smaple comment",
    replies: [],
  },
  {
    name: "Rahul Agarwal",
    text: "lorem ipsum dolor sit amet, smaple comment",
    replies: [
      {
        name: "Rahul Agarwal",
        text: "lorem ipsum dolor sit amet, smaple comment",
        replies: [],
      },
      {
        name: "Rahul Agarwal",
        text: "lorem ipsum dolor sit amet, smaple comment",
        replies: [],
      },
    ],
  },
  {
    name: "Rahul Agarwal",
    text: "lorem ipsum dolor sit amet, smaple comment",
    replies: [
      {
        name: "Rahul Agarwal",
        text: "lorem ipsum dolor sit amet, smaple comment",
        replies: [
          {
            name: "Rahul Agarwal",
            text: "lorem ipsum dolor sit amet, smaple comment",
            replies: [],
          },
          {
            name: "Rahul Agarwal",
            text: "lorem ipsum dolor sit amet, smaple comment",
            replies: [],
          },
        ],
      },
      {
        name: "Rahul Agarwal",
        text: "lorem ipsum dolor sit amet, smaple comment",
        replies: [],
      },
    ],
  },
  {
    name: "Rahul Agarwal",
    text: "lorem ipsum dolor sit amet, smaple comment",
    replies: [],
  },
  {
    name: "Rahul Agarwal",
    text: "lorem ipsum dolor sit amet, smaple comment",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comment section</h1>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
