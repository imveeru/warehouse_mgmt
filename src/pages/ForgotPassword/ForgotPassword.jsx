import React from 'react'

function ForgotPassword() {
    return (
        <div>
            <p>Forgot Password</p>
            <form>
                <input type="email" placeholder="Enter your email address"></input>
                <button type="submit">Send mail</button>
            </form>
        </div>
    )
}

export default ForgotPassword
