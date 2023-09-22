import Image from "next/image";
import leftIcon from "@/assets/icons/left.svg";
import getData from "@/utils/getData";
import Product from "./Product";

const SpecialProducts = async () => {
  const data = await getData(`${process.env.SERVER_URL}/api/products`);
  return (
    <section className="main-container">
        <div className="flex justify-between">
          <div>
            <h3 className="mb-1 text-2xl font-bold text-clr-dark-gray-600">
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

        <div className="mt-3xl grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-xl sm:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] xl:gap-2xl ">
          {data.map((item: any) => <Product product={item} key={item._id} />)}
        </div>
    </section>
  );
};

export default SpecialProducts;
