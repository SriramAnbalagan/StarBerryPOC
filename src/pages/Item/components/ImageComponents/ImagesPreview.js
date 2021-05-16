import React from 'react';
import PropTypes from 'prop-types';
import {Assests} from '../../../../assests';

export const ImagesPreview = (props) => {

    const {selectedTile} = props;
    const {Images} = selectedTile || [];
    const {notFoundImg} = Assests;
    const imgUrl = Images && Images.length > 0 ? Images[0].url : notFoundImg;

    return (
        <div className="preview-wrapper">
            <img className="preview-img" src={imgUrl} alt="Alt text"></img>
        </div>
    );
}

ImagesPreview.propTypes = {
    selectedTile: PropTypes.object
};