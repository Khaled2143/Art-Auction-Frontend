import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../css/ArtistsPage.css";
import images from '../utils/ImageData';
import Post from '../utils/Post';

function ArtistsPage() {
    const [artistData, setArtistData] = useState(null);
    const params = useParams();
    const artistId = params.item;

    useEffect(() => {
        // Fetch artist data from the API based on the artistId
        Post('/artwork', {id: artistId})
            .then(res => {
                console.log(res);
                console.log(res.data);
                setArtistData(res.data);
            }) 
            .catch(err => {
                console.log(err);
            });

    }, [artistId]);

    if (!artistData) {
        return <div>Loading...</div>; // Render a loading state while fetching data
    }

    return (
        <div className="Art">
            <div className="ArtInfo">
                <br/><br/>
                <h1>
                    {artistData.name}
                </h1>
                <div>
                    <img src={images[artistData.imageIndex].src} alt='' />
                </div>
            </div>
            <div className="Bidding">
                <h2>Current Price</h2>
                <h2 className='unbold'>{artistData.currentPrice} USD</h2>
                <br/>
                <h2>Timer</h2>
                <h2 className='unbold'>2:00</h2>
                <br/>
                <button className="bid">Bid Now</button> <input className="InputPrice" placeholder='Bid Price'/>
            </div>
            <div className="ArtistInfo">
                <h1>Artist: {artistData.artistName}</h1>
                <br/>
                <div className="UserImage">
                    <strong>RG</strong>
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