import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React from "react";

function getRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-1">
      <Avatar
        className="mr-4"
        sx={{ width: 24, height: 24, bgcolor: deepOrange[500] }}
      >
        <span className="text-xs">{name[0]}</span>
      </Avatar>
      <span className="font-semibold text-xs text-gray-600">{name}</span>
      <span className="px-2 text-xs">{message}</span>
    </div>
  );
};

export default ChatMessage;
