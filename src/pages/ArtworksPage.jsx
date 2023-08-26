import React, { useState, useEffect } from 'react';
import "../css/ArtworksPage.css"; // Create this CSS file for styling
import Post from '../utils/Post';


function ArtworksPage() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    // Fetch artwork data from your backend
    Post('/artworks')
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
          <div key={artwork.id} className="artwork-item">
            <img src={artwork.imageUrl} alt={`Artwork ${artwork.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtworksPage;
