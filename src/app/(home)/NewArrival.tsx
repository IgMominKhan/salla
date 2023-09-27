import getData from "@/utils/getData";
import ProductSlider from "@/components/ProductSlider";
import SectionTitles from "@/components/SectionTitles";
import SlideNavigation from "@/components/SlideNavigation";

const NewArrival = async () => {
  const products = await getData(`${process.env.SERVER_URL}/api/products`);

  // console.log(products);
  return (
    <div className="bg-clr-dark-gray-100">
      <section className="main-container">
        <SectionTitles
          title="وصل حديثا"
          subTitle="تسوق احدث المنتجات المميزة المضافة جديد"
          LeftSideContent={
            <SlideNavigation
              prevSlide="prev-new-arrival"
              nextSlide="next-new-arrival"
            />
          }
        />
        {/* product slider */}
        <ProductSlider products={products} />
      </section>
    </div>
  );
};

export default NewArrival;
