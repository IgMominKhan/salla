const LeftSlideIcon = ({ ...props }): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      fill="none"
      viewBox="0 0 46 46"
      className={`max-sm:h-10 max-sm:w-10" ${props?.className}`}
    >
      <rect width="45" height="45" x=".5" y=".5" fill="#fff" rx="22.5" />
      <path
        fill="#666"
        d="M25.642 29a.688.688 0 0 1-.489-.204l-5.281-5.293a.7.7 0 0 1-.204-.49c0-.176.068-.394.204-.516l5.281-5.293a.687.687 0 0 1 .978 0 .69.69 0 0 1 0 .98L21.311 23l4.82 4.83a.69.69 0 0 1 0 .98.736.736 0 0 1-.489.19Z"
      />
      <rect width="45" height="45" x=".5" y=".5" stroke="#ccc" rx="22.5" />
    </svg>
  );
};

const RightSlideIcon = ({ ...props }): JSX.Element => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="46"
        fill="none"
        viewBox="0 0 46 46"
        className={`max-sm:h-10 max-sm:w-10" ${props?.className}`}
      >
        <rect width="45" height="45" x=".5" y=".5" fill="#fff" rx="22.5" />
        <path
          fill="#666"
          d="M20.36 29a.689.689 0 0 1-.488-.204.69.69 0 0 1 0-.978l4.82-4.825-4.82-4.81a.69.69 0 0 1 0-.98.688.688 0 0 1 .977 0l5.282 5.287a.7.7 0 0 1 .204.49c0 .176-.068.394-.204.516l-5.282 5.3a.689.689 0 0 1-.489.204Z"
        />
        <rect width="45" height="45" x=".5" y=".5" stroke="#ccc" rx="22.5" />
      </svg>
    </>
  );
};

const PlayPauseIcon = ({ ...props }): JSX.Element => {
  const { isPlaying } = props;
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[70px] w-[70px] md:h-[100px] md:w-[100px]"
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
  );
};
export { LeftSlideIcon, PlayPauseIcon, RightSlideIcon };
