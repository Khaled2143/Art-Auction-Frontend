import React, { useState, useEffect } from 'react';
import "../css/ArtworksPage.css"; // Create this CSS file for styling
import { Link } from 'react-router-dom';
import { Get } from '../utils/APICall';


function ArtworksPage() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    // Fetch artwork data from your backend
    Get('/artworks')
        .then(res => {
            console.log(res);
            console.log(res.data);
            setArtworks(res.data);
        })
        .catch(err => {
            console.log(err);
        });
  }, []);

  return (
    <div className="ArtworksPage">
      <div className="artworks-grid">
        {artworks.map((artwork) => (
          <Link to={'/artworks/'+artwork.id} key={artwork.id} className="artwork-item">
            <img src={artwork.image} alt={`Artwork ${artwork.id}`} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArtworksPage;
