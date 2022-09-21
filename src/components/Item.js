import React, {useState} from "react";
function Item({ name, category }) {
const [isCart, changeCartMode] = useState(false);

function handleCartClick(isCart) {
  changeCartMode((isCart) => !isCart);
}

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={`add ${isCart ? "in-cart" : ""}`} onClick={handleCartClick} 
      >{`${isCart? "In Cart" :"Add to Cart"}`}</button>
    </li>
  );
}

export default Item;
