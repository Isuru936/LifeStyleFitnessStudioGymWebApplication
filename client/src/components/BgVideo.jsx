import React, { useEffect } from "react";
import video from "../assets/Snapinsta.app_video_DE4B219AB0DF57D567E63567642C3AAA_video_dashinit - Trim.mp4";
import developer1 from "../assets/developers/developer1.png";
import developer2 from "../assets/developers/developer2.png";
import developer3 from "../assets/developers/developer3.png";
import developer4 from "../assets/developers/developer4.png";
import developer5 from "../assets/developers/developer5.png";
import developer6 from "../assets/developers/developer6.png";

const developerImages = [
  developer1,
  developer2,
  developer3,
  developer4,
  developer5,
  developer6,
];

function BgVideo() {
  useEffect(() => {
    // Adding class to trigger flip animation on mount
    const imageContainers = document.querySelectorAll('.developer-image-container');
    imageContainers.forEach(container => {
      container.classList.add('flip-animation');
    });
  }, []);

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
        <div className="flex mt-8">
          {developerImages.map((image, index) => (
            <div key={index} className="developer-image-container w-24 h-24 rounded-full overflow-hidden mx-2">
              <img src={image} alt={`Developer ${index + 1}`} className="developer-image w-full h-full object-cover" />
            </div>
          ))}
          <div className="flex-grow"></div>
        </div>
      </div>
      <style>{`
        .developer-image-container {
          transition: transform 0.3s ease-in-out;
        }

        .developer-image-container:hover {
          transform: scale(1.2);
        }

        .developer-image-container.flip-animation {
          animation: flipIn 2s ease-out;
        }

        @keyframes flipIn {
          from {
            transform: rotateY(90deg);
            opacity: 0;
          }
          to {
            transform: rotateY(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default BgVideo;
