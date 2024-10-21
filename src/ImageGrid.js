import React from 'react';
import ImageItem from './ImageItem';
import './ImageGrid.js';

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <ImageItem key={index} src={image} alt={`NASA image ${index}`} />
      ))}
    </div>
  );
};

export default ImageGrid;