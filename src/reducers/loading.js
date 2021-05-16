import {
    SHOW_SPINNER,
    HIDE_SPINNER
} from '../constants';

const initialState = {
   spinner: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SPINNER:
            return ({
                spinner: true
            });
        case HIDE_SPINNER:
            return ({
                spinner: false
            });
        default:
            return state;
    }
};