import React,{useState} from 'react'
import { useAuth } from "../../context/AuthContext"

function ForgotPassword() {

    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit=async (e) =>{

        
        e.preventDefault()

        const { email } = e.target.elements

        try {
        setMessage("")
        setError("")
        await resetPassword(email.value)
        setMessage("Check your inbox for further instructions")
        } catch {
        setError("Failed to reset password")
        }

    }



    return (
        <div>
            <p>Forgot Password</p>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter your email address" name="email"></input>
                <button type="submit">Send mail</button>
            </form>
            <p>{message}</p>
        </div>
    )
}

export default ForgotPassword
