import React from 'react';
import PropTypes from 'prop-types';
import {
    bed,
    sqm,
    contactUs,
    contactAgent 
} from '../../../../../constants';
import '../detail.scss';

export const PropertyHeader = (props) => {
    
    const {selectedTile} = props;
    const {
        Price,
        Bedrooms,
        Floor_Area,
        Building_Type,
        Area
    } = selectedTile || {};
    const {Name} = Area || '';

    return (
        <>
            <div className="property-header">
                <div className="header">
                    <div className="price item">
                        &euro;{Price}
                    </div>
                    <div className="beds item">
                        {`${Bedrooms} ${bed}`}
                    </div>
                    <div className="vertical-line item"></div>
                    <div className="size item">
                       {`${Floor_Area} ${sqm}`}
                    </div>
                </div>
                <div className="description">
                {`${Bedrooms} Bed ${Building_Type} for sale in the ${Name}`}
            </div>
                <div className="contact-us">
                    <i className="fa fa-home icon" aria-hidden="true"></i>
                {contactUs}
            </div>
                <button
                    type="button"
                    className="btn btn-dark btn-lg btn-block action-btn"
                >
                    {contactAgent.toUpperCase()}
            </button>
            </div>
        </>
    );
}

PropertyHeader.propTypes = {
    selectedTile: PropTypes.object
};