import * as React from 'react';

import './Nav.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser, removeUser } from '../../actions/User';
import { IStoreState } from '../../StoreState';
import * as axios from 'axios';
import { IUser } from '../../formats/User.format';
import { IServerResponse } from '../../formats/ServerResponse';
import { routes } from '../../Routes';
import { RouteComponentProps } from 'react-router';
import { setToLoggedOut, setToLoggedIn } from '../../actions/LoginLogout';

interface IProps extends RouteComponentProps<string> {
    setAsLoggedIn: () => void;
    user: IUser;
    onSetUser: (user: IUser) => { type: string, user: IUser };
    onRemoveUser: () => { type: string, user: IUser };
    isLoggedIn: boolean;
    onLoginUser: () => { type: string, isLoggedIn: boolean };
    onLogoutUser: () => { type: string, isLoggedIn: boolean };
}

interface IState {
    loggedOutRoutes: Array<IRouteType>;
    loggedInRoutes: Array<IRouteType>;
}

interface IRouteType {
    to: string;
    title: string;
}

class Nav extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            loggedOutRoutes: [
                {
                    to: '/about-us',
                    title: 'About us'
                },
                {
                    to: '/sign-up',
                    title: 'Sign up'
                },
                {
                    to: '/login',
                    title: 'Login'
                }
            ],
            loggedInRoutes: [
                {
                    to: '/about-us',
                    title: 'About us',
                },
                {
                    to: '/',
                    title: 'Logout'
                }
            ]
        };
    }

    async componentWillMount() {
        const response: axios.AxiosResponse<IServerResponse<IUser>> | void = await axios.default.get(routes.user.get.getsession())
            .catch((err: axios.AxiosError) => {
                return;
            });
        if (response && response.data.success) {
            this.props.onSetUser(response.data.output);
            this.props.onLoginUser();
            this.props.history.push('/dashboard');
        } else {
            this.props.history.push('/');
        }
    }

    handleLogout = () => {
        this.props.onRemoveUser();
        this.props.onLogoutUser();
        axios.default.get(routes.user.get.logout())
            .catch(() => { return; });
        this.props.history.push('/');
        this.attemptRemoveBar();
    }

    attemptRemoveBar = () => {
        const sandwich = document.getElementById('sandwich-button');
        if (sandwich && window.innerWidth <= 991) {
            sandwich.click();
        }
    }

    render() {
        let links, logoClick;
        if (this.props.isLoggedIn) {
            logoClick = '/dashboard';
            links = this.state.loggedInRoutes.map((route) => {
                return this._findCorrectNavItem(route);
            });
        } else {
            logoClick = '/';
            links = this.state.loggedOutRoutes.map((route) => {
                return (
                    <NavLink
                        to={route.to}
                        activeClassName="link-active"
                        className="content-data-link button-link"
                        key={route.to}
                        onClick={this.attemptRemoveBar}
                    >
                        {route.title}
                    </NavLink>
                );
            });
        }
        return (
            <div>
                <nav className="navbar navbar-expand-lg fixed-top bg-data-white navbar-light">
                    <NavLink
                        to={logoClick}
                        className="content-data-logo content-data-link"
                        onClick={this.attemptRemoveBar}
                    >
                        Bootcamp Mentors
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        id="sandwich-button"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse data-right" id="navbarSupportedContent">
                        {links}
                    </div>
                </nav>
                <div className="pusher" />
            </div>
        );
    }

    private _findCorrectNavItem = (route: IRouteType) => {
        if (route.title === 'Logout') {
            return (
                <NavLink
                    to={route.to}
                    className="content-data-link button-link"
                    key={route.to}
                    onClick={this.handleLogout}
                >
                    {route.title}
                </NavLink>
            );
        } else {
            return (
                <NavLink
                    to={route.to}
                    className="content-data-link button-link"
                    key={route.to}
                    onClick={this.attemptRemoveBar}
                >
                    {route.title}
                </NavLink>
            );
        }
    }
}

const mapStateToProps = (state: IStoreState) => {
    return {
        user: state.user,
        isLoggedIn: state.loginLogout
    };
};

const mapActionsToProps = {
    onSetUser: setUser,
    onRemoveUser: removeUser,
    onLoginUser: setToLoggedIn,
    onLogoutUser: setToLoggedOut,
};

export default connect(mapStateToProps, mapActionsToProps)(Nav);