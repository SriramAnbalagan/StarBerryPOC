import React from "react";
import {connect} from 'react-redux';
import {heritage, dashboard} from '../../constants';
import './header.scss';

const HeaderComponent = (props) => {
    const {route} = props;
    const {currentRoute} = route;
    const isDashboard = currentRoute === '/' || currentRoute === '/dashboard';
    return (
        <div>
            <nav className="fixed-header">
                <div className="site-title visible-title">
                    <i className="fa fa-home home-icon" aria-hidden="true"></i>
                    <a href="/dashboard">
                        {heritage}
                    </a>
                </div>
                <ul>
                    {
                        !isDashboard && 
                        <li>
                            <a href="/dashboard">
                                {dashboard}
                            </a>
                        </li>
                    }
                    <li>
                        <a href="#">
                            <i className="fa fa-cog icon" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-sign-out icon" />
                        </a>
                    </li>
                </ul>
                <div>
                </div>
            </nav>
        </div>

    );
};


const mapStateToProps = (state) => {
    const {route} = state;
    return ({
        route
    });
};


export const Header = connect(mapStateToProps,{})(HeaderComponent);


