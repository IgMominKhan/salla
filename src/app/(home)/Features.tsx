import Product from "@/app/(home)/Product";
import Image from "next/image";
import creaditCard from "@/assets/icons/credit card.svg";
import returnIcon from "@/assets/icons/return.svg";
import deliveryIcon from "@/assets/icons/fast delivery.svg";
import leftIcon from "@/assets/icons/left.svg";
import getData from "@/utils/getData";

const Features = async () => {
  // const res = await fetch("http://localhost:3000/api/products");
  //
  // const data: [] = await res.json();

  const data = await getData(`${process.env.SERVER_URL}/api/products`);
  // console.log(data);

  return (
    <>
      <div className="main-container">
        <section className="text-clr-dark-gray-400">
          <div className="justify-evenly divide-y-[1px] rounded-sm border-[1px] md:flex md:divide-x-[1px] md:divide-y-0 md:divide-x-reverse md:rounded-[4px]">
            <div className="my-3xl flex gap-5 px-3xl">
              <Image src={deliveryIcon} alt="delivery" width={50} height={50} />
              <div>
                <h3 className="mb-1 text-xl font-bold text-clr-dark-gray-600">
                  منتجات مضمونه
                </h3>
                <p>
                  مدفوعات آمنة أقساط تصل إلى 12 شهرًا
                </p>
              </div>
            </div>

            <div className="my-3xl flex gap-5 px-3xl max-md:pt-3xl">
              <Image src={returnIcon} alt="return" width={50} height={50} />
              <div>
                <h3 className="mb-1 text-xl font-bold text-clr-dark-gray-600">
                  شحن مجاني
                </h3>
                <p>
                  مدفوعات آمنة أقساط تصل إلى 12 شهرًا
                </p>
              </div>
            </div>

            <div className="my-3xl flex gap-5 px-3xl max-md:pt-3xl ">
              <Image
                src={creaditCard}
                alt="creadit card"
                width={50}
                height={50}
              />
              <div>
                <h3 className="mb-1 text-xl font-bold text-clr-dark-gray-600">
                  مدفوعات آمنة
                </h3>
                <p>
                  مدفوعات آمنة أقساط تصل إلى 12 شهرًا
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* features banner */}

        <section>
          <div className="flex flex-col gap-5  md:flex-row">
            <div className="align-center flex min-h-[170px] flex-1 items-center justify-end bg-[url('../assets/images/home/feature/bannar1.png')] bg-cover bg-right-top md:min-h-[250px]">
              <div className="p-6 md:py-14 ">
                <p>
                  سماعات ديجتال
                </p>
                <h2 className="text-xl font-medium md:text-4xl">
                  أفضل صوت نقي
                </h2>
                <p className="font-bold">
                  تسوق الآن
                </p>
              </div>
            </div>

            <div className="flex min-h-[170px] flex-1 items-center justify-end bg-[url('../assets/images/home/feature/bannar2.png')] bg-cover bg-right-top md:min-h-[250px] md:bg-center">
              <div className="p-6 md:py-14">
                <p>
                  سماعات ديجتال
                </p>
                <h2 className="text-xl font-medium md:text-4xl">
                  أفضل صوت نقي
                </h2>
                <p className="font-bold">
                  تسوق الآن
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*feature products*/}
        <section>
          <div className="flex justify-between">
            <div>
              <h3 className="mb-1 text-2xl font-bold text-clr-dark-gray-600">
                منتجات مميزة
              </h3>
              <p>تسوق احدث المنتجات المميزة المضافة جديد</p>
            </div>
            <button className="btn self-end">
              <span>
                عرض الكل
              </span>
              <Image className="h-8" src={leftIcon} alt="left icon" />
            </button>
          </div>

          <div className="mt-3xl grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-xl sm:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] xl:gap-2xl ">
            {data.map((item: any) => <Product product={item} key={item._id} />)}
          </div>
        </section>
      </div>
    </>
  );
};

export default Features;
