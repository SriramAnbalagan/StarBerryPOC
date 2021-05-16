import React from 'react';
import PropTypes from 'prop-types';
import {
    facts,
    neighbourhood,
    price,
    broucher,
    downlaodBroucher,
    floorPlan,
    viewFloorPlan
} from '../../../../../constants';
import '../detail.scss';

export const PropertyContent = (props) => {

    const {selectedTile} = props;

    const {
        Area,
        Price_Per_Sqm,
        Description
    } = selectedTile || {};
    const {Name} = Area || '';

    return (
        <>
            <div className="property-content">
                <div className="content-header">
                    {facts}
                </div>
                <hr />
                <div className="property-details">
                    <div className="row">
                        <div className="col-6 column-header">
                            {neighbourhood}
                        </div>
                        <div className="col-6 column-value addon">
                            {Name}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 column-header">
                            {price}
                        </div>
                        <div className="col-6 column-value">
                            &euro;{Price_Per_Sqm}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 column-header">
                            {broucher}
                        </div>
                        <div className="col-6 column-value addon">
                            {downlaodBroucher}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 column-header">
                            {floorPlan}
                        </div>
                        <div className="col-6 column-value addon">
                            {viewFloorPlan}
                        </div>
                        <div className="property-description">
                            {Description}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

PropertyContent.propTypes = {
    selectedTile: PropTypes.object
};