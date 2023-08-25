import React from 'react'
import "../css/SignUpPage.css"

function SignUpPage() {
    return (
        <div className="SignUp">
            <div className="signup-container">
                <h1>Sign Up</h1>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default SignUpPage