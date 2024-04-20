import { CiHeart } from "react-icons/ci";

const Card = () => {
  const discount = (perc, price) => {
    const newPrice = price - (price * perc) / 100;
    return Math.floor(newPrice);
  };

  return (
    <div className="flex w-[12rem] scale-75 flex-col items-center md:scale-100 ">
      <div className="my-3 h-[17rem] w-11/12 cursor-pointer overflow-hidden rounded-sm transition duration-150 ease-in-out hover:scale-105">
        <img
          className="h-full w-full object-cover"
          src="cover.webp"
          alt="cover"
        />
      </div>
      <span className=" mb-1 mt-3 w-11/12 cursor-pointer overflow-hidden text-ellipsis text-nowrap text-center font-font1 text-sm font-medium transition duration-150 ease-in-out hover:scale-105 hover:text-gray-800 ">
        {"Before We Forget Kindness"}
      </span>
      <span className=" w-11/12 overflow-hidden text-ellipsis text-nowrap text-center font-font1 text-xs font-medium text-blue-800">
        {"Saroj Kumar Dey"}
      </span>
      <div className="my-3 flex w-11/12 justify-center font-font1 font-medium">
        <span className=" ">₹ {discount(10, 599)}</span>
        <span className=" pl-2 text-gray-500 line-through">₹ {599}</span>
        <span className=" pl-1 text-green-700">({10}%)</span>
      </div>
      <div className="flex w-11/12 justify-evenly">
        <div className="cursor-pointer rounded-md border-[1px]  border-black px-4 py-2 text-xs transition duration-200 ease-in-out hover:border-blue-500 hover:text-blue-500  ">
          ADD TO BAG
        </div>
        <div className="flex items-center justify-center text-3xl">
          <CiHeart className="hover:text-pink-600" />
        </div>
      </div>
    </div>
  );
};

export default Card;
