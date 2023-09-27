import Image from "next/image";
import Link from "next/link";
import SectionTitles from "@/components/SectionTitles";
import ShowAllBtn from "@/components/ShowAllBtn";
import blog01 from "@/assets/images/home/blogs/blog-01.webp";

const BlogSection = () => {
  return (
    <>
      <section className="main-container">
        <SectionTitles
          title="أحدث المقالات"
          subTitle="تسوق احدث المنتجات المميزة المضافة جديد"
          LeftSideContent={<ShowAllBtn path="/blogs" query={{ limit: 5 }} />}
        />

        <div className="mt-3xl grid grid-cols-[repeat(auto-fit,minmax(17rem,1fr))] gap-xl  xl:gap-2xl ">
          {/* blogs */}
          {Array.from({ length: 5 }).map((_, index) => (
            <article
              key={index}
              className="relative"
            >
              <Image
                src={blog01}
                alt="laptop with notepad"
                className="w-full"
              />
              <h3 className="my-xl pt-3 text-lg font-medium text-clr-dark-gray-600">
                مدى تأثير التكنولوجيا على حياة الإنسان
              </h3>
              <p className="font-normal text-clr-dark-gray-400">
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم
                إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن
              </p>
              <Link href={`/blogs/${index}`} className="text-clr-primary-000">اقرأ أكثر...</Link>
              <div className="absolute start-4 top-4 flex-col gap-3 rounded-[4px] bg-white px-2.5 pb-2 pt-1 text-center">
                <b className="pt-0">18</b>
                <span className="-mt-1.5 block text-sm text-clr-dark-gray-400">
                  مارس
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogSection;
