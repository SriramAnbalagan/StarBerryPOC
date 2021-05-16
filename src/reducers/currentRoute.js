import {
    UPDATE_CURRENT_ROUTE
} from '../constants';

const initialState = {
    currentRoute: '/'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_ROUTE:
            return ({
                currentRoute: action.currentRoute
            });
        default:
            return state;
    }
};