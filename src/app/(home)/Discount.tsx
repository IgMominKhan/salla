import Image from "next/image";
import leftIcon from "@/assets/icons/left.svg";
import discount from "@/assets/images/home/bannar/discount.jpeg";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
const Discount = () => {
  const price = 260;

  return (
    <>
      <section className="main-container">
        <div className="flex justify-between">
          <div>
            <h3 className="mb-1 text-2xl text-clr-dark-gray-600 font-bold">
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
        <div className="lg:flex gap-2xl mt-3xl">
          <div className="flex-1 xs:@container xs:flex xs:items-center mb-2xl">
            <div className="min-w-[30%]  max-sm:h-64 overflow-hidden @container:flex-1">
              <Image
                src={discount}
                alt="discount"
                className="min-h-full max-sm:-mt-[13%] @container:!mt-0"
              />
            </div>
            <div className="p-xl @container:flex-1 ">
              <p className="text-sm text-clr-primary-000">ساعات</p>
              <p className="text-clr-dark-gray-600 font-medium text-lg">
                ساعة ذكية جديدة من سلسلة 8
              </p>
              {/* TODO: add rating  red*/}
              {
                /*
              // <p className="flex">
              //   <Image src={ratingIcon} alt="rating" />
              //   <Image src={ratingIcon} alt="rating" />
              //   <Image src={ratingIcon} alt="rating" />
              //   <Image src={ratingIcon} alt="rating" />
              // </p> */
              }
              <div className="flex gap-1.5 items-center">
                {discount
                  ? (
                    <>
                      <strong className="text-clr-danger-primary text-lg">
                        {price} رس
                      </strong>
                      <s className="text-clr-dark-gray-300 text-sm">
                        {price} رس
                      </s>
                    </>
                  )
                  : (
                    <strong className="text-clr-primary-000 text-lg">
                      {price} رس
                    </strong>
                  )}
              </div>

              {/* counter */}

              <div className="flex my-xl gap-lg">
                <div className="px-2xl  py-lg flex flex-col bg-clr-dark-gray-50 rounded leading-none">
                  <div className="text-lg">02</div>
                  <div className="text-sm text-clr-dark-gray-300 -mt-2 pb-1">
                    يوم
                  </div>
                </div>
                <div className="px-2xl  py-lg flex flex-col bg-clr-dark-gray-50 rounded leading-none">
                  <div className="text-lg">05</div>
                  <div className="text-sm text-clr-dark-gray-300 -mt-2 pb-1">
                    ساعة
                  </div>
                </div>
                <div className="px-2xl py-lg flex flex-col bg-clr-dark-gray-50 rounded leading-none">
                  <div className="text-lg">51</div>
                  <div className="text-sm text-clr-dark-gray-300 -mt-2 pb-1">
                    دقيقة
                  </div>
                </div>
                <div className="px-2xl lg:px-3xl py-lg flex flex-col bg-clr-dark-gray-50 rounded leading-none">
                  <div className="text-lg">32</div>
                  <div className="text-sm text-clr-dark-gray-300 -mt-2 pb-1">
                    ثانية
                  </div>
                </div>
              </div>

              <div className="flex justify-between gap-lg mt-xl">
                <button className="flex-1 px-xl md:px-12 py-xl text-white flex gap-lg items-center border border-clr-dark-gray-100 rounded-[4px] whitespace-nowrap bg-clr-primary-000 justify-center">
                  <BsCart2 className="hidden sm:block" />
                  أضف للسلة
                </button>

                <button className="p-xl md:p-5 text-clr-dark-gray-300  border border-clr-dark-gray-100 rounded-[4px]">
                  <AiOutlineHeart />
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 xs:@container xs:flex xs:items-center">
            <div className="min-w-[30%] max-sm:h-64 overflow-hidden @container:flex-1">
              <Image
                src={discount}
                alt="discount"
                className="min-h-full max-sm:-mt-[13%] @container:!mt-0"
              />
            </div>
            <div className="p-xl @container:flex-1">
              <p className="text-sm text-clr-primary-000">ساعات</p>
              <p className="text-clr-dark-gray-600 font-medium text-lg">
                ساعة ذكية جديدة من سلسلة 8
              </p>
              <div className="flex gap-1.5 items-center">
                {discount
                  ? (
                    <>
                      <strong className="text-clr-danger-primary text-lg">
                        {price} رس
                      </strong>
                      <s className="text-clr-dark-gray-300 text-sm">
                        {price} رس
                      </s>
                    </>
                  )
                  : (
                    <strong className="text-clr-primary-000 text-lg">
                      {price} رس
                    </strong>
                  )}
              </div>
              {/* counter */}
              <div className="flex my-xl gap-lg">
                <div className="px-2xl  py-lg flex flex-col bg-clr-dark-gray-50 rounded leading-none">
                  <div className="text-lg">02</div>
                  <div className="text-sm text-clr-dark-gray-300 -mt-2 pb-1">
                    يوم
                  </div>
                </div>
                <div className="px-2xl  py-lg flex flex-col bg-clr-dark-gray-50 rounded leading-none">
                  <div className="text-lg">05</div>
                  <div className="text-sm text-clr-dark-gray-300 -mt-2 pb-1">
                    ساعة
                  </div>
                </div>
                <div className="px-2xl  py-lg flex flex-col bg-clr-dark-gray-50 rounded leading-none">
                  <div className="text-lg">51</div>
                  <div className="text-sm text-clr-dark-gray-300 -mt-2 pb-1">
                    دقيقة
                  </div>
                </div>
                <div className=" px-2xl py-lg flex flex-col bg-clr-dark-gray-50 rounded leading-none">
                  <div className="text-lg">32</div>
                  <div className="text-sm text-clr-dark-gray-300 -mt-2 pb-1">
                    ثانية
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-lg mt-xl">
                <button className="flex-1 px-xl md:px-12 py-xl text-white flex gap-lg items-center border border-clr-dark-gray-100 rounded-[4px] whitespace-nowrap bg-clr-primary-000 justify-center">
                  <BsCart2 className="hidden sm:block" />
                  أضف للسلة
                </button>
                <button className="p-xl md:p-5 text-clr-dark-gray-300  border border-clr-dark-gray-100 rounded-[4px]">
                  <AiOutlineHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Discount;
