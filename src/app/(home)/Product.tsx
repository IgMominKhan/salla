import Image from "next/image";
import img1 from "@/assets/images/home/feature/product 01.png";
import AddToCart from "@/components/AddToCart";
import { AiOutlineHeart } from "react-icons/ai";

const Product = ({ product }: { product: any }) => {
  const { _id, title, category, price, discount, } = product;

  return (
      <div key={_id} className="rounded border border-clr-dark-gray-100 bg-clr-dark-white">
        <Image src={img1} alt={category} placeholder="blur" />
        <div className="p-xl @container">
          <p className="text-sm text-clr-primary-000">سماعات</p>
          <p className="text-clr-dark-gray-6000 font-bold">{title}</p>
          <p className="text-sm text-clr-dark-gray-400">{category}</p>
          <div className="flex items-center gap-1.5">
            {discount
              ? (
                <>
                  <strong className="text-lg text-clr-danger-primary">
                    {price} رس
                  </strong>
                  <s className="text-sm text-clr-dark-gray-300">{price} رس</s>
                </>
              )
              : (
                <strong className="text-lg text-clr-primary-000">
                  {price} رس
                </strong>
              )}
          </div>

          <div className="mt-xl flex justify-between gap-lg">
            <AddToCart product_id={product._id} />
            <button className="rounded-[4px] border border-clr-dark-gray-100  p-xl text-clr-dark-gray-600 md:p-5">
              <AiOutlineHeart />
            </button>
          </div>
        </div>
      </div>
  );
};

export default Product;
