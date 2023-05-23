import React from 'react'

function Food({name,price}) {
  return (
    <div>
        <p>{name}</p>
        <div> Price: {price} </div>
        <div className = "spacefill"></div>
    </div>
  )
}

export default Food