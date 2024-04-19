import { IoLocationSharp } from "react-icons/io5";
import { FaBook } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className=" fixed z-10 flex w-full flex-col text-sm md:text-base ">
      <div className="hidden h-8 items-center justify-end bg-black text-xs text-white shadow-sm md:flex ">
        <ul className="mr-5 flex w-1/4 items-center justify-around  text-nowrap">
          <li className="flex cursor-pointer items-center hover:text-blue-400">
            <IoLocationSharp className="mr-1 text-sm" />
            <span>Find a store</span>
          </li>
          <li>|</li>
          <li className="cursor-pointer hover:text-blue-400">
            Track your order
          </li>
          <li>|</li>
          <li className="cursor-pointer hover:text-blue-400">+91 6370910189</li>
        </ul>
      </div>
      <div className="bg-[#ffe619] shadow-sm ">
        <div className="flex h-16 items-center  justify-between md:h-24">
          <div className="flex items-center justify-center">
            <div className="ml-2 cursor-pointer text-3xl hover:text-zinc-800 md:hidden">
              <IoMenu />
            </div>
            <div className="ml-4 flex cursor-pointer items-center text-2xl hover:text-zinc-800 md:text-4xl">
              <FaBook />
              <span className="ml-1 font-font1 font-bold">PUSTAK</span>
            </div>
          </div>
          <div className=" hidden w-[45rem] items-center justify-center md:flex">
            <Search />
          </div>
          <div>
            <ul className=" mr-1 flex w-24 justify-around text-xl md:mr-4 md:w-40 md:text-2xl">
              <li className="cursor-pointer hover:text-zinc-800">
                <FaUser />
              </li>
              <li className="cursor-pointer hover:text-zinc-800">
                <FaHeart />
              </li>
              <li className="cursor-pointer hover:text-zinc-800">
                <FaShoppingBag />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex h-12  items-center justify-center md:hidden">
          <Search />
        </div>
      </div>
      <div className="hidden h-14 items-center bg-white font-font1 text-sm font-semibold text-gray-600 shadow-sm md:flex ">
        <ul className="flex w-full justify-around">
          {[
            "FICTION",
            "NON-FICTION",
            "NOVEL",
            "ROMANCE",
            "PHILOSOPHY",
            "SCI-FI",
          ].map((i, index) => {
            return (
              <li key={index} className="cursor-pointer hover:text-zinc-800">
                {i}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
