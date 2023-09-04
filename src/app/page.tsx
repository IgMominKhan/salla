import Image from "next/image";
import Features from "./(home)/Features";
import Bannar from "./(home)/Bannar";
import Categories from "./(home)/Categories";

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
        
      </main>
    </>
  );
}
