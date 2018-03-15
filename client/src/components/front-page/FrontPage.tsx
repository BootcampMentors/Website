import * as React from 'react';
import './FrontPage.css';

const getLogoHeader = () => {
    return (
        <div>
            <div className="index-title-bg">
                <div>
                    <div className="temp-image" />
                    <h5 id="content-text">A community of peers working together in software.</h5>
                </div>
            </div>
            <div className="index-subimage-bg">
                <div className="desk-dash" />
            </div>
        </div>
    );
};

const getSignUpBanner = () => {
    return (
        <div className="banner-container">
            <div>
                <h4>Sign up to get your mentor today!</h4>
                <button className="btn btn-lg btn-block btn-sign-up-index">Sign up now!</button>
            </div>
        </div>
    );
};

const getInfoPanels = () => {
    return (
        <div className="info-panel-container">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 info-item">
                        <div className="disp-1" />
                        <h3 className="title-data red-font">
                            Learn
                        </h3>
                        <h5 className="desc-data">
                            Learn from peer mentors the best ways to 
                            become a successful developer in today's industry.
                        </h5>
                    </div>
                    <div className="col-12 col-md-4 info-item">
                        <div className="disp-2" />
                        <h3 className="title-data red-font">
                            Connect
                        </h3>
                        <h5 className="desc-data">
                            Connect with people who were just in your shoes, eager to help and still hungry to learn.
                        </h5></div>
                    <div className="col-12 col-md-4 info-item">
                        <div className="disp-3" />
                        <h3 className="title-data red-font">
                            Celebrate success
                        </h3>
                        <h5 className="desc-data">
                            Set your self up for success with more resources available to you to help be your very best.
                        </h5></div>
                </div>
            </div>
        </div>
    );
};

const getFeatures = () => {
    return (
        <div className="index-feature">
            <h1>Network with other doers and thinkers</h1>
            <h5>Talk to mentors that have hands-on experience with:</h5>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="feature container" >
                            <div className="col-4 feature-image">
                                <img src="https://noobhub-media.s3.amazonaws.com/category_images/C.png" />
                            </div>
                            <div className="col-8 feature-text">
                                <h4>C#</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="feature container" >
                            <div className="col-4 feature-image">
                                <img src="https://noobhub-media.s3.amazonaws.com/category_images/C.png" />
                            </div>
                            <div className="col-8 feature-text">
                                <h4>CSS</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="feature container" >
                            <div className="col-4 feature-image">
                                <img src="https://noobhub-media.s3.amazonaws.com/category_images/C.png" />
                            </div>
                            <div className="col-8 feature-text">
                                <h4>HTML</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="feature container" >
                            <div className="col-4 feature-image">
                                <img src="https://noobhub-media.s3.amazonaws.com/category_images/C.png" />
                            </div>
                            <div className="col-8 feature-text">
                                <h4>Java</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="feature container" >
                            <div className="col-4 feature-image">
                                <img src="https://noobhub-media.s3.amazonaws.com/category_images/C.png" />
                            </div>
                            <div className="col-8 feature-text">
                                <h4>JavaScript</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="feature container" >
                            <div className="col-4 feature-image">
                                <img src="https://noobhub-media.s3.amazonaws.com/category_images/C.png" />
                            </div>
                            <div className="col-8 feature-text">
                                <h4>Python</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="feature container" >
                            <div className="col-4 feature-image">
                                <img src="https://noobhub-media.s3.amazonaws.com/category_images/C.png" />
                            </div>
                            <div className="col-8 feature-text">
                                <h4>Job Search</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="feature container" >
                            <div className="col-4 feature-image">
                                <img src="https://noobhub-media.s3.amazonaws.com/category_images/C.png" />
                            </div>
                            <div className="col-8 feature-text">
                                <h4>Portfolios</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="feature container" >
                            <div className="col-4 feature-image">
                                <img src="https://noobhub-media.s3.amazonaws.com/category_images/C.png" />
                            </div>
                            <div className="col-8 feature-text">
                                <h4>Interviews</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getFrontPage = () => {
    const header = getLogoHeader();
    const panels = getInfoPanels();
    const signUp = getSignUpBanner();
    const features = getFeatures();
    return (
        <div>
            {header}
            {panels}
            {signUp}
            {features}
        </div>
    );
};

export class FrontPage extends React.Component {
    render() {
        const frontPage = getFrontPage();
        return (
            <div>
                {frontPage}
            </div>
        );
    }
}