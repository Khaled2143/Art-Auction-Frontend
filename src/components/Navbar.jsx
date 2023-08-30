import React from 'react'
import '../css/Navbar.css'
import logo from "../assets/CBLogo.png"
import { Link } from 'react-router-dom'

function Navbar(props) {
  console.log(props.authenticated) // This is undefined
  return (
    <div className="Navbar">
      <Link to='/'><img className="Logo" src={logo} alt="" /></Link>
      <input className="Searchbar" placeholder='Search For Your Favorite Artist...' />
      <div className='buttons'>
        <Link to='/artworks'><button className="Artworks">Artworks</button></Link>
        <Link to='/list-artwork'><button className="list-art">List Your Art</button> </Link>
        {props.authenticated ? <button className="accessButton" onClick={props.handleLogout}>Logout</button> : <Link to='/login'><button className="accessButton">Login</button></Link>}
      </div>
    </div>
  )
}

export default Navbar