import Image from "next/image";
import leftIcon from "@/assets/icons/left.svg";
import getData from "@/utils/getData";
import CategoriesSlider from "@/app/(home)/CategoriesSlider";

const Categories = async () => {
  const categories = await getData(`${process.env.SERVER_URL}/api/categories`);
  console.log(process.env.SERVER_URL);

  return (
    <>
      <section className="main-container">
        <div className="flex justify-between">
          <div>
            <h3 className="mb-1 text-2xl text-clr-dark-gray-600 font-bold">
              منتجات مميزة
            </h3>
            <p>تسوق احدث المنتجات المميزة المضافة جديد</p>
          </div>
          <button className="btn self-end">
            <span>
              عرض الكل
            </span>
            <Image className="h-8" src={leftIcon} alt="left icon" />
          </button>
        </div>

        {/* swiper cagetory slider      */}
        <CategoriesSlider categories={categories} />

        {/* category bannar     */}

        <section className="grid gap-2xl lg:grid-cols-3  text-clr-dark-white pb-0">
          <div className="p-2xl md:py-14 bg-[url('../assets/images/home/category/bannar01.png')] bg-cover rounded">
            <p className="text-clr-dark-gray-100">سماعات ديجتال</p>
            <p className="text-2xl">أفضل صوت نقي</p>
            <button className="py-2 mt-xl">تسوق الآن</button>
          </div>
          <div className="p-2xl md:py-14 bg-[url('../assets/images/home/category/bannar02.png')] bg-cover rounded">
            <p className="text-clr-dark-gray-100">سماعات ديجتال</p>
            <p className="text-2xl">أفضل صوت نقي</p>
            <button className="py-2 mt-xl">تسوق الآن</button>
          </div>
          <div className="p-2xl md:py-14 bg-[url('../assets/images/home/category/bannar03.png')] bg-cover rounded">
            <p className="text-cl-dark-gray-100">سماعات ديجتال</p>
            <p className="text-2xl">أفضل صوت نقي</p>
            <button className="py-2 mt-xl">تسوق الآن</button>
          </div>
          <div className="p-2xl md:py-14 col-span-full bg-[url('../assets/images/home/category/bannar.png')] bg-cover bg-right rounded">
            <p className="text-cl-dark-gray-100">سماعات ديجتال</p>
            <p className="text-2xl">أفضل صوت نقي</p>
            <button className="py-2 mt-xl">تسوق الآن</button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Categories;
