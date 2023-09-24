"use client";

import { useRef, useState } from "react";

const FeatureVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const video = useRef<HTMLVideoElement>(null);

  // toggle video play and play/pause icon
  const togglePlay = () => {
    if (isPlaying) {
      video?.current?.pause();
      setIsPlaying(false);
    } else {
      video?.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="feature-video-container group relative aspect-[16/6]">
      <video
        poster="feature-video-poster.png"
        placeholder="true"
        width="100%"
        className="relative aspect-[16/6]"
        id="feature-video"
        ref={video}
      >
        <source
          className="mp4-source"
          src="//cdn-cf-east.streamable.com/video/mp4/jx0ax7.mp4?Expires=1695843377336&amp;Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&amp;Signature=ZG4J5BzyfCXfHH75EhZ0cYmDGuOoYSJ6vCdr0wrBp3WK9VqV10UacajL4LQur0O-b4C5vJc-9~8OBDncGA~0d1goytMAiAhlAaAhpRaj8TiT1E19o4AZNEu6AMo9xpbw9gLcttFIvm9W5J0Q47iZhqQ1ofhnKTLCRe-JyYTVHqrjCr-QpUaB17lubTG8pN5lEgBw7d~uz5V-mE9HbwAPsQEArGfUlNJuAvNdPXKGPy8MWFUk-6kTnwqXyzuDwFlurAUoByDRtK~3WyhTYNwvgKDVJARt4ZIikIMbd3aeNKiYAmxNs2vjcKYFLNcixkJXOWAGvT2JafFtn5tVNYqirw__"
        />
      </video>

      {/* PlayIcon  */}
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
                fillRule="evenodd"
                clipRule="evenodd"
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
    </div>
  );
};
export default FeatureVideo;
