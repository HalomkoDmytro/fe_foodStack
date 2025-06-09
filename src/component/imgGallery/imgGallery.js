import React from 'react';
import Pagination from '../pagination';

const ImageGallery = () => {

    return (
        <div>
            Img Gallery
            <Pagination from={1} to={10}/>
        </div>
    )
}

export default ImageGallery;