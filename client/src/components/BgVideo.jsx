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
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-6xl font-extrabold text-center">Welcome</h1>
        <p className="font-extrabold text-3xl text-center">to</p>
        <p className="font-extrabold text-3xl text-center">LSFS Gym</p>
        <p className="text-lg text-center mx-auto max-w-lg mt-4">
          At LSFS Gym, we believe that staying fit and strong is not just a goal, but a way of life. Our state-of-the-art facilities and expert trainers are here to support you on your fitness journey, whether you're a beginner or a seasoned athlete.
        </p>
      </div>
    </div>
  );
}

export default BgVideo;
