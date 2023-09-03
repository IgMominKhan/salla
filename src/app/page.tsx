import Image from "next/image";
import Features from "./(home)/Features";
import Bannar from "./(home)/Bannar";

export default function Home() {
  return (
    <>
      <main>
        {/* features section */}
        <Features />
        <Bannar />
      </main>
    </>
  );
}
