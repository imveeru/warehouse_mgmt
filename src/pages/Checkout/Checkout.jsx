import React,{useContext} from 'react'
import {CartContext} from "./../../context/cartContext"
import {db} from '../../firebase'
import {useParams } from "react-router-dom"

function Checkout() {

  const{id}=useParams()


  const { shoppingList }=useContext(CartContext)
  const billRef=db.collection("orders")
  // const pay=()=>{

  // }

  return (
    <div>
      Checkout
      {shoppingList.toString()}
      <p>{id}</p>
      <br/><button onClick={""}>Pay</button>
    </div>
  )
}

export default Checkout