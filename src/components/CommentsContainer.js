import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";
import { useLocation, useParams } from "react-router-dom";
import CommentReply from "./CommentReply";
import { GOOGLE_API_KEY } from "../utils/constants";

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
  const [comments, setComments] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const videoId = searchParams.get("v");
  // console.log(videoId);

  useEffect(() => {
    fetchComments();
  }, [videoId]);

  const fetchComments = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${GOOGLE_API_KEY}&maxResults=50`
    );
    const json = await data.json();
    setComments(json.items);
  };
  console.log(comments);
  return (
    <>
      <div className="md:m-5 md:p-2 md:w-8/12">
        <h1 className="text-2xl font-bold ml-4">Comment section</h1>
        {comments &&
          comments.map((comment) => (
            <>
              <Comment data={comment} />
              {comment.replies && (
                <React.Fragment>
                  {comment.replies.comments.map((comment) => (
                    <div className="md:pl-5 md:ml-5">
                      <CommentReply
                        data={comment}
                        url={comment.snippet?.authorProfileImageUrl}
                        name={comment.snippet?.authorDisplayName}
                        textDisplay={comment.snippet?.textDisplay}
                      />
                    </div>
                  ))}
                </React.Fragment>
              )}
            </>
          ))}

        {/* <CommentsList comments={commentsData} /> */}
      </div>
    </>
  );
};

export default CommentsContainer;
