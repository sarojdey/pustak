import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSubmit = () => {
    navigate(`/search/${query}`);
  };
  return (
    <form
      className=" mx-2 mb-4 flex w-full overflow-hidden text-nowrap rounded-md shadow-sm md:mb-0 "
      onSubmit={handleSubmit}
    >
      <input
        className="h-12 w-4/5 rounded-bl-md rounded-tl-md px-4 md:w-11/12"
        type="text"
        placeholder="Search by Title, Author, Genre"
        value={query}
        onChange={handleChange}
      />
      <button
        className="  flex h-12 w-1/5 items-center justify-center bg-black text-lg text-white hover:bg-zinc-800 md:w-1/12"
        type="submit"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default Search;
