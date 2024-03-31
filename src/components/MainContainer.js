import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="overflow-x-hidden md:ml-16">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
