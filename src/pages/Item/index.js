import {connect} from 'react-redux';
import {updateCurrentRoute} from '../../actions';
import {ItemComponent} from './ItemComponent';


const mapStateToProps = (state) => {
    const {dashboard, loading} = state;
    return ({
        dashboard,
        loading
    });
};

export const Item = connect(mapStateToProps,
    {
        updateCurrentRoute
    })(ItemComponent);
