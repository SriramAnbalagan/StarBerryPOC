import {
    UPDATE_CURRENT_ROUTE
} from '../constants';

export const updateCurrentRoute = (currentRoute) => async (dispatch) => {
    dispatch({
        type: UPDATE_CURRENT_ROUTE,
        currentRoute
    });
};