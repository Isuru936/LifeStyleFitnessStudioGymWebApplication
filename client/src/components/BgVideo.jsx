import React from "react";
import video from "../assets/Snapinsta.app_video_DE4B219AB0DF57D567E63567642C3AAA_video_dashinit - Trim.mp4";
function BgVideo() {
  return (
    <div className="w-screen h-screen">
      <video
        className="w-screen h-screen object-cover"
        src={video}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-screen h-screen top-0 flex flex-col justify-center align-middle text-white">
        <h1 className="text-6xl font-extrabold text-center">Welcome</h1>
        <p className="font-extrabold text-3xl text-center">to</p>
        <p className="font-extrabold text-3xl text-center">LSFS</p>
      </div>
    </div>
  );
}

export default BgVideo;
