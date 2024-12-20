import ProductsCart from "../components/productCart";
import { products } from "../products";
const Home = () => {
  return (
    <div>
      <h1 className="text-3xl my-5 ">List Products</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {products.map((product, key) => (
          <ProductsCart key={key} data={product} />
        ))}
      </div>
    </div>
  );
};
export default Home;
