import { useNavigate } from "react-router-dom";

function Menu({ showMenu, navLinks, setShowMenu }) {
  const navigate = useNavigate();
  return (
    <div
      className={`${
        showMenu ? "left-[40%]" : "left-full "
      }  fixed top-0 z-50 h-screen w-[75%] flex-col justify-between  bg-white px-8 pt-6 font-semibold text-white shadow-md transition-all duration-300 md:hidden dark:bg-gray-900`}
    >
      <div className="card">
        <nav>
          <ul className="space-y-4 pt-6 text-xl">
            {navLinks.map((item) => (
              <li
                onClick={() => {
                  navigate(`/search/${item}`);
                  setShowMenu(false);
                }}
                className="cursor-pointer hover:text-gray-400 "
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
