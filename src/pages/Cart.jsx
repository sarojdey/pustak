import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../store/cartSlice";

function Cart() {
  const [cartLength, setCartLength] = useState(0);
  const { cart, subtotal } = useSelector((state) => state.cart);

  useEffect(() => {
    setCartLength(cart.length);
  }, [cart]);
  const dispatch = useDispatch();

  const removeHandler = (i) => {
    dispatch(removeCart(i));
  };
  return cartLength > 0 ? (
    <>
      <div className="mx-auto mb-8  mt-10 h-auto min-h-screen w-[90%]">
        <div className="flex h-full w-full flex-col">
          {cart.map((product, index) => {
            return (
              <div
                className="mb-4 flex h-32 w-full overflow-hidden rounded-lg bg-amber-50 shadow-md md:h-[14rem]"
                key={product.id}
              >
                <div className="flex w-[30%] items-center justify-center">
                  <img src={"/cover.webp"} className="h-[95%]" alt="product" />
                </div>
                <div className="flex w-1/2 flex-col overflow-y-scroll">
                  <span className="p-4 text-lg font-semibold ">
                    {product.title}
                  </span>
                  <span className="p-4 font-medium">₹{product.price} /-</span>
                  <span className="p-4 font-semibold text-green-700">
                    Quantity: {product.quantity}
                  </span>
                </div>
                <div className="flex w-1/5 flex-col items-center justify-evenly bg-gray-950 text-3xl md:flex-row">
                  <div className="flex h-12 w-12 items-center justify-center rounded bg-yellow-500 text-slate-900 transition-all ease-in hover:bg-yellow-300">
                    <MdOutlinePayment />
                  </div>
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded bg-red-800  text-white transition-all ease-in hover:bg-red-600"
                    onClick={() => {
                      removeHandler(index);
                    }}
                  >
                    <MdDeleteForever />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex h-16 w-full items-center justify-between bg-gray-950 text-white">
        <span className="ml-6 text-lg font-semibold">
          Sub-Total: ₹{subtotal}
        </span>
        <div className="mr-5 flex h-[65%] cursor-pointer items-center justify-center rounded bg-yellow-500 px-8 py-4 text-lg font-semibold text-gray-800 transition-all ease-in hover:bg-yellow-300">
          <span>Checkout</span>
          <MdOutlinePayment className="ml-2 text-2xl" />
        </div>
      </div>
    </>
  ) : (
    <div></div>
  );
}

export default Cart;
