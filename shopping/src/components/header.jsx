import { Link } from "react-router-dom";
import iconCart from "../assets/images/iconCart.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <Link className="text-xl font-semibold" to="/">
        Home
      </Link>
      <div className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative">
        <img src={iconCart} alt="Shopping Cart" className="w-6" />
        <span className="absolute top-0 right-0 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
          0
        </span>
      </div>
    </header>
  );
};

export default Header;
