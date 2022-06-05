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
        
        <input {...register("name")} type="text" className="" placeholder="Enter your name" name="name"></input>
        <input {...register("address")} type="text" className="" placeholder="Enter your address" name="address"></input>
        <input {...register("contact")} type="text" className="" placeholder="Enter your mobile number" name="contact"></input>
        <select {...register("type")} type="text" className="" placeholder="Select your user type"  name="type">
            <option default disabled value="Select your user type"></option>
            <option value="Restaurant"></option>
            <option value="Grocery Store"></option>
        </select>
        <input {...register("profileImg")} type="file" name="profileImg" />
        <input {...register("userSince")} type="text" className="" hidden value={new Date().getFullYear()}/>
        <button type="submit">Submit</button>
        
    </div>
  )
}

export default Profile