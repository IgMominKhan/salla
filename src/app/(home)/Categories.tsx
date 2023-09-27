import Image from "next/image";
import leftIcon from "@/assets/icons/left.svg";
import getData from "@/utils/getData";
import CategoriesSlider from "@/app/(home)/CategoriesSlider";
import SectionTitles from "@/components/SectionTitles";
import SlideNavigation from "@/components/SlideNavigation";
import ShowAllBtn from "@/components/ShowAllBtn";

const Categories = async () => {
  const categories = await getData(`${process.env.SERVER_URL}/api/categories`);

  return (
    <>
      <section className="main-container lg:px-2">
        <SectionTitles
          title="منتجات مميزة"
          subTitle="تسوق احدث المنتجات المميزة المضافة جديد"
          LeftSideContent={
            <>
              <SlideNavigation
                prevSlide="prev-category"
                nextSlide="next-category"
              />
              <ShowAllBtn path="/categories" className='max-[1199px]:hidden'/>
            </>
          }
        />

        {/* swiper cagetory slider      */}
        <CategoriesSlider categories={categories} />

        {/* category bannar     */}

        <section className="grid gap-2xl pb-0  text-clr-dark-white lg:grid-cols-3">
          <div className="rounded bg-[url('../assets/images/home/category/bannar01.png')] bg-cover p-2xl md:py-14">
            <p className="text-clr-dark-gray-100">سماعات ديجتال</p>
            <p className="text-2xl">أفضل صوت نقي</p>
            <button className="mt-xl py-2">تسوق الآن</button>
          </div>
          <div className="rounded bg-[url('../assets/images/home/category/bannar02.png')] bg-cover p-2xl md:py-14">
            <p className="text-clr-dark-gray-100">سماعات ديجتال</p>
            <p className="text-2xl">أفضل صوت نقي</p>
            <button className="mt-xl py-2">تسوق الآن</button>
          </div>
          <div className="rounded bg-[url('../assets/images/home/category/bannar03.png')] bg-cover p-2xl md:py-14">
            <p className="text-cl-dark-gray-100">سماعات ديجتال</p>
            <p className="text-2xl">أفضل صوت نقي</p>
            <button className="mt-xl py-2">تسوق الآن</button>
          </div>
          <div className="col-span-full rounded bg-[url('../assets/images/home/category/bannar.png')] bg-cover bg-right p-2xl md:py-14">
            <p className="text-cl-dark-gray-100">سماعات ديجتال</p>
            <p className="text-2xl">أفضل صوت نقي</p>
            <button className="mt-xl py-2">تسوق الآن</button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Categories;
