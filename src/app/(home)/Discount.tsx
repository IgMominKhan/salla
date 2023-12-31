import Image from "next/image";
import leftIcon from "@/assets/icons/left.svg";
import discount from "@/assets/images/home/bannar/discount.jpeg";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import SectionTitles from "@/components/SectionTitles";
import ShowAllBtn from "@/components/ShowAllBtn";
const Discount = () => {
  const price = 260;

  return (
    <>
      <section className="main-container">
        <SectionTitles
          title="عروض تنتهى قريبا"
          subTitle="تسوق احدث المنتجات المميزة المضافة جديد"
          LeftSideContent={
            <ShowAllBtn path="/products" query={{ special: true }} />
          }
        />

        {/* discount products */}

        <div className="mt-3xl gap-2xl lg:flex">
          <div className="flex-1 rounded-md border-2 border-clr-primary-000 max-lg:mb-2xl xs:flex xs:@container">
            <div className="@container:flex-1 min-w-[30%] self-center overflow-hidden max-sm:h-64">
              <Image
                src={discount}
                alt="discount"
                placeholder="blur"
                className="@container:!mt-0 min-h-full rounded-md max-sm:-mt-[13%]"
              />
            </div>
            <div className="@container:flex-1 self-end p-xl">
              <p className="text-sm text-clr-primary-000">ساعات</p>
              <p className="text-lg font-medium text-clr-dark-gray-600">
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
              <div className="flex items-center gap-1.5">
                {discount
                  ? (
                    <>
                      <strong className="text-lg text-clr-danger-primary">
                        {price} رس
                      </strong>
                      <s className="text-sm text-clr-dark-gray-300">
                        {price} رس
                      </s>
                    </>
                  )
                  : (
                    <strong className="text-lg text-clr-primary-000">
                      {price} رس
                    </strong>
                  )}
              </div>

              {/* counter */}

              <div className="my-xl flex gap-lg">
                <div className="flex  flex-col rounded bg-clr-dark-gray-50 px-2xl py-lg leading-none">
                  <div className="text-lg">02</div>
                  <div className="-mt-2 pb-1 text-sm text-clr-dark-gray-300">
                    يوم
                  </div>
                </div>
                <div className="flex  flex-col rounded bg-clr-dark-gray-50 px-2xl py-lg leading-none">
                  <div className="text-lg">05</div>
                  <div className="-mt-2 pb-1 text-sm text-clr-dark-gray-300">
                    ساعة
                  </div>
                </div>
                <div className="flex flex-col rounded bg-clr-dark-gray-50 px-2xl py-lg leading-none">
                  <div className="text-lg">51</div>
                  <div className="-mt-2 pb-1 text-sm text-clr-dark-gray-300">
                    دقيقة
                  </div>
                </div>
                <div className="flex flex-col rounded bg-clr-dark-gray-50 px-2xl py-lg leading-none lg:px-3xl">
                  <div className="text-lg">32</div>
                  <div className="-mt-2 pb-1 text-sm text-clr-dark-gray-300">
                    ثانية
                  </div>
                </div>
              </div>

              <div className="mt-xl flex justify-between gap-lg">
                <button className="flex flex-1 items-center justify-center gap-lg whitespace-nowrap rounded-[4px] border border-clr-dark-gray-100 bg-clr-primary-000 px-xl py-xl text-white md:px-12">
                  <BsCart2 className="hidden sm:block" />
                  أضف للسلة
                </button>

                <button className="rounded-[4px] border border-clr-dark-gray-100  p-xl text-clr-dark-gray-300 md:p-5">
                  <AiOutlineHeart />
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 rounded-md  border-2 border-clr-primary-000 xs:flex xs:@container">
            <div className="@container:flex-1 min-w-[30%] self-center overflow-hidden max-sm:h-64">
              <Image
                src={discount}
                alt="discount"
                placeholder="blur"
                className="@container:!mt-0 min-h-full rounded-md max-sm:-mt-[13%]"
              />
            </div>
            <div className="@container:flex-1 self-end p-xl">
              <p className="text-sm text-clr-primary-000">ساعات</p>
              <p className="text-lg font-medium text-clr-dark-gray-600">
                ساعة ذكية جديدة من سلسلة 8
              </p>
              <div className="flex items-center gap-1.5">
                {discount
                  ? (
                    <>
                      <strong className="text-lg text-clr-danger-primary">
                        {price} رس
                      </strong>
                      <s className="text-sm text-clr-dark-gray-300">
                        {price} رس
                      </s>
                    </>
                  )
                  : (
                    <strong className="text-lg text-clr-primary-000">
                      {price} رس
                    </strong>
                  )}
              </div>
              {/* counter */}
              <div className="my-xl flex gap-lg">
                <div className="flex  flex-col rounded bg-clr-dark-gray-50 px-2xl py-lg leading-none">
                  <div className="text-lg">02</div>
                  <div className="-mt-2 pb-1 text-sm text-clr-dark-gray-300">
                    يوم
                  </div>
                </div>
                <div className="flex  flex-col rounded bg-clr-dark-gray-50 px-2xl py-lg leading-none">
                  <div className="text-lg">05</div>
                  <div className="-mt-2 pb-1 text-sm text-clr-dark-gray-300">
                    ساعة
                  </div>
                </div>
                <div className="flex  flex-col rounded bg-clr-dark-gray-50 px-2xl py-lg leading-none">
                  <div className="text-lg">51</div>
                  <div className="-mt-2 pb-1 text-sm text-clr-dark-gray-300">
                    دقيقة
                  </div>
                </div>
                <div className=" flex flex-col rounded bg-clr-dark-gray-50 px-2xl py-lg leading-none">
                  <div className="text-lg">32</div>
                  <div className="-mt-2 pb-1 text-sm text-clr-dark-gray-300">
                    ثانية
                  </div>
                </div>
              </div>
              <div className="mt-xl flex justify-between gap-lg">
                <button className="flex flex-1 items-center justify-center gap-lg whitespace-nowrap rounded-[4px] border border-clr-dark-gray-100 bg-clr-primary-000 px-xl py-xl text-white md:px-12">
                  <BsCart2 className="hidden sm:block" />
                  أضف للسلة
                </button>
                <button className="rounded-[4px] border border-clr-dark-gray-100  p-xl text-clr-dark-gray-300 md:p-5">
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
