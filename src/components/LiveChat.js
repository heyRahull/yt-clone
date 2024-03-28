import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { generateRandomMsg } from "../utils/helper";

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
      <div className="h-[600px] ml-2 p-2 border border-black bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {chatMessage.map((data, index) => {
          return (
            <ChatMessage name={data.name} message={data.message} key={index} />
          );
        })}
        <ChatMessage name="rahul" message="This is a comment" />
      </div>
      <form
        className="border border-black w-full ml-2 p-2"
        onSubmit={(e) => {
          e.preventDefault();
          setLiveMsg("");
        }}
      >
        <input
          className="w-96 px-2"
          type="text"
          value={liveMsg}
          onChange={(e) => {
            setLiveMsg(e.target.value);
          }}
        />
        <button
          className="bg-green-100 px-2 mx-2"
          onClick={() => {
            dispatch(
              addMessage({
                name: "RAHUL",
                message: liveMsg,
              })
            );
          }}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
