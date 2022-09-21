import React, {useState} from "react";
import Item from "./Item";
function ShoppingList({ items }) {
const [isList, changeListMode] = useState("All");

function handleShoppingList(event, items ){
  let filterList = event.target.value;
  console.log(filterList);
  changeListMode(filterList);
}

function displayItems(filterDisplay , itemList ){
console.log('displayItems');
 if (filterDisplay === "All"){
    console.log('displayItems true');
      itemList.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ))}
  else {
    console.log('displayItems false');
    let filteredList = itemList.filter(item => item.category === isList);
    filteredList.map((item) => (
      <Item key={item.id} name={item.name} category={item.category} />
      ))}
}



  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleShoppingList}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItems(isList, items)}
      </ul>
    </div>
  );
}

export default ShoppingList;
