import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { generateRandomMsg } from "../utils/helper";
import { IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const LiveChat = () => {
  const [liveMsg, setLiveMsg] = useState();
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      console.log("hi");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMsg(),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="border border-gray-300 rounded-2xl ml-2 p-2 pl-4 mt-3 font-semibold">
        <span className="text-xl p-2 ">Top Chat</span>
        <div className="h-[600px] p-1   flex flex-col-reverse ">
          <div className="border border-gray-300 px-0 pb-[2px] pt-2 pl-2 font-semibold self-end w-full">
            <form
              className="flex"
              onSubmit={(e) => {
                e.preventDefault();
                setLiveMsg("");
                dispatch(
                  addMessage({
                    name: "RAHUL",
                    message: liveMsg,
                  })
                );
              }}
            >
              <TextField
                className="w-full"
                id="standard-basic"
                variant="standard"
                value={liveMsg}
                onChange={(e) => {
                  setLiveMsg(e.target.value);
                }}
              />
              <IconButton
                onClick={() => {
                  dispatch(
                    addMessage({
                      name: "RAHUL",
                      message: liveMsg,
                    })
                  );
                  setLiveMsg("");
                }}
              >
                <SendIcon className="mx-2" />
              </IconButton>
            </form>
          </div>
          <div className=" overflow-y-scroll  mb-6">
            {chatMessage.map((data, index) => {
              return (
                <ChatMessage
                  name={data.name}
                  message={data.message}
                  key={index}
                />
              );
            })}
            {/* <ChatMessage name="rahul" message="This is a comment" /> */}
          </div>

          {/* <div className="border-b border-b-gray-300 m-2 pb-2 pl-2 font-semibold ">
          Top Chat
        </div> */}
        </div>
      </div>
    </>
  );
};

export default LiveChat;
