import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { getWishList } from "../store/wishSlice";
import { useDispatch } from "react-redux";
import { getCart } from "../store/cartSlice";

const Card = ({ book }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const discount = (perc, price) => {
    const newPrice = price - (price * perc) / 100;
    return Math.floor(newPrice);
  };

  const navigationHandler = (book) => {
    // console.log("navigationHandler is being called.");
    navigate(`/details/${book.id}`, {
      state: {
        bookInfo: book,
      },
    });
  };

  return (
    <div className="flex w-[12rem] flex-shrink-0 scale-75 flex-col items-center text-nowrap md:scale-100 ">
      <div
        onClick={() => {
          navigationHandler(book);
        }}
        className="my-3 h-[17rem] w-11/12 cursor-pointer overflow-hidden rounded-sm transition duration-150 ease-in-out hover:scale-105"
      >
        <img
          className="h-full w-full object-cover"
          src="cover.webp"
          alt="cover"
        />
      </div>
      <span className=" mb-1 mt-3 w-11/12 cursor-pointer overflow-hidden text-ellipsis text-nowrap text-center font-font1 text-sm font-medium transition duration-150 ease-in-out hover:scale-105 hover:text-gray-800 ">
        {book?.title}
      </span>
      <span className=" w-11/12 overflow-hidden text-ellipsis text-nowrap text-center font-font1 text-xs font-medium text-blue-800">
        {book?.author}
      </span>
      <div className="my-3 flex w-11/12 justify-center font-font1 font-medium">
        <span className=" ">₹ {discount(10, book?.price)}</span>
        <span className=" pl-2 text-gray-500 line-through">
          ₹ {book?.price}
        </span>
        <span className=" pl-1 text-green-700">({10}%)</span>
      </div>
      <div className="flex w-11/12 justify-evenly">
        <div
          onClick={() => {
            dispatch(
              getCart({
                bookInfo: book,
                quantity: 1,
              }),
            );
          }}
          className="cursor-pointer rounded-md border-[1px]  border-black px-4 py-2 text-xs transition duration-200 ease-in-out hover:border-blue-500 hover:text-blue-500  "
        >
          ADD TO BAG
        </div>
        <div
          onClick={() => {
            dispatch(
              getWishList({
                bookInfo: book,
                quantity: 1,
              }),
            );
          }}
          className="flex items-center justify-center text-3xl"
        >
          <CiHeart className="hover:text-pink-600" />
        </div>
      </div>
    </div>
  );
};

export default Card;
