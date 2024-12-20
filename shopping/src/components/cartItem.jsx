import { useState, useEffect } from "react";
import { products } from "../products";
import { useDispatch } from "react-redux";
import { changQuantity } from "../stores/cart";
const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.filter(
      (product) => product.id === productId
    )[0];
    setDetail(findDetail);
  }, [productId]);

  const handleMinusQuantity = () => {
    dispatch(
      changQuantity({
        productId,
        quantity: quantity - 1,
      })
    );
  };

  const handlePlusQuantity = () => {
    dispatch(
      changQuantity({
        productId,
        quantity: quantity + 1,
      })
    );
  };

  return (
    <div className="flex justify-between items-center bg-slate-700 text-white p-2 border-b-2 border-slate-600 gap-5 rounded-md mb-1">
      <img src={detail.image} alt="" className="w-12" />
      <h3>{detail.name} </h3>
      <p>${detail.price}</p>
      <div className="w-20 flex justify-between">
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600 "
          onClick={handleMinusQuantity}
        >
          -
        </button>
        <button className="px-2">{quantity}</button>
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600 "
          onClick={handlePlusQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default CartItem;
