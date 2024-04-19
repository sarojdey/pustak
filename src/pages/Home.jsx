import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="h-[111px] md:h-[184px]"></div>
      <Banner />
      <div className="h-[100rem] bg-slate-50">a</div>
    </>
  );
};

export default Home;
