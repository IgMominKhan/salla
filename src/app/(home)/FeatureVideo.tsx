"use client";

import { PlayPauseIcon } from "@/components/icons/IconsLib";
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
       <PlayPauseIcon isPlaying={isPlaying} /> 
      </div>
    </div>
  );
};
export default FeatureVideo;
