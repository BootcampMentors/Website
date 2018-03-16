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

interface IProps extends RouteComponentProps<string> {
    user: IUser;
    onSetUser: (user: IUser) => { type: string, user: IUser };
    onRemoveUser: () => { type: string, user: IUser };
}

interface IState {
    isLoggedIn: boolean;
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
            isLoggedIn: false,
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
            ]
        };
    }

    async componentWillMount() {
        const response: axios.AxiosResponse<IServerResponse<IUser>> | void = await axios.default.get(routes.user.get.getsession())
            .catch((err) => console.log());
        if (response && response.data.success) {
            this.props.onSetUser(response.data.output);
            this.setState({ isLoggedIn: true });
            this.props.history.push('/dashboard');
        } else {
            this.props.history.push('/');
        }
    }

    handleLogout = () => {
        this.props.onRemoveUser();
        this.setState({ isLoggedIn: false });
        axios.default.get(routes.user.get.logout())
            .catch((err) => console.log());
        this.props.history.push('/');
    }

    render() {
        let logout, links, logoClick;
        if (this.state.isLoggedIn) {
            logoClick = '/dashboard';
            logout = (
                <a
                    className="content-data-link button-link clickable link-active"
                    onClick={this.handleLogout}
                >
                    Logout
                </a>
            );

            links = this.state.loggedInRoutes.map((route) => {
                return (
                    <NavLink
                        to={route.to}
                        activeClassName="link-active"
                        className="content-data-link button-link"
                        key={route.to}
                    >
                        {route.title}
                    </NavLink>
                );
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
                    >
                        Bootcamp Mentors
                    </NavLink>
                    <button
                        className="navbar-toggler"
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
                        {logout}
                    </div>
                </nav>
                <div className="pusher" />
            </div>
        );
    }
}

const mapStateToProps = (state: IStoreState) => {
    return {
        user: state.user,
    };
};

const mapActionsToProps = {
    onSetUser: setUser,
    onRemoveUser: removeUser
};

export default connect(mapStateToProps, mapActionsToProps)(Nav);