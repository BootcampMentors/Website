import * as React from 'react';
import './FrontPage.css';

const getLogoHeader = () => {
    return (
        <div>
            <div className="index-title-bg">
                <div>
                    <div className="temp-image" />
                    <h1>Bootcamp Mentors</h1>
                    <h5 id="content-text">A community of peers learning together in software</h5>
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
                            Set yourself up for success with more resources available to you to help be your very best.
                        </h5></div>
                </div>
            </div>
        </div>
    );
};

const getFeatures = () => {
    return (
        <div className="index-feature">
            <h1>Join our community of doers and thinkers</h1>
            <h5>Talk to mentors that have hands-on experience with:</h5>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="feature container" >
                            <div className="col-4 feature-image">
                                <svg className="svg" viewBox="0 0 128 128">
                                    <path fill="#9B4F96" d="M115.4 30.7l-48.3-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z" />
                                    <path fill="#68217A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4v-55.7c0-.9-.1-1.9-.6-2.8l-106.6 62z" />
                                    <path fill="#fff" d="M85.3 76.1c-4.2 7.4-12.2 12.4-21.3 12.4-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1l1.2-6.2h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7h3.3zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z" />
                                </svg>
                            </div>
                            <div className="col-8 feature-text">
                                <h4>C#</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="feature container" >
                            <div className="col-4 feature-image">
                                <svg className="svg" viewBox="0 0 128 128">
                                    <path fill="#131313" d="M89.234 5.856h-7.384l7.679 8.333v3.967h-15.816v-4.645h7.678l-7.678-8.333v-3.971h15.521v4.649zm-18.657 0h-7.384l7.679 8.333v3.967h-15.817v-4.645h7.679l-7.679-8.333v-3.971h15.522v4.649zm-18.474.19h-7.968v7.271h7.968v4.839h-13.632v-16.949h13.632v4.839z" />
                                    <path fill="#1572B6" d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z" />
                                    <path fill="#33A9DC" d="M64.001 119.072l29.439-8.162 6.926-77.591h-36.365v85.753z" />
                                    <path fill="#fff" d="M64 66.22h14.738l1.019-11.405h-15.757v-11.138h27.929000000000002l-.267 2.988-2.737 30.692h-24.925v-11.137z" />
                                    <path fill="#EBEBEB" d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883h-11.178999999999998l1.561 17.488 22.814 6.333.052-.015v-11.587z" />
                                    <path fill="#fff" d="M77.792 76.886l-1.342 14.916-12.422 3.353v11.588l22.833-6.328.168-1.882 1.938-21.647h-11.175z" />
                                    <path fill="#EBEBEB" d="M64.039 43.677v11.136999999999999h-26.903000000000002l-.224-2.503-.507-5.646-.267-2.988h27.901zM64 66.221v11.138h-12.247l-.223-2.503-.508-5.647-.267-2.988h13.245z" />
                                </svg>
                            </div>
                            <div className="col-8 feature-text">
                                <h4>CSS</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="feature container" >
                            <div className="col-4 feature-image">
                                <svg className="svg" viewBox="0 0 128 128">
                                    <path fill="#E44D26" d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z" />
                                    <path fill="#F16529" d="M64 118.704l29.244-8.108 6.881-77.076h-36.125z" />
                                    <path fill="#EBEBEB" d="M64 66.978h-14.641l-1.01-11.331h15.651v-11.064h-27.743l.264 2.969 2.72 30.489h24.759zM64 95.711l-.049.013-12.321-3.328-.788-8.823h-11.107l1.55 17.372 22.664 6.292.051-.015z" />
                                    <path d="M28.034 1.627h5.622v5.556h5.144v-5.556h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623v-16.822zM51.816 7.206h-4.95v-5.579h15.525v5.579h-4.952v11.243h-5.623v-11.243zM64.855 1.627h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502v-16.822zM86.591 1.627h5.624v11.262h7.907v5.561h-13.531v-16.823z" />
                                    <path fill="#fff" d="M63.962 66.978v11.063h13.624l-1.284 14.349-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.27-2.97h-2.982zM63.962 44.583v11.064h26.725l.221-2.487.505-5.608.265-2.969z" />
                                </svg>
                            </div>
                            <div className="col-8 feature-text">
                                <h4>HTML</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="feature container" >
                            <div className="col-4 feature-image">
                                <svg className="svg" viewBox="0 0 128 128">
                                    <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z" />
                                    <path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z" />
                                    <path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z" />
                                    <path fill="#EA2D2E" d="M76.491 1.587s12.968 12.976-12.303 32.923c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815 8.548-12.834 32.229-19.059 26.998-39.667z" />
                                    <path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z" />
                                </svg>
                            </div>
                            <div className="col-8 feature-text">
                                <h4>Java</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="feature container" >
                            <div className="col-4 feature-image">
                                <svg className="svg" viewBox="0 0 128 128">
                                    <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z" />
                                    <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z" />
                                </svg>
                            </div>
                            <div className="col-8 feature-text">
                                <h4>JavaScript</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="feature container" >
                            <div className="col-4 feature-image">
                                <svg className="svg" viewBox="0 0 128 128">
                                    <path fill="#ffde57" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137h-33.961c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491v-11.282c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548v-23.513c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zm-13.354 7.569c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" />
                                    <path fill="#4584b6" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655h-24.665c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412h-24.664v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zm-13.873 59.547c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" />
                                </svg>
                            </div>
                            <div className="col-8 feature-text">
                                <h4>Python</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="feature container" >
                            <div className="col-4 feature-image">
                                <img src="https://image.flaticon.com/icons/svg/236/236835.svg" />
                            </div>
                            <div className="col-8 feature-text">
                                <h4>Job Search</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="feature container" >
                            <div className="col-4 feature-image">
                                <img src="https://image.flaticon.com/icons/svg/140/140808.svg" />
                            </div>
                            <div className="col-8 feature-text">
                                <h4>Portfolios</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="feature container" >
                            <div className="col-4 feature-image">
                                <img src="https://image.flaticon.com/icons/svg/344/344432.svg" />
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