import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Spinner} from '../../components'
import {getBuidlingName} from '../../utils';
import {Assests} from '../../assests';
import {dashboardTitle} from '../../constants';
import './dashboard.scss';

export const DashboardComponent = (props) => {

    useEffect(() => {
        const {
            history: { location },
          } = props;
          console.log('location',location);
        props.getDashboardData();
        props.updateCurrentRoute(location.pathname);
    }, []);

    const {dashboard, loading} = props;
    const {data} = dashboard || [];
    const {spinner} = loading;
    const {notFoundImg} = Assests;

    const showTiles = (data, selectedItem, history) => {
        history.push('/item')
        const selectedTile = data.find((item) => item._id === selectedItem);
        props.updatedSelectedProperty(selectedTile)
    }

    const filterMenu = [
        {
            label: 'All Bedrooms',
            value: 'bedrooms'
        },
        {
            label: 'Any Neighbourhood',
            value: 'neighbourhood'
        },
        {
            label: 'Max Price',
            value: 'maxPrice'
        },
        {
            label: 'Min Price',
            value: 'minPrice'
        },
        {
            label: 'Sort by',
            value: 'sort'
        }
    ]


    if (spinner) {
        return (
            <div className="section-wrapper">
                <div className="spinner-container">
                    <Spinner />
                </div>
            </div>
        )
    }
    return (
        <div className="section-wrapper">
            <h1 className="header">{dashboardTitle}</h1>
            <div className="filter">
                <hr />
                <div className="filter-wrapper">
                    {
                        filterMenu.map((filterItem) => {
                            return (
                                <div className="filter-item btn-group">
                                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {filterItem.label}
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
                <hr />
            </div>
            <div className="dashboard-wrapper">
                {
                    data && data.map((item) => {
                        const {_id, Area, Bedrooms, Building_Type, Price, Images} = item;
                        const {Name} = Area;
                        const imgUrl = Images[0] ? Images[0].url : notFoundImg;
                        return (
                            <div className="item">
                                <div className="tile-wrapper">
                                    <div className="card" onClick={() => showTiles(data, _id, props.history)}>
                                        <img className="card-img-top" src={imgUrl} alt="Card image cap" />
                                        <i className="fa fa-heart-o circle-icon" aria-hidden="true"></i>
                                        <div className="card-body">
                                            <p className="card-text title">{Name}</p>
                                            <p className="card-text content">{getBuidlingName(Bedrooms, Building_Type)}</p>
                                            <p className="card-text price">{Price} &euro;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

DashboardComponent.propTypes = {
    dashboard: PropTypes.object,
    loading: PropTypes.bool
};