import LeftIcon from "@/assets/icons/slideLeft.svg";
import Image from "next/image";

export const RightSlide = ({ ...props }): JSX.Element => {
  const { className } = props;
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="46"
        fill="none"
        viewBox="0 0 46 46"
        className={className}
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

export const LeftSlide = ({ ...props }): JSX.Element => {
  const { className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      fill="none"
      viewBox="0 0 46 46"
      className={className}
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
const SectionTitles = ({ ...titles }): JSX.Element => {
  const { title, subTitle, LeftSideContent } = titles;
  return (
    <div className="mb-3xl flex justify-between">
      <div>
        <h3 className="mb-1 text-2xl font-bold text-clr-dark-gray-600">
          {title}
        </h3>
        <p>{subTitle}</p>
      </div>

      {LeftSideContent && LeftSideContent}
    </div>
  );
};

export default SectionTitles;
