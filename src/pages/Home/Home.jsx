import React,{useState,useEffect,useContext} from 'react'
import Product from '../../components/Product/Product'
import {FiLogOut,FiMapPin,FiUser,FiCalendar,FiPhoneCall,FiShoppingCart} from "react-icons/fi"
import { useAuth } from "../../context/AuthContext"
import {db,rDB} from '../../firebase'
import {useNavigate} from "react-router-dom";
import Loader from "react-js-loader";
import { collection, getDocs } from "firebase/firestore";
import {CartContext} from "./../../context/cartContext"
import {OrderContext} from "./../../context/orderContext"
import { getDatabase, ref, set } from "firebase/database";

function Home() {

    let navigate = useNavigate();
    const { currentUser, logout } = useAuth()
    // console.log(currentUser.uid);

    const { shoppingList }=useContext(CartContext)
    const cartCount = shoppingList.reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {})
    let cartKeys=Object.keys(cartCount)
    
    
    const { shoppingCart,emptyCart }=useContext(OrderContext)


    let i
    let tempCart=[]
    for(i=0;i<cartKeys.length;i++){
        // console.log("before",tempCart)
        tempCart.splice()
        tempCart.push(cartKeys[i]+"/"+cartCount[cartKeys[i]])
        // console.log("after",tempCart)
    }

    const[cart,setCart]=useState()
    

    const shoppingMarkup = shoppingList.map((item, index) => (
        <li key = {index} className = 'list-item'> 
                  {item} 
       </li>
    )) 


    const[loggedInUser,setloggedInUser]=useState()
    const[productList,setProductList]=useState([])

    const placeOrder=async()=>{

        setCart(tempCart)
        const order={
            "hasDelivered":false,
            "hasPaid":false,
            "orderedBy":currentUser.uid,
            "orderTime":new Date().toUTCString(),
            "amount":100,
            "products":tempCart,
        }

        db.collection('orders').add(order).then((docRef)=>{
            console.log("Order placed!",docRef.id)
            const db = getDatabase();
            // set(ref(db, 'billID'), {billID: docRef.id,order:tempCart});

            shoppingCart.sort((a, b)=>{return a - b})
            set(ref(db, 'billID'), {orderID:docRef.id,locations:shoppingCart})
            emptyCart()

            navigate(`/checkout/${docRef.id}`)
        }).catch((err)=>{
            console.log(err)
        })

        
    }

    const userDbRef=db.collection('users')

    const fetchUserData=async()=>{
        const res=userDbRef.doc(currentUser.uid)
        await res.onSnapshot((doc)=>{
            setloggedInUser(doc.data())
        })
    }

    const fetchProductData=async()=>{

        const tempProductList=[]

        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
            tempProductList.push(doc.data())
        });

        setProductList(tempProductList)
    }


    useEffect(()=>{
        if(currentUser){
            fetchUserData()
        }
        fetchProductData()
    },[])

    // console.log(loggedInUser)
    // console.log(productList);

    const handleLogout = async () => {
        try{
            await logout()
            navigate("/login")
        }catch(error){
            console.log(error);
        }
    }


    return (
        
        <div className="h-100 p-5 grid grid-rows-1 grid-cols-12">
            
            {/* User Information section */}
            <div className="static col-span-3 p-8 m-2 bg-gray-bg rounded-2xl grid grid-cols-1 grid-rows-10">

                {/* App logo */}
                <div className="row-span-2 p-4">
                    <img className="w-[70%] mx-auto my-auto" src="https://firebasestorage.googleapis.com/v0/b/warehouse-ad245.appspot.com/o/logo.png?alt=media&token=a022033d-269e-4d23-97ff-829d595045b5" alt="logo"></img>
                </div>

                {loggedInUser?<div className="grid grid-cols-1 grid-rows-6 row-span-6 p-4">
                   
                    {/* Profile Image */}
                    <div className="row-span-2">
                        <img className="w-[62%] mx-auto my-auto rounded-[1.75em] p-4" src={loggedInUser.profileImg} alt="user"></img>
                    </div>

                    {/* User details */}
                    <div className="row-span-4 text-center mt-8 mb-6">
                        <h2 className="font-title font-bold text-5xl">{loggedInUser.name}</h2>
                        <div className="grid grid-cols-1 grid-rows-4 my-4">
                            <div className="flex flex-row place-items-center gap-3 bg-white p-3 m-3 rounded-xl shadow-md">
                                <div className=" bg-yellow-100 p-2 rounded-md "><FiMapPin color="#baa00f"/> </div>
                                <p className="font-body text-md text-slate-600">{loggedInUser.address}</p>
                            </div>

                            <div className="flex flex-row place-items-center gap-3 bg-white p-3 m-3 rounded-xl shadow-md">
                                <div className=" bg-green-100 p-2 rounded-md "><FiUser color="#3c995c"/> </div>
                                <p className="font-body text-md text-slate-600">{loggedInUser.type}</p>
                            </div>

                            <div className="flex flex-row place-items-center gap-3 bg-white p-3 m-3 rounded-xl shadow-md">
                                <div className=" bg-violet-100 p-2 rounded-md "><FiCalendar color="#643c99"/> </div>
                                <p className="font-body text-md text-slate-600">Since {loggedInUser.userSince}</p>
                            </div>

                            <div className="flex flex-row place-items-center gap-3 bg-white p-3 m-3 rounded-xl shadow-md">
                                <div className=" bg-red-100 p-2 rounded-md "><FiPhoneCall color="#99453c"/> </div>
                                <p className="font-body text-md text-slate-600">Call us @ <a className=" font-medium hover:underline-offset-1" href="tel:123456789">{loggedInUser.contact}</a></p>
                            </div>

                            
                        </div>
                    </div>
                </div>:<div><Loader type="bubble-ping" color={"#2563EB"} bgColor={"#2563EB"} title={"Loading..."} size={100} /></div>}

                {/* Log out btn */}
                <div className="row-span-2 p-4 place-self-center">
                    <button
                        className="flex flex-row place-items-center gap-2 px-6 py-2 hover:text-white text-blue-500 font-title font-semibold text-xl bg-blue-500/5 border-2 border-blue-500 hover:border-0 hover:bg-blue-600 rounded-lg"
                        onClick={handleLogout}
                    >
                        <FiLogOut></FiLogOut>Log out
                    </button>
                </div>

            </div>

            {/* Product list */}
            <div className="col-span-6 p-8 m-2 overflow-scroll">
                <p className="text-left font-title font-bold text-5xl ">Products</p>
                <div className="flex flex-col gap-4 mt-6">
                    {
                        productList.map((product) =>{
                            return <Product key={product.name} name={product.name} price={product.price} brand={product.brand} imgURL={product.imgUrl} location={product.location}/>
                        })
                    }
                </div>
            </div>

            {/* Cart */}
            <div className="col-span-3 p-8 m-2 bg-gray-bg rounded-2xl grid grid-cols-1 grid-rows-10">
                
                <div className="row-span-2 p-4">
                    <p className="w-[70%] mx-auto my-auto text-3xl font-title font-bold">Shopping Cart</p>
                </div>

                <div className="flex flex-col row-span-4 text-center mt-8 mb-6 place-self-center text-8xl text-black/40">
                    {shoppingList.length<=0?<>
                    <FiShoppingCart className="ml-8"/>
                    <p className="text-4xl font-body mt-4 place-items-center ">Add items <br></br>to your cart!</p>
                    </>:<ul>{shoppingMarkup}</ul>}
                </div>

                <div className="row-span-2 p-4 place-self-center">
                    <button
                        className="flex flex-row place-items-center gap-2 px-6 py-2 text-white font-title font-semibold text-xl bg-green-600 hover:bg-green-700 rounded-lg"
                        onClick={placeOrder}
                    >
                        <FiShoppingCart></FiShoppingCart>Buy Now
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Home