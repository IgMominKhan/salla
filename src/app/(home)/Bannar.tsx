import Image from "next/image";
import bannar from "@/assets/images/home/bannar/bannar.png";

const Bannar = () => {
  return (
    <>
      <div className="bg-[url('../assets/images/home/bannar/bannar-bg.png')]">
        <section className="main-container py-24 max-md:!p-4xl ">
          <div className="gap-4xl md:flex lg:gap-5xl">
            <div className=" flex flex-1 flex-col justify-center gap-xl text-clr-dark-white max-lg:mb-4xl max-md:items-center">
              <h1 className="text-4xl font-medium lg:text-5xl ">
                أفضل التخفيضات 2022
              </h1>
              <p>
                متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي
                بالإضافة إلى أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل
                بالتخفيضات على المنتجات
              </p>
                <button className="mt-2xl w-40 rounded border border-clr-primary-000 bg-clr-primary-000 py-3 text-center text-clr-dark-white">اكتشف المزيد</button>
            </div>

            <div className="flex-1">
              <Image src={bannar} alt="laptop mobile watch" placeholder="blur" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Bannar;
