import React from "react";

const SearchCard = () => {
  return (
    <div className="flex m-2 p-2">
      <img
        className="rounded-lg h-[237px] w-[422px]  md:h-[280px] md:w-[500px]"
        src="https://i.ytimg.com/vi/RCnDSJxLeH4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfn-kIbaylqWxr2Qdpgif_-pWCiw"
        alt=""
      />
      <div className="flex flex-col mx-4">
        <span className="font-semibold line-clamp-2 break-keep text-md">
          Jetha छीन रहा है Bapuji से Mixture | Taarak Mehta Ka Ooltah Chashmah |
          Bapuji & Tapu Sena Special by LIV Comedy 3,858,559 views 1 month ago
          17 minutes
        </span>
        <div className="flex ">
          <span className="text-xs text-gray-600">3.8M views</span>
          <span className="text-xs text-gray-600">&nbsp; • 1 month ago</span>
        </div>
        <span className="text-xs text-gray-600 py-3">Sony LIV</span>
        <span className="text-xs text-gray-600">
          Everyone is furious over the blanket donation fraud. Champak Chacha
          discovers what the beggars actually require. Jethalal's wife ...
        </span>
      </div>
    </div>
  );
};

export default SearchCard;
