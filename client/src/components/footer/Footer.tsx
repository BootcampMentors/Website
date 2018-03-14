import { Component } from 'react';
import * as React from 'react';

import './Footer.css';

const getFooter = () => {
    return (
        <div className="index-footer">
            <div>
                <span>© 2018 Bootcamp Mentors</span>
                <span>Icons by Flaticon</span>
            </div>
        </div>
    );
};

export class Footer extends Component {
    render() {
        return (
            <div>
                {getFooter()}
            </div>
        );
    }
}