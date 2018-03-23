import * as React from 'react';

import './Dash.css';
import { connect } from 'react-redux';
import { IStoreState } from '../../StoreState';
import { IUser } from '../../formats/User.format';
import Mentor from './mentor/Mentor';

interface IProps {
    user: IUser;
}

interface IState {

}

class Dashboard extends React.Component<IProps, IState> {
    render() {
        return (
            <div>
                <div id="welcome-container">
                    <span className="section-title" >Welcome {this.props.user.name}!</span>
                </div>
                {/* <section id="maint">
                    <span>Dashboard is still being built - more features to come soon! :)</span>
                </section> */}
                <Mentor />
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
};

export default connect(mapStateToProps, mapActionsToProps)(Dashboard);