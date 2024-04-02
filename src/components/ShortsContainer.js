import React from "react";
import ShortsCard from "./ShortsCard";

const urls = [
  "zz9YgUoisOA?si=s9GCnYN21rvY_eN4",
  "KzNLM4nmRak?si=RZxzZvqAAjdEu98J",
  "lvvgr7xx91E?si=-I300sb0d5oYTZ1J",
  "WCciYRmBJNk?si=U2FUS-nXTTajDq2V",
  "AG5rqyX1gwo?si=7QSZabczQGgRb6LP",
  "V6nLOiUtgVM?si=XBtwmeMfyPiJamyX",
  "pmhUCHDDAeM?si=9V0gMJBaipKZQj_3",
  "IpkW0FkpeV0?si=FiFcmg0s5vVVXcxD",
  "IzmYeodbGw4?si=TPTSPYU8G51kFnxI",
  "JVMTOdMTbYI?si=_YwX4kLwgcMoFUNH",
];

const ShortsContainer = () => {
  return (
    <div>
      {urls.map((id) => {
        return <ShortsCard id={id} />;
      })}
    </div>
  );
};

export default ShortsContainer;
