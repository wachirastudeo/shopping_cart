import { useSelector } from "react-redux";
import CartItem from "./cartItem";
const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);

  return (
    <div className="fixed top-0 right-0 bg-gray-600 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px]">
      <h2 className="p-5 text-white text-2xl ">Shopping Cart</h2>
      <div>
        {carts.map((item, key) => (
          <CartItem key={key} data={item} />
        ))}
      </div>
      <div className="grid grid-cols-2">
        <button className="bg-black text-white ">Close</button>
        <button className="bg-amber-600 text-white ">Check Out</button>
      </div>
    </div>
  );
};
export default CartTab;
