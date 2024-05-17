import React from "react";
import video from "../assets/Snapinsta.app_video_DE4B219AB0DF57D567E63567642C3AAA_video_dashinit - Trim.mp4";

function BgVideo() {
  return (
    <div className="relative w-screen h-screen">
      <video
        className="w-screen h-screen object-cover"
        src={video}
        autoPlay
        loop
        muted
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 text-center">
        <h1 className="text-6xl font-extrabold">Welcome</h1>
        <p className="font-extrabold text-3xl mt-4">to</p>
        <p className="font-extrabold text-3xl">LSFS Gym</p>
      </div>
    </div>
  );
}

export default BgVideo;
