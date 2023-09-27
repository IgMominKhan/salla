import Image from "next/image";
import leftIcon from "@/assets/icons/left.svg";
import getData from "@/utils/getData";
import Product from "./Product";
import SectionTitles from "@/components/SectionTitles";
import ShowAllBtn from "@/components/ShowAllBtn";

const SpecialProducts = async () => {
  const data = await getData(`${process.env.SERVER_URL}/api/products`);
  return (
    <section className="main-container">
      <SectionTitles
        title="منتجات مميزة"
        subTitle="تسوق احدث المنتجات المميزة المضافة جديد"
        LeftSideContent={
          <ShowAllBtn path="/products" query={{ sepcial: true }} />
        }
      />

      <div className="mt-3xl grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-xl sm:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] xl:gap-2xl ">
        {data.map((item: any) => <Product product={item} key={item._id} />)}
      </div>
    </section>
  );
};

export default SpecialProducts;
