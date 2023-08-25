import React from 'react'
import '../css/Navbar.css'
import logo from "../assets/CBLogo.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="Navbar">
      <img className="Logo" src={logo} alt="" />
      <input className="Searchbar" placeholder='Search For Your Favorite Artist...' />
      <button className="Artworks">Artworks</button>
      <Link to="/login"><button className="LogInButton">Log In</button></Link>
    </div>
  )
}

export default Navbar

