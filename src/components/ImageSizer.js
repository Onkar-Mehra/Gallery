import React from 'react';

const ImageSizer = ({ imageLink }) => {
    return (
        <div className="imagesizer">
            <img src={imageLink} alt="Zoomed In" />
        </div>
    );
};

export default ImageSizer;
