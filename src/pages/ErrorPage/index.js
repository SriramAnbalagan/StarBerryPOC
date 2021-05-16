import React from "react";
import {errorContent, errorButton} from '../../constants';
import './error.scss';

export const ErrorPage = () => {
    console.log('ErrorPage');
    const handleClick = () => {
        window.location.pathname = '/dashboard';
    };

    return (
        <div className="section-wrapper">
            <div className="error-wrapper">
                <div className="error-content">
                    <h1 className="error-headline">
                        {errorContent}
                    </h1>
                </div>
                <div className="error-content">
                    <button
                        type="button"
                        className="btn btn-dark action-btn"
                        onClick={handleClick}
                    >
                        {errorButton}
            </button>
                </div>

            </div>
        </div>
    );
};

