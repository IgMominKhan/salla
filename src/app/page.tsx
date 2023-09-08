import Image from "next/image";
import Features from "./(home)/Features";
import Bannar from "./(home)/Bannar";
import Categories from "./(home)/Categories";
import Discount from "./(home)/Discount";
import NewArrival from "./(home)/NewArrival";

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
        
      </main>
    </>
  );
}
