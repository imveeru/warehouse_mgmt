import React,{useContext} from 'react'
import {CartContext} from "./../../context/cartContext"
import {db} from '../../firebase'
import {useParams } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';

function Checkout() {

  const{id}=useParams()


  const { shoppingList }=useContext(CartContext)
  const billRef=db.collection("orders").doc(id)
  const pay=()=>{
    billRef.update({hasPaid:true}).then(()=>{
      console.log("Bill Payed")
      toast("Bill Payed!",{icon:"🥳💵"})
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div>
      <Toaster/>
      Checkout
      <br></br><strong>Bill ID: </strong>{shoppingList.toString()}
      <p>{id}</p>
      <br/><button onClick={pay}>Pay</button>
    </div>
  )
}

export default Checkout