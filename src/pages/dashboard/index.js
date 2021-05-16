import {connect} from 'react-redux';
import {
    getDashboardData,
    updatedSelectedProperty,
    updateCurrentRoute
} from '../../actions';
import {DashboardComponent} from './DashboardComponent';


const mapStateToProps = (state) => {
    const {dashboard, loading} = state;
    return ({
        dashboard,
        loading
    });
};

export const Dashboard = connect(mapStateToProps,
    {
        getDashboardData,
        updatedSelectedProperty,
        updateCurrentRoute

    })(DashboardComponent);
