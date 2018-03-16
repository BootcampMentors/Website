import * as React from 'react';
import { isEmail } from 'validator';
import * as axios from 'axios';
import { routes } from '../../Routes';
import { IServerResponse } from '../../formats/ServerResponse';
import { IUser, User } from '../../formats/User.format';
import { IStoreState } from '../../StoreState';
import { setUser } from '../../actions/User';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { SHA256 } from 'crypto-js';
import { setToLoggedIn } from '../../actions/LoginLogout';

interface IState {
    email: string;
    password: string;
    emailError: string;
    validationError: string;
}

interface IProps extends RouteComponentProps<string> {
    user: IUser;
    isLoggedIn: boolean;
    onLoginUser: () => { type: string, isLoggedIn: boolean };
    onSetUser: (user: IUser) => { type: string, user: IUser };
}

class Login extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: '',
            validationError: ''
        };
    }

    handleInputChange = (event: React.FormEvent<HTMLInputElement>, stateType: string) => {
        const stateChanged = {};
        stateChanged[stateType] = event.currentTarget.value;
        this.setState(stateChanged);
    }

    handleLogin = () => {
        if (!isEmail(this.state.email)) {
            this.setState({ emailError: 'Email is invalid' });
        } else {
            const user = new User();
            user.email = this.state.email;
            user.password = SHA256(this.state.password).toString();
            axios.default.post(
                routes.user.post.login(),
                user
            ).then((response: axios.AxiosResponse<IServerResponse<IUser>>) => {
                this.props.onSetUser(response.data.output);
                this.props.onLoginUser();
                this.props.history.push('/dashboard');
            }).catch((err: axios.AxiosError) => {
                if (err.response && err.response.status === 403) {
                    this.setState({ validationError: 'Credentials invalid' });
                } else {
                    console.error(err.response);
                }
            });
        }
    }

    render() {
        return (
            <div>
                <div className="sign-up-container">
                    <div className="sign-up-form">
                        <h3>Log in</h3>
                        <div className="form-data-input">
                            <span>Email:</span>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={(event) => this.handleInputChange(event, 'email')}
                            />
                            <span className="text-danger">
                                {this.state.emailError}
                            </span>
                        </div>
                        <div className="form-data-input">
                            <span>Password:</span>
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={(event) => this.handleInputChange(event, 'password')}
                            />
                            <span className="text-danger">
                                {this.state.validationError}
                            </span>
                        </div>
                        <button
                            type="button"
                            className="btn btn-outline-success"
                            onClick={this.handleLogin}
                        >Log in
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IStoreState) => {
    return {
        user: state.user,
        isLoggedIn: state.loginLogout
    };
};

const mapActionsToProps = {
    onSetUser: setUser,
    onLoginUser: setToLoggedIn
};

export default connect(mapStateToProps, mapActionsToProps)(Login);