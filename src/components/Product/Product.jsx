import React from 'react'
import {FiShoppingCart} from "react-icons/fi"

function Product({name,price,brand,imgURL}) {
    return (
        <div className="flex gap-6 flex-row p-4 rounded-lg place-items-center bg-gray-bg/40">
            <img className="rounded-lg w-[70px]" alt="product" src="https://firebasestorage.googleapis.com/v0/b/warehouse-ad245.appspot.com/o/productImages%2Fapple.jpg?alt=media&token=c66f7497-1323-4485-be92-3c615dc45381"></img>
            <div className="flex flex-col">
                <p className="font-body text-3xl  font-semibold">Apple</p>
                <p className="font-body text-md text-slate-500 font-light">sold by Mr.Bean Farms</p>
            </div>
            <p className="font-body text-3xl  font-semibold ml-24">$2/kg</p>
            <select className="p-3 rounded-lg bg-white border-2 border-gray-300 text-normal font-body m-2">
                <option value="5">5 kg</option>
                <option value="10">10 kg</option>
                <option value="15">15 kg</option>
            </select>
            <button
                className="flex flex-row place-items-center gap-2 m-3 px-6 py-2 text-white font-title font-semibold text-xl bg-orange-400 hover:bg-orange-500 rounded-lg"
                >
                <FiShoppingCart/>Add to cart
            </button>
        </div>
    )
}

export default Product
