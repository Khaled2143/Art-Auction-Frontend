import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../css/ArtistsPage.css";
import {Get} from '../utils/APICall';

function ArtistsPage() {
    const [artworkData, setArtworkData] = useState(null);
    const params = useParams();
    const artworkId = params.item;

    useEffect(() => {
        // Fetch artwork data from the API based on the artworkId
        Get(`/artworks/${artworkId}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setArtworkData(res.data);
            }) 
            .catch(err => {
                console.log(err);
            });

    }, [artworkId]);

    if (!artworkData) {
        return <div>Loading...</div>; // Render a loading state while fetching data
    }

    return (
        <div className="Art">
            <div className="ArtInfo">
                <br/><br/>
                <h1>
                    {artworkData.title}
                </h1>
                <div>
                    <img src={artworkData.image} alt='' />
                </div>
            </div>
            <div className="Bidding">
                <h2>Current Price</h2>
                <h2 className='unbold'>{artworkData.current_bid} USD</h2>
                <br/>
                <h2>Timer</h2>
                <h2 className='unbold'>2:00</h2>
                <br/>
                <button className="bid">Bid Now</button> <input className="InputPrice" placeholder='Bid Price'/>
            </div>
            <div className="ArtistInfo">
                <h1>Artist: {artworkData.artist_name}</h1>
                <br/>
                <div className="UserImage">
                    <strong>{artworkData.artist_name[0]}</strong>
                </div>
                <br/>
                <h2>Bio</h2>
                <h4 className='unbold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco<br/>  laboris 
                nisi ut aliquip ex</h4>
            </div>
        </div>
    );
}

export default ArtistsPage;