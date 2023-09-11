import Image from "next/image";
import add1 from "@/assets/images/home/product ads/product01.png";
import add2 from "@/assets/images/home/product ads/product02.png";
import add3 from "@/assets/images/home/product ads/product03.png";
const ProductAds = () => {
  return (
    <>
      <section className="main-container text-clr-dark-gray-600 text-center grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-2xl ">
        <div className="flex flex-col gap-2xl px-6xl py-3xl bg-clr-primary-50 rounded">
          <Image src={add3} className="max-h-[265px] w-auto" alt="headphone" />
          <div>
            <h3 className="font-bold text-lg">معالجة أسرع وأكثر ثراءً</h3>
            <p className="text-clr-dark-gray-400">
              أسرع من EXPEED 4 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات
              لتقليل التشويش
            </p>
            <button className="w-full py-2.5 mt-3 rounded">تسوق الآن</button>
          </div>
        </div>
        <div className="flex flex-col gap-2xl px-6xl py-3xl bg-clr-danger-100 rounded ">
          <Image
            src={add2}
            className="max-h-[265px] w-3/4 mx-auto"
            alt="headphone"
          />
          <div>
            <h3 className="font-bold text-lg">معالجة أسرع وأكثر ثراءً</h3>
            <p className="text-clr-dark-gray-400">
              أسرع من EXPEED 5 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات
              لتقليل التشويش
            </p>
            <button className="w-full py-2.5 mt-3 rounded">تسوق الآن</button>
          </div>
        </div>
        <div className="flex flex-col gap-2xl px-6xl py-3xl bg-clr-warning-100 rounded ">
          <Image src={add1} className="max-h-[265px] w-auto" alt="headphone" />
          <div>
            <h3 className="font-bold text-lg">معالجة أسرع وأكثر ثراءً</h3>
            <p className="text-clr-dark-gray-400">
              أسرع من EXPEED 4 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات
              لتقليل التشويش
            </p>
            <button className="w-full py-2.5 mt-3 rounded">تسوق الآن</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductAds;
