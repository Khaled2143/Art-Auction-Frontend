import React from 'react'
import "../css/LogInPage.css"
import { Link } from 'react-router-dom'

function LogInPage() {
    return (
        <div className="LogIn">
            <div className="login-container">
                <h1>Login</h1>
                <input type="text" placeholder="Username or Email" />
                <input type="password" placeholder="Password" />
                <button className='button'>Login</button>
                <Link to="/signup">Don't have an account? Sign up now!</Link>
            </div>
        </div>
    )
}

export default LogInPage