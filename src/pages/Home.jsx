import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="h-[111px] md:h-[184px]"></div>
      <Banner />
      <div className=" w-full">
        <div className="mt-20 flex items-center justify-center md:mb-10">
          <span className="font-font1 text-4xl font-extrabold text-gray-800">
            MOST POPULAR
          </span>
        </div>
        <div></div>
        <div className="mb-5  flex overflow-x-auto md:gap-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className=" w-full">
        <div className="mt-20 flex items-center justify-center md:mb-10">
          <span className="font-font1 text-4xl font-extrabold text-gray-800">
            PRE-ORDER
          </span>
        </div>
        <div></div>
        <div className="mb-5  flex overflow-x-auto md:gap-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
