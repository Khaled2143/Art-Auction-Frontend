import React from 'react'
import AnimatedImage from '../components/AnimatedImage'
import ImageCarousel from '../components/ImageCarousel'
import "../css/LandingPage.css"

function LandingPage() {
    return (
        <div className="LandingPage">
            <div className="bg"/>
            <br/>
            <div className="content">
                <h1>Featured Artwork</h1>
                <br/>
                <ImageCarousel/>
            </div>
            <button className="Explore">Explore Artworks →</button>
        </div>
    )
}

export default LandingPage
