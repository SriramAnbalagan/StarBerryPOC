import React from 'react';
import '../detail.scss';

export const PropertyIcon = () => {
    return (
        <>
            <div className="icon-wrapper">
                <i class="fa fa-share-alt" aria-hidden="true"></i> &nbsp;
                <i className="fa fa-heart-o" aria-hidden="true"></i>
            </div>
            <hr />
        </>
    );
}