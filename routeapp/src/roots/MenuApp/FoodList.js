import React from 'react'
import CategoryList from './CategoryList'

const FoodList= (props) => {
  const menu = props.menu
  const showVeg = props.showVeg
  console.log(showVeg)
  return (
    <div>
      {Object.keys(menu).map((category, index) => 
        <div key = {index} className = "title">
          <h2>{category}</h2>
          <div key = {index} className = "foodItems"> 
            <CategoryList menu = {menu} category = {category} categoryList = {menu[category].filter((foodItem) => foodItem.vegetarian === showVeg)}/>
            
          </div>
        </div>
  
      )}
    </div>

  )
}

export default FoodList