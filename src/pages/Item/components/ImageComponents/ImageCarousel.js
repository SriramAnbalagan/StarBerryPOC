import React from 'react';
import PropTypes from 'prop-types';
import Carousel from "react-multi-carousel";
import {Image} from "semantic-ui-react";
import {Assests} from '../../../../assests';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3,
        paritialVisibilityGutter: 60
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2,
        paritialVisibilityGutter: 50
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
        paritialVisibilityGutter: 30
    }
};

export const ImageCarousel = (props) => {
    const {selectedTile} = props;
    const {Images} = selectedTile || {};
    const {notFoundImg} = Assests;

    const blankImg = [notFoundImg, notFoundImg, notFoundImg, notFoundImg]


    const img = Images && Images.map((item) => {
        return item.url
    })
    const formattedImg = img && img.length > 0 ? img : blankImg;

    return (
        <div className="carousel-wrapper">
            <Carousel
                ssr
                partialVisbile
                itemClass="image-item"
                responsive={responsive}
            >
                {formattedImg.slice(0, 5).map(image => {
                    return (
                        <Image
                            draggable={false}
                            style={{width: "100%", height: "100%"}}
                            src={image}
                        />
                    );
                })}
            </Carousel>
        </div>
    );
};

ImageCarousel.propTypes = {
    selectedTile: PropTypes.object
};