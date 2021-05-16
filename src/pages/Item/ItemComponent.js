import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {DetailComponent} from './components/DetailComponent/index';
import {ImageComponent} from './components/ImageComponents/index';
import {ErrorPage} from '../ErrorPage';
import './item.scss';

export const ItemComponent = (props) => {

    useEffect(() => {
        const {
            history: {location},
        } = props;
        props.updateCurrentRoute(location.pathname);
    }, []);

    const {dashboard, history} = props;
    const {selectedTile} = dashboard;
    const {location} = history || {};
    const {pathname} = location;

    if (selectedTile !== null && pathname === '/item') {
        return (
            <div className="section-wrapper">
                <div className="item-wrapper">
                    <div className="row">
                        <div className="col-7 item-column">
                            <ImageComponent
                                selectedTile={selectedTile}
                            />
                        </div>
                        <div className="col-5 item-column">
                            <DetailComponent
                                selectedTile={selectedTile}
                            />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
    return (
        <ErrorPage />
    )

}

ItemComponent.propTypes = {
    dashboard: PropTypes.object,
    history: PropTypes.object
};