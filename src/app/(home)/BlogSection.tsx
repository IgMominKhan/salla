import Image from "next/image";
import leftIcon from "@/assets/icons/left.svg";
import SectionTitles from "@/components/SectionTitles";

const LeftSideContent = (
  <button className="btn self-end">
    <span>
      عرض الكل
    </span>
    <Image className="h-8" src={leftIcon} alt="left icon" />
  </button>
);


const BlogSection = () => {
  return (
    <>
      <section className="main-container">
        <SectionTitles
          title="أحدث المقالات"
          subTitle="تسوق احدث المنتجات المميزة المضافة جديد"
          LeftSideContent={LeftSideContent}
        />
      </section>
    </>
  );
};

export default BlogSection;
