import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "flex",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "Entertainment",
    "Mixes",
    "Tests",
    "Music",
  ];
  return (
    <div className="flex flex-wrap">
      {buttonList.map((name, index) => {
        return <Button name={name} key={index} />;
      })}
    </div>
  );
};

export default ButtonList;
