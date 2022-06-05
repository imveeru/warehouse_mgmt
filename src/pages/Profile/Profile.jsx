import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import {db} from '../../firebase'

function Profile({userID}) {

    const { register, handleSubmit } = useForm();
    const[userData,setUserData]=useState()
    const onSubmit = (data) => {
        console.log(data);
        setUserData(data)
        db.collection('users').doc(userID).set(data).
        then(()=>{console.log("User added successfully")}).
        catch((err)=>{console.log(err)})
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} type="text" className="" placeholder="Enter your name" name="name"></input>
            <input {...register("address")} type="text" className="" placeholder="Enter your address" name="address"></input>
            <input {...register("contact")} type="text" className="" placeholder="Enter your mobile number" name="contact"></input>
            <select {...register("type")} type="text" className="" placeholder="Select your user type"  name="type">
                <option default disabled value="Select your user type"></option>
                <option value="Restaurant"></option>
                <option value="Grocery Store"></option>
            </select>
            <input {...register("userSince")} type="text" className="" hidden value={new Date().getFullYear()}/>
            <button type="submit">Submit</button>
        </form>
        <p>{userData}</p>
    </div>
  )
}

export default Profile