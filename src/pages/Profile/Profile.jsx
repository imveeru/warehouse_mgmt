import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import {db,storage} from '../../firebase'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useNavigate   } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

function Profile({userID}) {

    let navigate=useNavigate()

    const { register, handleSubmit } = useForm();
    const[userData,setUserData]=useState()

    const [imgUrl, setImgUrl] = useState(); 
    const [progresspercent, setProgresspercent] = useState(0);

    const onSubmit = (data) => {
        console.log(data);
        setUserData(data)

        db.collection('users').doc(userID).set({...data,"profileImg":imgUrl}).then(()=>{
            toast.success("User added successfully")
            navigate("/login")
        }).catch((err)=>{
            console.log(err)
        })

    }

    const handleImgUpload = (e) => {
        e.preventDefault()
        const file = e.target[0]?.files[0]
        if (!file) return;
        const storageRef = ref(storage,`/profileImages/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        uploadTask.on("state_changed",
          (snapshot) => {
            const progress =
              Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgresspercent(progress);
          },
          (error) => {
            alert(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setImgUrl(downloadURL)
            });
          }
        );
      }

  return (
    <div>
      <Toaster/>
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
        <div className='outerbar'>
          <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
        </div>
        <button type="submit" form="sub-form">Upload Image</button><br/>

        <input {...register("userSince")} type="text" className="" hidden value={new Date().getFullYear()} form="main-form"/>
        {/* <input {...register("profileImg")} type="text" className="" hidden value={imgUrl} form="main-form"/> */}
        <button type="submit" form="main-form">Save Profile</button><br/>

        <p>Upload your profile image before submitting the form</p>
        
    </div>
  )
}

export default Profile