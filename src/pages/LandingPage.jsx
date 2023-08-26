import React, { useEffect, useState } from 'react'
import ImageCarousel from '../components/ImageCarousel'
import "../css/LandingPage.css"
import { Get } from '../utils/APICall'

function LandingPage() {
    const [artworkData, setArtworkData] = useState([]);

    useEffect(() => {
        // Fetch artwork data from the API based on the artworkId
        getFeaturedArtwork();

    }, []);

    const getFeaturedArtwork = () => {
        Get(`/artworks/featured`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setArtworkData(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className="LandingPage">
            <div className="bg"/>
            <br/>
            <div className="content">
                <h1 style={{color:"white"}}>Featured Artwork</h1>
                <br/>
                <ImageCarousel images={artworkData}/>
            </div>
            <button className="Explore">Explore Artworks →</button>
        </div>
    )
}

export default LandingPage
