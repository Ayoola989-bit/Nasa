import React from 'react';
import './ImageItem.js';

const ImageItem = ({ src, alt }) => {
  return <img src={src} alt={alt} className="image-item" />;
};

export default ImageItem;