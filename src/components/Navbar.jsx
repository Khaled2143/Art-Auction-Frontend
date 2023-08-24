import React from 'react'
import '../css/Navbar.css'
import logo from "../logo.png"

function Navbar() {
  return (
    <div class = "Navbar">
        <img class="Logo" src={logo}/>
        <input class="Searchbar" placeholder='Search For Your Favorite Artist...'/>
        <button class="SignUpButton">Sign Up</button>
    </div>
  )
}

export default Navbar