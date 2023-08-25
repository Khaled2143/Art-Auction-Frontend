import React from 'react'
import '../css/Navbar.css'
import logo from "../assets/CBLogo.png"

function Navbar() {
  return (
    <div className="Navbar">
      <img className="Logo" src={logo} alt="" />
      <input className="Searchbar" placeholder='Search For Your Favorite Artist...' />
      <button className="Artworks">Artworks</button>
      <button className="LogInButton">Log In</button>
    </div>
  )
}

export default Navbar

