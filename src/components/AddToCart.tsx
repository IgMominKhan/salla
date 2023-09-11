import { BsCart2 } from "react-icons/bs";
const AddToCart = ({ product_id }: { product_id: number }) => {
  return (
    <button className="px-xl @[16rem]:px-12 py-xl text-clr-dark-gray-600 flex gap-lg items-center border border-clr-dark-gray-100 rounded-[4px] whitespace-nowrap">
      أضف للسلة
      <BsCart2 className="hidden sm:block" />
    </button>
  );
};

export default AddToCart;
