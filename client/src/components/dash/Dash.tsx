import * as React from 'react';

import './Dash.css';

interface IProps {

}

interface IState {

}

class Dashboard extends React.Component<IProps, IState> {
    render() {
        return (
            <div>
                <div id="welcome-container">
                    <span>Welcome!</span>
                </div>
                <section id="maint">
                    <span>Site still being build - more features to come! :)</span>
                </section>
            </div>
        );
    }
}

export default Dashboard;