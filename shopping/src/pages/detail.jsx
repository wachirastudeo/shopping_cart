import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../products";

const Detail = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    const findDetail = products.filter((product) => product.slug === slug);
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      window.location.href = "/";
    }
  }, [slug]);

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(1);
    }
  };
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div>
      <h2 className="text-4xl text-center font-bold">PRODUCT DETAIL</h2>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div>
          <img src={detail.image} alt="" className="w-full" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl uppercase font-bold">{detail.name}</h1>
          <p className="text-3xl font-bold"> ${detail.price}</p>
          <div className="flex gap5">
            <div className="flex  justify-center items-center gap-2">
              <button
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                onClick={handleMinusQuantity}
              >
                -
              </button>
              <span className="bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">
                {quantity}
              </span>
              <button
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                onClick={handlePlusQuantity}
              >
                +
              </button>
            </div>
          </div>
          <div>
            <p className="text-lg ">{detail.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Detail;
