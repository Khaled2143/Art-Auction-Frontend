import React from 'react'
import { useParams } from "react-router-dom"
import "../css/ArtistsPage.css"
import images from '../utils/ImageData';

function ArtistsPage() {
    let params = useParams();
    console.log(params)
    console.log(params.item)

    return (
        <div className="Art">
            <div className="ArtInfo">
                <br/><br/>
                <h1>
                    Monkey
                </h1>
                <div>
                    <img src={images[params.item].src} alt=''></img>
                </div>
            </div>
            <div className="Bidding">
                <h2>Current Price</h2>
                <h2 className='unbold'>500 USD</h2>
                <br/>
                <h2>Timer</h2>
                <h2 className='unbold'>1min 56sec</h2>
                <br/>
                <button className="bid">Bid Now</button> <input className="InputPrice" placeholder='Bid Price'/>
            </div>
            <div className="ArtistInfo">
                <h1>Artist: Ramy Ghoneim</h1>
                <br/>
                <div className="UserImage">
                    <strong>RG</strong>
                </div>
                <br/> 
                <h2>Bio</h2>
                <h4 className='unbold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco<br/>  laboris 
                nisi ut aliquip ex
                </h4>
            </div>
        </div>
    )
}

export default ArtistsPage