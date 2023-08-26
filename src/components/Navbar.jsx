import React, { useState, useEffect } from 'react'
import '../css/Navbar.css'
import logo from "../assets/CBLogo.png"
import { Link } from 'react-router-dom'
import { Post } from '../utils/APICall'

function Navbar() {

  const [isloggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (document.cookie.includes('session')) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogout = () => {
    Post('/logout', {})
      .then(res => {
        console.log(res);
        console.log(res.data);
        setIsLoggedIn(false)
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="Navbar">
      <Link to='/'><img className="Logo" src={logo} alt="" /></Link>
      <input className="Searchbar" placeholder='Search For Your Favorite Artist...' />
      <div className='buttons'>
        <Link to='/artworks'><button className="Artworks">Artworks</button></Link>
        <Link to='/list-artwork'><button className="list-art">List Your Art</button> </Link>
        {isloggedIn ? <button className="accessButton" onClick={handleLogout}>Logout</button> : <Link to='/login'><button className="accessButton">Login</button></Link>}
      </div>
    </div>
  )
}

export default Navbar

