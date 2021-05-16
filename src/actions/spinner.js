import {
    SHOW_SPINNER,
    HIDE_SPINNER
} from '../constants';

export const showSpinner = () => async (dispatch) => {
    dispatch({
        type: SHOW_SPINNER
    });
};

export const hideSpinner = () => async (dispatch) => {
    dispatch({
        type: HIDE_SPINNER
    });
};