import React from 'react'
import {Route, Routes} from "react-router-dom"
import LandingPage from './LandingPage'
import ArtistsPage from './ArtistsPage'

function Pages() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="artwork/:item" element={<ArtistsPage/>}/>
        </Routes>
    </div>
  )
}

export default Pages