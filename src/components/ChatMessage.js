import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8"
        src="https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png"
        alt="user"
      />
      <span className="font-bold">{name}</span>
      <span className="px-2">{message}</span>
    </div>
  );
};

export default ChatMessage;
