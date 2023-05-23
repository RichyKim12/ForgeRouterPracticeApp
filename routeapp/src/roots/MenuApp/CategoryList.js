import React from 'react'
import Food from './Food.js';
function CategoryList({categoryList, category, menu}) {
//   console.log(menu[category])
  console.log(categoryList)
  return (
    // <></>
    <div>
        {categoryList.map((item,index)=>
            <div key = {index}>
                <Food 
                    key = {item}
                    name = {item.food}
                    price = {item.price}
                />
            </div>
        )}
    </div>
  )
}

export default CategoryList