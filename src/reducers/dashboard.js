import {
    UPDATE_DASHBOARD_DATA,
    UPDATE_SELECTED_TILE
} from '../constants';

const initialState = {
    data: [],
    selectedTile: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DASHBOARD_DATA:
            return ({
                ...state,
                data: action.data
            });
        case UPDATE_SELECTED_TILE:
            return ({
                ...state,
                selectedTile: action.selectedTile
            });
        default:
            return state;
    }
};