import React, { useState } from 'react';
import Navbar from './Navbar';
import './Gallery.css';

const Gallery = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const images = [
    { id: 1, src: 'https://via.placeholder.com/400', alt: 'Image 1' },
    { id: 2, src: 'https://via.placeholder.com/400', alt: 'Image 2' },
    { id: 3, src: 'https://via.placeholder.com/400', alt: 'Image 3' },
    // Add more image objects as needed
  ];

  const openLightbox = (imageUrl) => {
    setLightboxImage(imageUrl);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div>
        <Navbar />
        <div className='gallery'>
            {images.map(image => (
                <div key={image.id} className="image-container" onClick={() => openLightbox(image.src)}>
                <img src={image.src} alt={image.alt} className="gallery-image" />
                <div className="overlay">
                    <div className="overlay-text">{image.alt}</div>
                </div>
                </div>
            ))}
            {lightboxImage && (
                <div className="lightbox" onClick={closeLightbox}>
                <img src={lightboxImage} alt="Lightbox" className="lightbox-image" />
                </div>
            )}
      </div>
    </div>
  );
};

export default Gallery;
