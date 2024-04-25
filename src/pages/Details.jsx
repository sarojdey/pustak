import { useEffect, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getWishList } from "../store/wishSlice";
import { getCart } from "../store/cartSlice";

const Details = () => {
  const [success, setSucess] = useState("");
  const [book, setBook] = useState();
  const [counter, setCounter] = useState(1);
  const location = useLocation();
  const dispatch = useDispatch();

  const wishListHandler = (book) => {
    console.log("wishlist clicked");
    const wishcount = counter;
    console.log({
      bookInfo: book,
      quantity: wishcount,
    });
    dispatch(
      getWishList({
        bookInfo: book,
        quantity: wishcount,
      }),
    );
  };
  const successHandler = () => {
    setSucess("success");
    setTimeout(() => {
      setSucess("");
    }, 1500);
  };
  const cartHandler = (book) => {
    console.log("cart clicked");
    const cartcount = counter;
    dispatch(
      getCart({
        bookInfo: book,
        quantity: cartcount,
      }),
    );
  };

  const handleCounter = (op) => {
    if (op === "plus") {
      const newVal = counter + 1;
      setCounter(newVal);
    } else {
      if (counter > 1) {
        const newVal = counter - 1;
        setCounter(newVal);
      }
    }
  };

  useEffect(() => {
    console.log("book details:", location.state.bookInfo);
    setBook(location.state.bookInfo);
  }, []);

  return (
    <>
      <div className=" mx-auto h-auto w-full bg-amber-50 text-gray-800 shadow-2xl md:w-3/4">
        <div className="mx-auto h-3/4 w-11/12 pt-[50px] md:flex">
          <div className="flex h-[400px] w-auto justify-center">
            <img
              src={"/cover.webp"}
              className="h-[400px] w-auto flex-shrink-0"
              alt="cover"
            />
          </div>
          <div className="flex flex-col px-4 py-8 md:px-20 md:py-0">
            <span className=" text-2xl font-semibold">{book?.title}</span>
            <span className="">{book?.author}</span>
            <span className="text-xl font-medium">₹{book?.price} /-</span>
            <div className=" mt-8 flex h-[40px] w-2/5 justify-evenly md:w-auto">
              <div
                className="flex h-full w-1/3 cursor-pointer items-center justify-center bg-gray-900 font-semibold text-white"
                onClick={() => {
                  handleCounter("minus");
                }}
              >
                -
              </div>
              <div className="flex h-full w-1/3 items-center justify-center bg-white font-semibold">
                {counter}
              </div>
              <div
                className="flex h-full w-1/3 cursor-pointer items-center justify-center bg-gray-900 font-semibold text-white"
                onClick={() => {
                  handleCounter("plus");
                }}
              >
                +
              </div>
            </div>
          </div>
        </div>
        {success ? (
          <div className="mx-auto mt-4 flex h-10 w-11/12 items-center justify-center rounded-md border border-green-600 bg-green-300 transition-all duration-300 ease-in">
            Item added!!
          </div>
        ) : (
          <></>
        )}
        <div className=" mt-4 flex  w-full flex-col items-center justify-evenly md:mx-3 md:flex-row ">
          <div
            className=" flex  h-10 w-11/12 cursor-pointer items-center  justify-center rounded bg-pink-600 text-white transition-all duration-300 ease-in hover:bg-pink-500 md:w-5/12"
            onClick={() => {
              console.log("wishlist:", book);
              successHandler();
              wishListHandler(book);
            }}
          >
            <FaHeart className="mr-2" />
            <span>Wishlist</span>
          </div>
          <div
            className=" m-1 flex h-10 w-11/12 cursor-pointer items-center  justify-center rounded bg-sky-600 text-white transition-all duration-300 ease-in hover:bg-sky-500 md:w-5/12"
            onClick={() => {
              successHandler();
              cartHandler(book);
            }}
          >
            <FaShoppingCart className="mr-2" />
            <span>Cart</span>
          </div>
        </div>
        <div className="space h-12"></div>
      </div>
    </>
  );
};

export default Details;
