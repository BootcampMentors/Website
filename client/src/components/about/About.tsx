import { Component } from 'react';
import * as React from 'react';

import './About.css';

export class AboutUs extends Component {

    render() {
        return (
            <div>
                <div className="about-banner">
                    <h1>About Us</h1>
                </div>
                <div className="container about-container">
                    <p>
                        Occaecat enim nostrud minim labore ex nisi laborum deserunt est.
                        Non mollit laboris ad mollit excepteur tempor laborum pariatur sint
                        tempor mollit. Fugiat ullamco velit nulla nulla do enim et quis sit magna
                        aliqua. Anim eu deserunt anim cillum cupidatat quis minim aute elit ipsum et magna.
                        Sunt ullamco enim anim id aliquip consequat dolor minim fugiat sint sint.
                        Occaecat enim nostrud minim labore ex nisi laborum deserunt est.
                        Non mollit laboris ad mollit excepteur tempor laborum pariatur sint
                        tempor mollit. Fugiat ullamco velit nulla nulla do enim et quis sit magna
                    </p>
                </div>
                <div className="about-panel-container">
                    <div className="container">
                        <h1>Our Team</h1>
                        <div className="row">
                            <div className="col-12 col-md-4 info-item">
                                <div className="person-1" />
                                <h3 className="title-data">
                                    Emil Choparinov 
                                </h3>
                                <h5 className="about-data">
                                    Nulla fugiat occaecat mollit reprehenderit
                                    eu nisi veniam dolor et in mollit laborum proident.
                                </h5>
                            </div>
                            <div className="col-12 col-md-4 info-item">
                                <div className="person-1" />
                                <h3 className="title-data">
                                    Learn
                                </h3>
                                <h5 className="desc-data">
                                    Nulla fugiat occaecat mollit reprehenderit
                                    eu nisi veniam dolor et in mollit laborum proident.
                        </h5></div>
                            <div className="col-12 col-md-4 info-item">
                                <div className="person-1" />
                                <h3 className="title-data">
                                    Learn
                                </h3>
                                <h5 className="desc-data">
                                    Nulla fugiat occaecat mollit reprehenderit
                                    eu nisi veniam dolor et in mollit laborum proident.
                        </h5></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}