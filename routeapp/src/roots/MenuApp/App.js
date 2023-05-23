import React, {useState, useEffect} from 'react';
import './App.css';
import Food from "./FoodList.js";
import background from "./06.png";

function App() {
  const menu = {
    "breakfast": [
      {"food": "pancakes", "price": 5.00, "vegetarian": true},
      {"food": "waffles", "price": 5.00, "vegetarian": true},
      {"food": "orange juice", "price": 2.00, "vegetarian": true}
    ],
    "lunch": [
      {"food": "turkey sandwich", "price": 8.00, "vegetarian": false},
      {"food": "grilled cheese", "price": 6.00, "vegetarian": true},
      {"food": "hamburger", "price": 8.00, "vegetarian": false}
    ],
    "dinner": [
      {"food": "chicken alfredo", "price": 10.00, "vegetarian": false},
      {"food": "tofu stir-fry", "price": 9.00, "vegetarian": true},
      {"food": "chili", "price": 8.00, "vegetarian": false}
    ]
  }

  const [showVegetarian, setShowVegetarian] = useState(false)
  const showVegetarianClick=()=>{
    setShowVegetarian(!showVegetarian)
  }

  return (
    <div className = "menu">
      <button onClick = {showVegetarianClick}> Switch Vegetarian Option </button>
      <Food menu = {menu} showVeg = {showVegetarian}/>      
    </div>
  );
}

export default App;
