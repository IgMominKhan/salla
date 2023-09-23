import PlayIcon from "@/components/PlayIcon";
const FeatureVideo = () => {
  return (
    <div className="feature-video-container group relative">
      <video
        poster="feature-video-poster.png"
        placeholder="true"
        width="100%"
        className="relative aspect-[16/6]"
        id="feature-video"
      >
        <source
          src="feature-video.mp4"
          type="video/mp4"
        />

        Your browser does not support the video tag
      </video>
      <PlayIcon />
    </div>
  );
};
export default FeatureVideo;
