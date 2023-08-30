import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import ImageCarousel from '../components/ImageCarousel';
import "../css/LandingPage.css";
import { Get } from '../utils/APICall';

function LandingPage() {
    const location = useLocation();

    const [artworkData, setArtworkData] = useState([]);
    const [showMessage, setShowMessage] = useState(true);

    useEffect(() => {
        // Fetch artwork data from the API based on the artworkId
        getFeaturedArtwork();

        // Show the message if there is one
        if (location?.state?.message) {
            setShowMessage(true);
        }

        // Hide the message after 5 seconds
        setTimeout(() => {
            setShowMessage(false);
        }, 5000);

    }, [location?.state?.message]);

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
            {showMessage && location?.state?.message && <div className={location.state.message[1]}>{location.state.message[0]}</div>}
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
