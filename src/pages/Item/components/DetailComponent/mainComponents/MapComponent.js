import React from 'react';
import PropTypes from 'prop-types';
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGoogleMap from "react-google-map"

export const MapComponent = (props) => {

    const {selectedTile} = props;
    const {Latitude, Longitude} = selectedTile || '';
    
    return (
        <div className="map-wrapper">
            <ReactGoogleMapLoader
                render={googleMaps =>
                    googleMaps && (
                        <div style={{height: "100px"}}>
                            <ReactGoogleMap
                                googleMaps={googleMaps}
                                center={{lat: Latitude, lng: Longitude}}
                                zoom={8}
                                mapTypeId={'roadmap'}
                            />
                        </div>
                    )
                }
            />
        </div>
    )
}

MapComponent.propTypes = {
    selectedTile: PropTypes.object
};