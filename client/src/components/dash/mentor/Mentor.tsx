import * as React from 'react';
import * as axios from 'axios';
import './Mentor.css';
import { connect } from 'react-redux';
import { IStoreState } from '../../../StoreState';
import { IUser, User } from '../../../formats/User.format';
import { routes } from '../../../Routes';
import { IServerResponse } from '../../../formats/ServerResponse';
import { setUser } from '../../../actions/User';

interface IProps {
    user: IUser;
    onSetUser: (user: IUser) => { type: string, user: IUser };
}

interface IState {

}

class Mentor extends React.Component<IProps, IState> {

    setMentor = (isNowMentor: boolean) => {
        const user = new User();
        user.isMentor = isNowMentor;
        axios.default.put(routes.user.put.setmentor(), user)
            .then(
                (response: axios.AxiosResponse<IServerResponse<IUser>>) => {
                    if (response.data.success) {
                        this.props.onSetUser(response.data.output);
                    } else {
                        console.log(response);
                    }
                }
            )
            .catch((err) => console.log(err));
    }

    getNonMentorView = () => {
        return (
            <div>
                <button
                    className="btn btn-outline-success"
                    onClick={() => this.setMentor(true)}
                >
                    Become a mentor!
                </button>
            </div>
        );
    }

    getMentorView = () => {
        return (
            <div>
                <button
                    className="btn btn-outline-success"
                    onClick={() => this.setMentor(false)}
                >
                    Remove mentorship
                </button>
            </div>
        );
    }

    render() {
        let mentorPanel;
        if (this.props.user.isMentor) {
            mentorPanel = this.getMentorView();
        } else {
            mentorPanel = this.getNonMentorView();
        }
        return (
            <div className="mentor-container" >
                <span className="section-title">Mentor</span>
                {mentorPanel}
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
    onSetUser: setUser,
};

export default connect(mapStateToProps, mapActionsToProps)(Mentor);