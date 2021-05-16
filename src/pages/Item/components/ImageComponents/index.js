import React from 'react';
import {ImagesPreview} from './ImagesPreview';
import {ImageCarousel} from './ImageCarousel';
import './image.scss';

export const ImageComponent = (props) => {
    return (
        <div className="Image-wrapper">
            <div className="Image-previewer">
                <ImagesPreview
                    {...props}
                />
            </div>
            <div className="Image-carousel">
                <ImageCarousel
                    {...props}
                />
            </div>
        </div>
    );
};