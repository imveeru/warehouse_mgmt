import React,{useState} from 'react'
import { Route,useNavigate   } from "react-router-dom";
import Home from '../Home/Home'
import { useAuth } from "../../context/AuthContext"


function Register() {

  let navigate = useNavigate();

  const { signup } = useAuth()

  const[error,setError]=useState("")
  const[isLoading,setLoading]=useState(false)

  const handleSubmit = async (e) => {
    
    e.preventDefault();    
    const { email, password } = e.target.elements;

    try {
      setError("")
      setLoading(true)
      await signup(email.value, password.value)
      return navigate("/")
    } catch (error) {
      setError(error);
    }

    setLoading(false)
  };
  

  return (
    <div>
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
  )
}

export default Register