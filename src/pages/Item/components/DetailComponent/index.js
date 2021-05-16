import React from 'react';
import {
    PropertyIcon,
    PropertyHeader,
    PropertyContent,
    PropertyContact,
    MapComponent
} from './mainComponents';
import './detail.scss';

export const DetailComponent = (props) => {
    const {selectedTile} = props;
    return (
        <div className="detail-wrapper">
            <PropertyIcon />

            <PropertyHeader
                selectedTile={selectedTile}
            />

            <PropertyContent
                selectedTile={selectedTile}
            />

            <PropertyContact
                selectedTile={selectedTile}
            />

            <MapComponent
                selectedTile={selectedTile}
            />
        </div>
    );
};