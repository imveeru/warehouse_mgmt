import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import {db} from '../../firebase'
import { useNavigate   } from "react-router-dom";

function Profile({userID}) {

    let navigate=useNavigate()

    const { register, handleSubmit } = useForm();
    const[userData,setUserData]=useState()

    const [imgUrl, setImgUrl] = useState(null);
    const [progresspercent, setProgresspercent] = useState(0);

    const onSubmit = (data) => {
        console.log(data);
        setUserData(data)

        // db.collection('users').doc(userID).set(data).then(()=>{
        //     console.log("User added successfully")
        //     navigate("/login")
        // }).catch((err)=>{
        //     console.log(err)
        // })

    }

    const handleImgUpload=(e)=>{

    }

  return (
    <div>
        <form id="main-form" onSubmit={handleSubmit(onSubmit)}></form>
        <form id="sub-form" onSubmit={handleImgUpload}></form>

        <input {...register("name")} type="text" className="" placeholder="Enter your name" name="name" form="main-form"></input>
        <input {...register("address")} type="text" className="" placeholder="Enter your address" name="address" form="main-form"></input>
        <input {...register("contact")} type="text" className="" placeholder="Enter your mobile number" name="contact" form="main-form"></input>
        <select {...register("type")} type="text" className="" placeholder="Select your user type"  name="type" form="main-form">
            <option default disabled value="Select your user type" form="main-form"></option>
            <option value="Restaurant"></option>
            <option value="Grocery Store"></option>
        </select>

        <input type="file" name="profileImg" form="sub-form"/>
        <button type="submit" form="sub-form">Submit</button>

        <input {...register("userSince")} type="text" className="" hidden value={new Date().getFullYear()} form="main-form"/>
        <button type="submit" form="main-form">Submit</button>
        
    </div>
  )
}

export default Profile