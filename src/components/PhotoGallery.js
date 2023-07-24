import React from 'react';
import GalleryImages from './GalleryImages';

const PhotoGallery = ({ images }) => {
    return (
        <div className="phogallery">
            {images.map((image) => (
                <GalleryImages key={image.id} image={image} />
            ))}
        </div>
    );
};

export default PhotoGallery;
