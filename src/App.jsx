import { Fragment } from "react";
import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
  const [isClicked, setIsClicked] = useState(false); 

  const ShowCartHandeler = () =>{
    setIsClicked(true)
  }
  const hideCartHandeler = () =>{
    setIsClicked(false)
  }
  return (
    <Fragment>
      {isClicked && <Cart onClose = {hideCartHandeler}/>}
      <Header noShowHanderler = {ShowCartHandeler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
