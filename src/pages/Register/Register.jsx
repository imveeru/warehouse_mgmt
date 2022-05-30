import React,{useState} from 'react'
import { Route,history,Navigate  } from "react-router-dom";
import Home from '../Home/Home'
import { useAuth } from "../../context/AuthContext"

function Register() {

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
      return <Navigate to="/" replace={true}/>
    } catch (error) {
      setError(error);
    }

    setLoading(false)
  };
  

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Email" />
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
      <p>{error}</p>
    </>
  )
}

export default Register