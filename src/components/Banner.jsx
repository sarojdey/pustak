import { useRef } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Banner = () => {
  const sliderRef = useRef();
  const sliderRefPhone = useRef();
  const handleScroll = (dir) => {
    if (dir === "left") {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollLeft - sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    } else {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollLeft + sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  const handleScrollPhone = (dir) => {
    if (dir === "left") {
      sliderRefPhone.current.scrollTo({
        left:
          sliderRefPhone.current.scrollLeft -
          sliderRefPhone.current.offsetWidth,
        behavior: "smooth",
      });
    } else {
      sliderRefPhone.current.scrollTo({
        left:
          sliderRefPhone.current.scrollLeft +
          sliderRefPhone.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="relative">
        <div
          ref={sliderRefPhone}
          className="flex h-[400px] w-full snap-x overflow-hidden md:hidden"
        >
          <div
            onClick={() => {
              handleScrollPhone("left");
            }}
            className="absolute left-2 top-[40%] z-10 flex cursor-pointer items-center justify-center text-5xl"
          >
            <MdOutlineKeyboardArrowLeft />
          </div>
          <div
            onClick={() => {
              handleScrollPhone("right");
            }}
            className="absolute right-2 top-[40%] z-10 flex cursor-pointer items-center justify-center text-5xl"
          >
            <MdOutlineKeyboardArrowRight />
          </div>
          {[
            "banner3s.webp",
            "banner1s.webp",
            "banner2s.webp",
            "banner4s.webp",
          ].map((banner, index) => {
            return (
              <div
                key={index}
                className="h-full w-full flex-shrink-0 snap-center overflow-hidden"
              >
                <img
                  src={`/banners/${banner}`}
                  className="h-full w-full object-cover"
                  alt="banner"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* destop */}
      <div className="relative">
        <div
          ref={sliderRef}
          className="hidden h-[360px] w-full snap-x overflow-hidden md:flex"
        >
          <div
            onClick={() => {
              handleScroll("left");
            }}
            className="absolute left-2 top-[40%] z-10 flex cursor-pointer items-center justify-center text-5xl"
          >
            <MdOutlineKeyboardArrowLeft />
          </div>
          <div
            onClick={() => {
              handleScroll("right");
            }}
            className="absolute right-2 top-[40%] z-10 flex cursor-pointer items-center justify-center text-5xl"
          >
            <MdOutlineKeyboardArrowRight />
          </div>
          {["banner1.webp", "banner2.webp", "banner3.webp", "banner4.webp"].map(
            (banner, index) => {
              return (
                <div
                  key={index}
                  className="h-full w-full flex-shrink-0 snap-center overflow-hidden"
                >
                  <img
                    src={`/banners/${banner}`}
                    className="h-full w-full object-cover"
                    alt="banner"
                  />
                </div>
              );
            },
          )}
        </div>
      </div>
    </>
  );
};

export default Banner;
