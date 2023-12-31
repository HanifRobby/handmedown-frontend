/* eslint-disable react/prop-types */
import { useState } from "react";
import { checklist, mouse } from "../assets";
import cartService from "../services/cartServices";

const CartProduct = ({ data }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const removeItem = async (e) => {
    e.preventDefault();

    try {
      const result = await cartService.deleteCartProduct(data.IDBarang);
      console.log("Product deleted from cart:", result);
    } catch (error) {
      console.error("Error delete product from cart:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-5 p-7 bg-secondary text-white text-[2rem] rounded-xl ">
        <img src={checklist} alt="" className="w-12 h-12" />
        {data.NamaPenjual}
      </div>
      <div className="flex flex-row">
        <div className="flex flex-1 flex-row gap-5 bg-[#E8B19D] py-7 px-8 rounded-l-xl">
          <img
            src={mouse}
            alt=""
            className="w-32 h-32 object-cover object-center rounded-xl"
          />
          <div className="flex flex-col justify-start">
            <div className="text-[1.75rem]">{data.NamaBarang}</div>
            <div className="text-[1.5rem]">Rp{data.HargaBarang}</div>
            <div className="flex flex-row items-center justify-start mt-2">
              <button
                className="flex items-center rounded-l-xl bg-[#C0523A] py-2 px-3"
                onClick={decrementQuantity}
              >
                -
              </button>
              <div className="py-2 px-3 bg-[#FB967F]">{quantity}</div>
              <button
                className="flex items-center rounded-r-xl bg-[#C0523A] py-2 px-3"
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={removeItem}
          className="flex items-center bg-[#FB967F]/50 px-5 rounded-r-xl text-white"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
