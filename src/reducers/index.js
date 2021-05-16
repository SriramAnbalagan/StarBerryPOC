/* eslint-disable import/max-dependencies */
import {combineReducers} from 'redux';
import dashboardReducer from './dashboard';
import routeReducer from './currentRoute';
import loadingReducer from './loading';

export default combineReducers({
    route: routeReducer,
    dashboard: dashboardReducer,
    loading: loadingReducer
});
