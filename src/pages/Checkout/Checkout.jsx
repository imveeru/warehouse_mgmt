import React,{useContext} from 'react'
import {CartContext} from "./../../context/cartContext"
import {db} from '../../firebase'

function Checkout() {

  const { shoppingList }=useContext(CartContext)
  const billRef=db.collection("orders")
  // const pay=()=>{

  // }

  return (
    <div>
      Checkout
      {shoppingList.toString()}
      <br/><button onClick={""}>Pay</button>
    </div>
  )
}

export default Checkout