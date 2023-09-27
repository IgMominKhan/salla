import { LeftSlideIcon, RightSlideIcon } from "@/components/icons/IconsLib";

const SlideNavigation = ({ ...props }) => {
  const { prevSlide, nextSlide } = props;
  return (
    <div className="flex gap-3 self-end">
      <button className={prevSlide}>
        <RightSlideIcon />
      </button>
      <button className={nextSlide}>
        <LeftSlideIcon />
      </button>
    </div>
  );
};

export default SlideNavigation;
