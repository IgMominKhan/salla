import PlayIcon from "@/components/PlayIcon";
const FeatureVideo = () => {
  return (
    <div className="feature-video-container group relative aspect-[16/6]">
      <video
        poster="feature-video-poster.png"
        placeholder="true"
        width="100%"
        className="relative aspect-[16/6]"
        id="feature-video"
      >
      </video>
      <PlayIcon />
    </div>
  );
};
export default FeatureVideo;
