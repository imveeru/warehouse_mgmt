import React,{useContext} from 'react'
import {CartContext} from "./../../context/cartContext"

function Checkout() {

  const { shoppingList }=useContext(CartContext)

  return (
    <div>
      Checkout
      {shoppingList.toString()}
    </div>
  )
}

export default Checkout