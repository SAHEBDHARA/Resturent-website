import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [isClicked, setIsClicked] = useState(false); 

  const ShowCartHandeler = () =>{
    setIsClicked(true)
  }
  const hideCartHandeler = () =>{
    setIsClicked(false)
  }
  return (
    <CartProvider>
      {isClicked && <Cart onClose = {hideCartHandeler}/>}
      <Header noShowHanderler = {ShowCartHandeler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
