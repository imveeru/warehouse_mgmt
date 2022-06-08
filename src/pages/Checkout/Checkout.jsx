import React,{useContext,useEffect} from 'react'
import { useNavigate   } from "react-router-dom";
import {CartContext} from "./../../context/cartContext"
import {db,rDB} from '../../firebase'
import {useParams } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import { getDatabase, ref, onValue} from "firebase/database";


function Checkout() {

  const{id}=useParams()

  let navigate=useNavigate()


  const { shoppingList,clearCart }=useContext(CartContext)
  const billRef=db.collection("orders").doc(id)
  
  const pay=()=>{
    billRef.update({hasPaid:true}).then(()=>{
      console.log("Bill Payed")
      toast("Bill Payed!",{icon:"🥳💵"})
      setTimeout(() => { 
        navigate("/")
        clearCart()

      }, 2500);
    }).catch((err)=>{
      console.log(err)
    })
  }

  const DB = getDatabase();
  const billIDRef = ref(DB, 'billID');

  const fetchBillID=() => {

    onValue(billIDRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
});
  }

  useEffect(() => {
    fetchBillID()
  },[])

  return (
    <div>
      <Toaster/>
      Checkout
      <br></br>{shoppingList.toString()}
      <p><strong>Bill ID: </strong>{id}</p>
      <br/><button onClick={pay}>Pay</button>
    </div>
  )
}

export default Checkout