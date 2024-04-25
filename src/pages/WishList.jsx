import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { removeWishList } from "../store/wishSlice";
import { getCart } from "../store/cartSlice";
import { FaShoppingBag } from "react-icons/fa";

function WishList() {
  const [wishListLength, setWishListLength] = useState(0);
  const { wishList } = useSelector((state) => state.wish);

  useEffect(() => {
    setWishListLength(wishList.length);
  }, [wishList]);
  const dispatch = useDispatch();

  const cartHandler = (book, i) => {
    dispatch(
      getCart({
        bookInfo: book,
        quantity: book.quantity,
      }),
    );
    removeHandler(i);
  };

  const removeHandler = (i) => {
    dispatch(removeWishList(i));
  };
  return wishListLength > 0 ? (
    <>
      <div className="mx-auto mb-8 mt-10  h-auto min-h-[400px] w-11/12 text-gray-800">
        <div className="flex h-full w-full flex-col">
          {wishList.map((book, index) => {
            return (
              <div
                className="mb-4 flex h-32 w-full overflow-hidden rounded-md bg-amber-50 shadow-lg md:h-[14rem]"
                key={book.id}
              >
                <div className="flex w-1/3 items-center justify-center">
                  <img
                    src={`https://pustak-api.onrender.com/${book?.path}/${book?.id}.jpeg`}
                    className="h-[95%]"
                    alt="book"
                  />
                </div>
                <div className="flex w-1/2 flex-col overflow-y-scroll">
                  <span className=" p-4 text-lg font-semibold">
                    {book.title}
                  </span>
                  <span className=" p-4  font-medium">₹{book.price} /-</span>
                  <span className=" p-4 font-semibold text-green-800">
                    Quantity: {book.quantity}
                  </span>
                </div>
                <div className="flex w-1/5 flex-col items-center justify-evenly bg-gray-950 text-3xl md:flex-row">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded bg-blue-800 text-white transition-all ease-in hover:bg-blue-600"
                    onClick={() => {
                      cartHandler(book, index);
                    }}
                  >
                    <FaShoppingBag />
                  </div>
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded bg-red-800 text-white transition-all ease-in hover:bg-red-600"
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
    </>
  ) : (
    <div></div>
  );
}

export default WishList;
