import Image from "next/image";
import bannar from "@/assets/images/home/bannar/bannar.png";

const Bannar = () => {
  return (
    <>
      <div className="bg-[url('../assets/images/home/bannar/bannar-bg.png')]">
        <section className="max-md:!p-4xl py-24 main-container ">
          <div className="md:flex gap-4xl lg:gap-5xl">
            <div className=" flex-1 flex max-md:items-center justify-center flex-col gap-xl text-clr-dark-white max-lg:mb-4xl">
              <h1 className="text-4xl lg:text-5xl font-medium ">
                أفضل التخفيضات 2022
              </h1>
              <p>
                متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي
                بالإضافة إلى أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل
                بالتخفيضات على المنتجات
              </p>
                <button className="py-3 mt-2xl w-40 text-center bg-clr-primary-000 text-clr-dark-white border border-clr-primary-000 rounded">اكتشف المزيد</button>
            </div>

            <div className="flex-1">
              <Image src={bannar} alt="laptop mobile watch" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Bannar;
