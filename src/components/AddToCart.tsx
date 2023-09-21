import { BsCart2 } from "react-icons/bs";
const AddToCart = ({ product_id }: { product_id: number }) => {
  return (
    <button className="flex items-center gap-lg whitespace-nowrap rounded-[4px] border border-clr-dark-gray-100 px-xl py-xl text-clr-dark-gray-600 @[16rem]:px-12">
      أضف للسلة
      <BsCart2 className="hidden sm:block" />
    </button>
  );
};

export default AddToCart;
