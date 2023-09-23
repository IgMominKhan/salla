import Features from "./(home)/Features";
import Bannar from "./(home)/Bannar";
import Categories from "./(home)/Categories";
import Discount from "./(home)/Discount";
import NewArrival from "./(home)/NewArrival";
import ProductAds from "./(home)/ProductAds";
import BannarSlider from "./(home)/BannarSlider";
import SpecialProducts from "./(home)/SpecialProducts";
import FeatureVideo from "./(home)/FeatureVideo";

export default function Home() {
  return (
    <>
      <main>
        
        {/* features section */}
        <Features />

        {/* bannar section */}
        <Bannar />

        {/* categories section */}
        <Categories />

        {/* discount section */}
        <Discount />

        {/* new arrival section */}
        <NewArrival />

        {/* product ads */}
        <ProductAds />

        {/* featured bannar */}
        <BannarSlider />

        {/* Special products */}
       <SpecialProducts /> 

        {/* feature video */}
       <FeatureVideo /> 
      </main>
    </>
  );
}
