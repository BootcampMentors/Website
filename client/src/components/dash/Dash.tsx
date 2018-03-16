import * as React from 'react';

import './Dash.css';
import { connect } from 'react-redux';
import { IStoreState } from '../../StoreState';
import { IUser } from '../../formats/User.format';

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
                    <span>Welcome {this.props.user.name}!</span>
                </div>
                <section id="maint">
                    <span>Site still being build - more features to come! :)</span>
                </section>
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