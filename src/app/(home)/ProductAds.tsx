import Image from "next/image";
import add1 from "@/assets/images/home/product ads/product01.png";
import add2 from "@/assets/images/home/product ads/product02.png";
import add3 from "@/assets/images/home/product ads/product03.png";
const ProductAds = () => {
  return (
    <>
      <section className="main-container grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-2xl text-center text-clr-dark-gray-600 ">
        <div className="flex flex-col gap-2xl rounded bg-clr-primary-50 px-6xl py-3xl">
          <Image src={add3} className="max-h-[265px] w-auto" alt="headphone" placeholder="blur" />
          <div>
            <h3 className="text-lg font-bold">معالجة أسرع وأكثر ثراءً</h3>
            <p className="text-clr-dark-gray-400">
              أسرع من EXPEED 4 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات
              لتقليل التشويش
            </p>
            <button className="mt-3 w-full rounded py-2.5">تسوق الآن</button>
          </div>
        </div>
        <div className="flex flex-col gap-2xl rounded bg-clr-danger-100 px-6xl py-3xl ">
          <Image
            src={add2}
            className="mx-auto max-h-[265px] w-3/4"
            placeholder="blur"
            alt="headphone"
          />
          <div>
            <h3 className="text-lg font-bold">معالجة أسرع وأكثر ثراءً</h3>
            <p className="text-clr-dark-gray-400">
              أسرع من EXPEED 5 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات
              لتقليل التشويش
            </p>
            <button className="mt-3 w-full rounded py-2.5">تسوق الآن</button>
          </div>
        </div>
        <div className="flex flex-col gap-2xl rounded bg-clr-warning-100 px-6xl py-3xl ">
          <Image src={add1} className="max-h-[265px] w-auto" alt="headphone" placeholder="blur" />
          <div>
            <h3 className="text-lg font-bold">معالجة أسرع وأكثر ثراءً</h3>
            <p className="text-clr-dark-gray-400">
              أسرع من EXPEED 4 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات
              لتقليل التشويش
            </p>
            <button className="mt-3 w-full rounded py-2.5">تسوق الآن</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductAds;
