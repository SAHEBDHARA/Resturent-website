import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About/About";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [isClicked, setIsClicked] = useState(false);

  const ShowCartHandeler = () => {
    setIsClicked(true);
  };
  const hideCartHandeler = () => {
    setIsClicked(false);
  };
  return (
    <CartProvider>
      <BrowserRouter>
        {isClicked && <Cart onClose={hideCartHandeler} />}
        <Header noShowHanderler={ShowCartHandeler} />
        <Routes>
          <Route path="/" element={<Meals />} /> {/* Use element prop correctly */}
          <Route path="/about" element={<About />} /> {/* Use element prop correctly */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
