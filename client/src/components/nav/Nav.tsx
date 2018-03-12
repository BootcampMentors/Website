import * as React from 'react';

import './Nav.css';

export const getNav = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-data-white navbar-light">
            <a className="content-data-logo content-data-link" href="#">Bootcamp Mentors</a>
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
                <a href="#" className="content-data-link button-link">About us</a>
                <a href="#" className="content-data-link button-link">Sign up</a>
                <a href="#" className="content-data-link button-link">Login</a>
            </div>
        </nav>
    );
};