import Rating from "react-rating";
import { RiDoubleQuotesL } from "react-icons/ri";
import avater from "@/assets/images/home/testimonial/avater 01.webp";
import Image from "next/image";

const enptyStar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="14"
    viewBox="0 0 13 14"
    fill="none"
  >
    <path
      d="M12.9813 5.50781C12.9365 5.36991 12.8174 5.26941 12.6739 5.24859L8.64387 4.66296L6.84153 1.01112C6.77739 0.881119 6.64498 0.798828 6.50002 0.798828C6.35504 0.798828 6.22266 0.881119 6.15849 1.01112L4.35607 4.66296L0.326087 5.24859C0.182656 5.26941 0.0634476 5.36991 0.0186587 5.50778C-0.0261556 5.64568 0.0112193 5.79703 0.115041 5.89821L3.03109 8.74078L2.34281 12.7546C2.31828 12.8975 2.37703 13.0419 2.49431 13.1271C2.56066 13.1753 2.63924 13.1998 2.7182 13.1998C2.77884 13.1998 2.83967 13.1854 2.89538 13.1561L6.5 11.261L10.1045 13.156C10.2328 13.2235 10.3883 13.2123 10.5056 13.1271C10.6228 13.0419 10.6816 12.8974 10.6571 12.7545L9.9686 8.74078L12.885 5.89818C12.9888 5.79703 13.0262 5.64568 12.9813 5.50781Z"
      fill="#D6D6D6"
    />
  </svg>
);

const filledStar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="14"
    viewBox="0 0 13 14"
    fill="none"
  >
    <path
      d="M12.9813 5.50781C12.9365 5.36991 12.8174 5.26941 12.6739 5.24859L8.64387 4.66296L6.84153 1.01112C6.77739 0.881119 6.64498 0.798828 6.50002 0.798828C6.35504 0.798828 6.22266 0.881119 6.15849 1.01112L4.35607 4.66296L0.326087 5.24859C0.182656 5.26941 0.0634476 5.36991 0.0186587 5.50778C-0.0261556 5.64568 0.0112193 5.79703 0.115041 5.89821L3.03109 8.74078L2.34281 12.7546C2.31828 12.8975 2.37703 13.0419 2.49431 13.1271C2.56066 13.1753 2.63924 13.1998 2.7182 13.1998C2.77884 13.1998 2.83967 13.1854 2.89538 13.1561L6.5 11.261L10.1045 13.156C10.2328 13.2235 10.3883 13.2123 10.5056 13.1271C10.6228 13.0419 10.6816 12.8974 10.6571 12.7545L9.9686 8.74078L12.885 5.89818C12.9888 5.79703 13.0262 5.64568 12.9813 5.50781Z"
      fill="#FFC62A"
    />
  </svg>
);
const Testimonial = () => {
  return (
    <div className="rounded-[4px] border border-clr-dark-gray-200 p-2xl text-clr-dark-gray-500">
      <div className="flex items-center justify-between">
        <Rating
          readonly
          direction="rtl"
          emptySymbol={enptyStar}
          placeholderSymbol={filledStar}
          placeholderRating={3.5}
        />
        <RiDoubleQuotesL size={50} className="text-clr-dark-gray-200" />
      </div>
      <p>
        استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقية
        مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في التعامل مع
        المبرمجين
      </p>
      <div className="mt-xl flex items-center gap-3">
        <Image
          src={avater}
          width={48}
          height={48}
          placeholder="blur"
          alt="user"
        />
        <div>
          <h4 className="text-lg font-medium text-clr-dark-gray-600">
            محمد السيد
          </h4>
          <p className="text-sm ">مهندس إستشارى لدى شركة سلة</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
