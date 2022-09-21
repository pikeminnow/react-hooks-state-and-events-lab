import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [isLight, changeMode] = useState(false);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isLight ? "App dark" : "App light";

function handleClick(isLight) {
  changeMode((isLight) => !isLight);
}
   

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick} >{appClass} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
