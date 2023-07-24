import React, { useState } from 'react';
import ImageSizer from './ImageSizer';

const GalleryImages = ({ image }) => {
    const imageLink = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;
    const [showImageZoom, setShowImageZoom] = useState(false);

    const handleMouseEnter = () => {
        showImageZoom(true);
    };

    const handleMouseLeave = () => {
        setShowImageZoom(false);
    };

    return (
        <div
            className="gallerymouse"
            enterMouse={handleMouseEnter}
            leaveMouse={handleMouseLeave}
        >
            <div className="imagecon">
                <img src={imageLink} alt={image.title} />
                {showImageZoom && <ImageSizer imageLink={imageLink} />}
            </div>
        </div>
    );
};

export default GalleryImages;
