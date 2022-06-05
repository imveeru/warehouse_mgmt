import React,{useState} from 'react'
import { Route,useNavigate   } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"
import Profile from '../Profile/Profile'


function Register() {

  let navigate = useNavigate();

  const { signup } = useAuth()

  const[error,setError]=useState()
  const[isLoading,setLoading]=useState(false)
  const[uID,setUID]=useState("")
  const[hasUID,setHasUID]=useState(false)

  const handleSubmit = async (e) => {
    
    e.preventDefault();    
    const { email, password } = e.target.elements;

    try {
      setLoading(true)
      await signup(email.value, password.value).then((res)=>setUID(res.user.uid)).catch((err)=>console.log(err.message))
      // return navigate("/profile")
      setHasUID(true)
      
    } catch(err){
      setError(err.message);
      console.log(error);
    }

    setLoading(false)
  };
  

  return (
    <>
    {!hasUID?<div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
      <p>{error}</p>
    </div>
    :<Profile/>}
    </>
  )
}

export default Register