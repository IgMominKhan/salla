import Image from "next/image";
import img1 from "@/assets/images/home/feature/product 01.png";
import AddToCart from "@/components/AddToCart";
import { AiOutlineHeart } from "react-icons/ai";

const Product = ({ product }) => {
  const { title, category, price, discount } = product;

  return (
    <>
      <div className="rounded border border-clr-dark-gray-100 bg-clr-dark-white">
        <Image src={img1} alt={category} />
        <div className="p-xl">
          <p className="text-clr-primary-000 text-sm">سماعات</p>
          <p className="text-clr-dark-gray-6000 font-bold">{title}</p>
          <p className="text-clr-dark-gray-400 text-sm">{category}</p>
          <div className="flex gap-1.5 items-center">
            {discount
              ? (
                <>
                  <strong className="text-clr-danger-primary text-lg">
                    {price} رس
                  </strong>
                  <s className="text-clr-dark-gray-300 text-sm">{price} رس</s>
                </>
              )
              : (
                <strong className="text-clr-primary-000 text-lg">
                  {price} رس
                </strong>
              )}
          </div>

          <div className="flex justify-between gap-lg mt-xl">
            <AddToCart product_id={product._id} />
            <button className="p-xl md:p-5 text-clr-dark-gray-600  border border-clr-dark-gray-100 rounded-[4px]">
              <AiOutlineHeart />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
