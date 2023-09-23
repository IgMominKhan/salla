"use client";

import { useState } from "react";

const PlayIcon = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = document.getElementById("feature-video");
    const playIcon = document.querySelector(".play-icon");

    if (isPlaying) {
      video?.pause();
      setIsPlaying(false);
    } else {
      video?.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      className={`play-icon absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:block ${
        isPlaying ? "hidden" : "block"
      }`}
      onClick={togglePlay}
    >
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="play-icon_outer-circle"
          cx="49.5"
          cy="49.5"
          r="49"
          stroke="white"
        />

        <circle
          className="play-icon_bg"
          cx="50"
          cy="50"
          r="35"
          fill="#62D0B6"
        />
        {!isPlaying
          ? (
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M58.3174 46.8213L45.0036 38.4897C42.7735 37.0908 40 38.8567 40 41.6648V58.3347C40 61.1463 42.7735 62.9053 45.0002 61.5132L58.3174 53.1816C60.5609 51.7758 60.5609 48.2271 58.3174 46.8213Z"
              fill="white"
              className="play"
            />
          )
          : (
            <>
              <rect
                width="8"
                height="22"
                x={"55%"}
                y={"40%"}
                fill="white"
                className="pause"
              />

              <rect
                width="8"
                height="22"
                x={"38%"}
                y={"40%"}
                fill="white"
                className="pause"
              />
            </>
          )}
      </svg>
    </div>
  );
};

export default PlayIcon;
