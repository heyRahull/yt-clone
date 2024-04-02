import React from "react";

const ShortsCard = ({ id }) => {
  return (
    <div className="mb-8 relative shorts_card_mbl">
      <iframe
        className="rounded-xl md:w-[315px] md:h-[550px] w-full "
        style={{ height: "100vh" }}
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default ShortsCard;
