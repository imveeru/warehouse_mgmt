import React,{useState} from 'react'
import {FiShoppingCart} from "react-icons/fi"

function Product({name,price,brand,imgURL}) {

    const[cart,setCart]=useState([])


    const addToCart=(e)=>{
        e.preventDefault()
        const{quantity}=e.target.elements
        console.log("elei add to cart",quantity.value);
    }

    return (
        <div className="flex gap-6 flex-row p-4 rounded-lg place-items-center bg-gray-bg/40">
            <form id="addToCart" onSubmit={addToCart}></form>
            <img className="rounded-lg w-[70px]" alt="product" src={imgURL}></img>
            <div className="flex flex-col">
                <p className="font-body text-3xl  font-semibold">{name}</p>
                <p className="font-body text-md text-slate-500 font-light">sold by {brand}</p>
            </div>
            <p className="font-body text-3xl  font-semibold ml-24">${price}/kg</p>
            <select form="addToCart" name="quantity" className="p-3 rounded-lg bg-white border-2 border-gray-300 text-normal font-body m-2">
                <option value="5">5 kg</option>
                <option value="10">10 kg</option>
                <option value="15">15 kg</option>
            </select>
            <button
                className="flex flex-row place-items-center gap-2 m-3 px-6 py-2 text-white font-title font-semibold text-xl bg-orange-400 hover:bg-orange-500 rounded-lg"
                type="submit"
                form="addToCart"
                >
                <FiShoppingCart/>Add to cart
            </button>
        </div>
    )
}

export default Product
