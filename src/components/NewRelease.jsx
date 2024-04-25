import { useEffect } from "react";
import Card from "./Card";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";

const NewRelease = () => {
  const { data, loading } = useFetch(`/book`);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return loading ? (
    <div className="flex items-center justify-center">
      <Loader />
    </div>
  ) : (
    <div className=" w-full">
      <div className="mt-20 flex items-center justify-center md:mb-10">
        <span className="font-font1 text-4xl font-extrabold text-gray-800">
          NEW RELEASE
        </span>
      </div>
      <div className="no-scrollbar mb-5 flex overflow-x-auto pb-2 md:ml-12 md:gap-14">
        {data?.map((book) => {
          return <Card key={book.id} book={book} />;
        })}
      </div>
    </div>
  );
};

export default NewRelease;
