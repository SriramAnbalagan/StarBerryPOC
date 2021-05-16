import React from 'react';
import PropTypes from 'prop-types';
import '../detail.scss';

export const PropertyContact = (props) => {

    const {selectedTile} = props;
    const {Negotiator} = selectedTile || {};
    const {
        Image,
        Name,
        Designation,
        Phone,
        Email
    } = Negotiator || '';

    const ImageURL = Image ? Image.url : '';

    return (
        <>
            <div className="property-contact row">
                <img className="col-2 contact-photo" src={ImageURL} alt="Broker Photo" />
                <div className="contact-details col-8">
                    <div className="contact-name">
                        {Name}
                    </div>
                    <div className="contact-type">
                        {Designation}
                    </div>
                    <div className="contact-wrapper row">
                        <div className="contact-no col-3">
                            {`+${Phone}`}
                        </div>
                        <div className="vertical-line"></div>
                        <div className="contact-mail col-4">
                            {Email}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

PropertyContact.propTypes = {
    selectedTile: PropTypes.object
};