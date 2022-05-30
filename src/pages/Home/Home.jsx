import React from 'react'
import logo from '../../static/logo.png'
import Product from '../../components/Product/Product'
import {FiLogOut,FiMapPin,FiUser,FiCalendar,FiPhoneCall,FiShoppingCart} from "react-icons/fi"

function Home() {
    return (
        <div className="h-100 p-5 grid grid-rows-1 grid-cols-12">
            {/* User Information section */}
            <div className="static col-span-3 p-8 m-2 bg-gray-bg rounded-2xl grid grid-cols-1 grid-rows-10">

                {/* App logo */}
                <div className="row-span-2 p-4">
                    <img className="w-[70%] mx-auto my-auto" src={logo} alt="logo"></img>
                </div>

                <div className="grid grid-cols-1 grid-rows-6 row-span-6 p-4">
                   
                    {/* Profile Image */}
                    <div className="row-span-2">
                        <img className="w-[62%] mx-auto my-auto rounded-[1.75em] p-4" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="logo"></img>
                    </div>

                    {/* User details */}
                    <div className="row-span-4 text-center mt-8 mb-6">
                        <h2 className="font-title font-bold text-5xl">Ben's Bakery</h2>
                        <div className="grid grid-cols-1 grid-rows-4 my-4">
                            <div className="flex flex-row place-items-center gap-3 bg-white p-3 m-3 rounded-xl shadow-md">
                                <div className=" bg-yellow-100 p-2 rounded-md "><FiMapPin color="#baa00f"/> </div>
                                <p className="font-body text-md text-slate-600">25, 1st street, RK Nagar, Chennai.</p>
                            </div>

                            <div className="flex flex-row place-items-center gap-3 bg-white p-3 m-3 rounded-xl shadow-md">
                                <div className=" bg-green-100 p-2 rounded-md "><FiUser color="#3c995c"/> </div>
                                <p className="font-body text-md text-slate-600">Restaurant</p>
                            </div>

                            <div className="flex flex-row place-items-center gap-3 bg-white p-3 m-3 rounded-xl shadow-md">
                                <div className=" bg-violet-100 p-2 rounded-md "><FiCalendar color="#643c99"/> </div>
                                <p className="font-body text-md text-slate-600">Since 2016</p>
                            </div>

                            <div className="flex flex-row place-items-center gap-3 bg-white p-3 m-3 rounded-xl shadow-md">
                                <div className=" bg-red-100 p-2 rounded-md "><FiPhoneCall color="#99453c"/> </div>
                                <p className="font-body text-md text-slate-600">Call us @ <a className=" font-medium hover:underline-offset-1" href="tel:123456789">1234567890</a></p>
                            </div>

                            
                        </div>
                    </div>
                </div>

                {/* Log out btn */}
                <div className="row-span-2 p-4 place-self-center">
                    <button
                        className="flex flex-row place-items-center gap-2 px-6 py-2 hover:text-white text-blue-500 font-title font-semibold text-xl bg-blue-500/5 border-2 border-blue-500 hover:border-0 hover:bg-blue-600 rounded-lg"
                    >
                        <FiLogOut></FiLogOut>Log out
                    </button>
                </div>

            </div>

            {/* Product list */}
            <div className="col-span-6 p-8 m-2 overflow-scroll">
                <p className="text-left font-title font-bold text-5xl ">Products</p>
                <div className="flex flex-col gap-4 mt-6">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
            </div>

            {/* Cart */}
            <div className="col-span-3 p-8 m-2 bg-gray-bg rounded-2xl grid grid-cols-1 grid-rows-10">
                
                <div className="row-span-2 p-4">
                    <p className="w-[70%] mx-auto my-auto text-3xl font-title font-bold">Shopping Cart</p>
                </div>

                <div className="flex flex-col row-span-4 text-center mt-8 mb-6 place-self-center text-8xl text-black/40">
                    <FiShoppingCart className="ml-8"/>
                    <p className="text-4xl font-body mt-4 place-items-center ">Add items <br></br>to your cart!</p>
                </div>

                <div className="row-span-2 p-4 place-self-center">
                    <button
                        className="flex flex-row place-items-center gap-2 px-6 py-2 text-white font-title font-semibold text-xl bg-green-600 hover:bg-green-700 rounded-lg"
                    >
                        <FiShoppingCart></FiShoppingCart>Buy Now
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Home
