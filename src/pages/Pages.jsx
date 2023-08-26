import React from 'react'
import {Route, Routes} from "react-router-dom"
import LandingPage from './LandingPage'
import ArtistsPage from './ArtistsPage'
import LogInPage from './LogInPage'
import SignUpPage from './SignUpPage'
import ListArtworkPage from './ListArtworkPage'

function Pages() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="artwork/:item" element={<ArtistsPage/>}/>
            <Route path="login" element={<LogInPage/>}/>
            <Route path="signup" element={<SignUpPage/>}/>
            <Route path="list-artwork" element={<ListArtworkPage/>}/>
        </Routes>
    </div>
  )
}

export default Pages