import React from 'react'
import ImageCarousel from '../components/ImageCarousel'
import "../css/LandingPage.css"

function LandingPage() {
    return (
        <div className="LandingPage">
            <div className="bg"/>
            <br/>
            <div className="content">
                <h1 style={{color:"white"}}>Featured Artwork</h1>
                <br/>
                <ImageCarousel/>
            </div>
            <button className="Explore">Explore Artworks →</button>
        </div>
    )
}

export default LandingPage
