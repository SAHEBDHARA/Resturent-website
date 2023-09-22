import { Fragment } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Input from "./components/UI/Input";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
     
    </Fragment>
  );
}

export default App;
