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
                <div className="container-c about-container">
                    <h1>Who we are</h1>
                    <p className="about-paragraph">
                        We are a team of pro bono software developers and industry professionals working to
                        bridge the gap between students and graduates of coding bootcamps.

                        Bootcampers are driven, determined individuals and we wanted to pair them
                        up with mentors to match.
                    </p>
                    <p className="about-paragraph">
                        As alumni of <a href="https://codingdojo.com">Coding Dojo</a> ourselves,
                        our mission is to reach back out to students in order to grow the community
                        between peers sharing the same goal — learning new technologies and improving our skillsets.
                        Mentors and students alike, we never stop learning.
                    </p>
                    <p className="about-paragraph">
                        Our vision is to connect like-minded individuals with qualified mentors who
                        enjoy helping and want to see others succeed. Bootcamp Mentors can help
                        you accomplish your goals, no matter where you are in your coding journey!
                    </p>
                </div>
                <div className="about-panel-container">
                    <div className="container">
                        <h1>Our Team</h1>
                        <div className="row">
                            <div className="col-12 col-md-4 info-item">
                                <div className="person-1" />
                                <h3 className="title-data">
                                    Brian Kang
                                </h3>
                                <h5 className="desc-data">
                                    Founder / Developer
                                </h5>
                            </div>
                            <div className="col-12 col-md-4 info-item">
                                <div className="person-2" />
                                <h3 className="title-data">
                                    Emil Choparinov
                                </h3>
                                <h5 className="about-data">
                                    Developer
                                </h5>
                            </div>
                            <div className="col-12 col-md-4 info-item">
                                <div className="person-3" />
                                <h3 className="title-data">
                                    Bill Fungi
                                </h3>
                                <h5 className="desc-data">
                                    Community Manager
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}