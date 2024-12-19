import { Link } from "react-router-dom";
import iconCart from "../assets/images/iconCart.png";
import { useSelector, useDispatch } from "react-redux";

const ProductsCart = (props) => {
  const { id, name, price, image, slug } = props.data;
  const carts = useSelector((store) => store.cart.items);
  console.log(carts);
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <Link to={slug} className="block w-full h-80 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover drop-shadow-lg"
        />
      </Link>
      <div className="mt-4">
        <h3 className="text-xl  py-3 text-center font-medium">{name}</h3>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">${price}</p>
          <button className="bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2">
            <img src={iconCart} className="w-5"></img>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
