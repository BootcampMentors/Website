import * as React from 'react';

import './Nav.css';
import { NavLink } from 'react-router-dom';

export class Nav extends React.Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg fixed-top bg-data-white navbar-light">
                    <NavLink
                        to="/"
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
                        <NavLink
                            to="/about-us"
                            activeClassName="link-active"
                            className="content-data-link button-link"
                        >
                            About us
                        </NavLink>

                        <NavLink
                            to="/sign-up"
                            activeClassName="link-active"
                            className="content-data-link button-link"
                        >
                            Sign up
                        </NavLink>
                        <a href="#" className="content-data-link button-link">Login</a>
                    </div>
                </nav>
                <div className="pusher" />
            </div>
        );
    }
}