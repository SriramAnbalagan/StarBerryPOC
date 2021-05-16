import {
    UPDATE_DASHBOARD_DATA,
    UPDATE_SELECTED_TILE
} from '../constants';

import {
    showSpinner,
    hideSpinner
} from './spinner';

import {getPropertyData} from '../api';

export const getDashboardData = () => async (dispatch) => {
    dispatch(showSpinner());
    try {
        const data = await getPropertyData();
        dispatch({
            type: UPDATE_DASHBOARD_DATA,
            data
        });
        dispatch(hideSpinner());
    } catch (error) {
        dispatch(hideSpinner());
        dispatch({
            type: UPDATE_DASHBOARD_DATA,
            data: []
        });
    }
};

export const updatedSelectedProperty = (selectedTile) => async (dispatch) => {
    dispatch({
        type: UPDATE_SELECTED_TILE,
        selectedTile
    });
};