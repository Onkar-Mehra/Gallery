import React, { useState } from 'react';
import SearchDrop from './SearchDrop';
import PhotoGallery from './PhotoGallery';

const MainGallery = () => {
    const [images, setImages] = useState([]);

    return (
        <div>
            <h1 className="heading">Photo Gallery</h1>
            <SearchDrop onSearch={setImages} />
            <PhotoGallery images={images} />
        </div>
    );
};

export default MainGallery;
