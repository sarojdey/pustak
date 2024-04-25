import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import WishList from "./pages/WishList";
import User from "./pages/User";
import Nothing from "./pages/Nothing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="h-[111px] md:h-[184px]"></div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/search/:query" element={<Search />}></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="*" element={<Nothing />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
