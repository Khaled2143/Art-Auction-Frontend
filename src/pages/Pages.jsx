import React from 'react'
import {Route, Routes} from "react-router-dom"
import LandingPage from './LandingPage'
import ArtistsPage from './ArtistsPage'
import LogInPage from './LogInPage'
import SignUpPage from './SignUpPage'

function Pages() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="artwork/:item" element={<ArtistsPage/>}/>
            <Route path="login" element={<LogInPage/>}/>
            <Route path="signup" element={<SignUpPage/>}/>
        </Routes>
    </div>
  )
}

export default Pages