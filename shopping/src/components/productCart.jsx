import { Link } from "react-router-dom";
import iconCart from "../assets/images/iconCart.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";

const ProductsCart = (props) => {
  const { id, name, price, image, slug } = props.data;
  const carts = useSelector((store) => store.cart.items);
  console.log(carts);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <Link to={slug} className="block w-full h-80 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full px-5 h-full object-cover drop-shadow-lg"
        />
      </Link>
      <div className="mt-4">
        <h2 className="text-sm  pb-5 text-center font-medium">{name}</h2>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">${price}</p>
          <button
            className="bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2"
            onClick={handleAddToCart}
          >
            <img src={iconCart} className="w-5"></img>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
