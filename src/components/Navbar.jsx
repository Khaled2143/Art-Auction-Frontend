import React from 'react'
import '../css/Navbar.css'
import logo from "../assets/CBLogo.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="Navbar">
      <img className="Logo" src={logo} alt="" />
      <input className="Searchbar" placeholder='Search For Your Favorite Artist...' />
      <div className='buttons'>
        <Link to='/artworks'><button className="Artworks">Artworks</button></Link>
        <Link to='/list-artwork'><button className="list-art">List Your Art</button> </Link>
        <Link to="/login"><button className="LogInButton">Log In</button></Link>
      </div>
    </div>
  )
}

export default Navbar

