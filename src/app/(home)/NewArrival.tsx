import Image from "next/image";
import leftIcon from "@/assets/icons/left.svg";
import getData from "@/utils/getData";
import ProductSlider from "@/components/ProductSlider";

const NewArrival = async () => {
  const products = await getData("http://localhost:3000/api/products");

  // console.log(products);
  return (
    <div className="bg-clr-dark-gray-100">
      <section className="main-container">
        <div className="flex justify-between">
          <div>
            <h3 className="mb-1 text-2xl text-clr-dark-gray-600 font-bold">
              منتجات مميزة
            </h3>
            <p className="text-clr-dark-gray-400">
              تسوق احدث المنتجات المميزة المضافة جديد
            </p>
          </div>
          <button className="btn self-end">
            <span>
              عرض الكل
            </span>
            <Image className="h-8" src={leftIcon} alt="left icon" />
          </button>
        </div>

        {/* product slider */}
        <ProductSlider products={products} />
      </section>
    </div>
  );
};

export default NewArrival;
