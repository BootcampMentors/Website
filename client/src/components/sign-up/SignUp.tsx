import { Component } from 'react';
import * as React from 'react';

import './SignUp.css';
import { RouteComponentProps } from 'react-router';

import { IValidationError } from '../../formats/ValidationError.format';
import { validateUser } from '../../utils/ValidateUser';
import { User, IUser } from '../../formats/User.format';
import { IStoreState } from '../../StoreState';
import { connect } from 'react-redux';
import { setUser } from '../../actions/User';
import * as axios from 'axios';
import { SHA256 } from 'crypto-js';
import { routes } from '../../Routes';
import { IServerResponse } from '../../formats/ServerResponse';
import { setCamps } from '../../actions/Camp';
import { ICamp } from '../../formats/Camp.format';

interface IProps extends RouteComponentProps<string> {
    user: IUser;
    camps: Array<ICamp>;
    onSetCamp: (camps: Array<ICamp>) => { type: string, camps: Array<ICamp> };
    onSetUser: (user: IUser) => { type: string, user: IUser };
}

interface IState {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    camp: string;
    errors: IErrors;
}

interface IErrors {
    name: IValidationError | null;
    email: IValidationError | null;
    password: IValidationError | null;
    camp: IValidationError | null;
}

class SignUp extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            camp: '',
            errors: {
                name: null,
                email: null,
                password: null,
                camp: null
            }
        };
    }

    handleInputChange = (event: React.FormEvent<HTMLInputElement>, stateType: string) => {
        const stateChanged = {};
        stateChanged[stateType] = event.currentTarget.value;
        this.setState(stateChanged);
    }

    handelSelectChange = (event: React.FormEvent<HTMLSelectElement>) => {
        this.setState({ camp: event.currentTarget.value });
    }

    async componentWillMount() {
        if (this.props.camps.length === 0) {
            const response: axios.AxiosResponse<IServerResponse<Array<ICamp>>> | void = await axios.default.get(routes.camp.get.camps())
                .catch((err: axios.AxiosError) => console.error(err.response));
            if (response) {
                this.props.onSetCamp(response.data.output);
            }
        }
    }

    handleSignUp = () => {
        const user = new User();
        for (let value in this.state) {
            user[value] = this.state[value];
        }
        const validErrors = validateUser(user);
        if (validErrors.length > 0) {
            const firstValidErrors = this._getFirstValidationErrors(validErrors);
            this.setState({ errors: firstValidErrors });
        } else {
            this._prepareForSignUp(user);
            axios.default.post(
                routes.user.post.user(),
                user
            ).then((response: axios.AxiosResponse<IServerResponse<IUser>>) => {
                if (!response.data.success) {
                    console.error(response.data);
                } else {
                    this.props.onSetUser(response.data.output);
                }
            }).catch((err: axios.AxiosError) => console.error(err.response));
            this.props.history.push('/dashboard');
        }
    }

    getErrorType = (errorType: string) => {
        if (this.state.errors[errorType]) {
            return this.state.errors[errorType].message;
        }
        return '';
    }

    render() {
        const camps = this.props.camps.map((camp) => {
            return (
                <option value={camp._id} key={camp._id}>{camp.name}</option>
            );
        });
        return (
            <div>
                <div className="sign-up-container">
                    <div className="sign-up-form">
                        <h3>Sign Up</h3>
                        <div className="form-data-input">
                            <span>Name:</span>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={(event) => this.handleInputChange(event, 'name')}
                            />
                            <span className="text-danger">
                                {this.getErrorType('name')}
                            </span>
                        </div>
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
                                {this.getErrorType('email')}
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
                                {this.getErrorType('password')}
                            </span>
                        </div>
                        <div className="form-data-input">
                            <span>Confirm Password:</span>
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Password"
                                value={this.state.confirmPassword}
                                onChange={(event) => this.handleInputChange(event, 'confirmPassword')}
                            />
                        </div>
                        <div className="form-data-input">
                            <span>Bootcamp:</span>
                            <select
                                className="form-control"
                                value={this.state.camp}
                                onChange={(event) => this.handelSelectChange(event)}
                            >
                                <option value="" disabled={true} hidden={true} >Select a bootcamp</option>
                                {camps}
                            </select>
                            <span className="text-danger">
                                {this.getErrorType('camp')}
                            </span>
                        </div>
                        <button
                            type="button"
                            className="btn btn-outline-success"
                            onClick={this.handleSignUp}
                        >Sign Up
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    private _getFirstValidationErrors = (validationErrors: Array<IValidationError>): IErrors => {
        const firstErrors: IErrors = {
            name: null,
            email: null,
            password: null,
            camp: null
        };
        const set = new Set();
        validationErrors.forEach((error) => {
            if (!set.has(error.errorType)) {
                set.add(error.errorType);
                firstErrors[error.errorType] = error;
            }
        });
        return firstErrors;
    }

    private _prepareForSignUp = (user: IUser) => {
        // DONT WORRY IM DOING THIS IN THE BACKEND TOO RELAX
        user.confirmPassword = '';
        user.password = SHA256(user.password).toString();
        user.email = user.email.toLocaleLowerCase();
    }
}

const mapStateToProps = (state: IStoreState) => {
    return {
        user: state.user,
        camps: state.camps
    };
};

const mapActionsToProps = {
    onSetUser: setUser,
    onSetCamp: setCamps
};

export default connect(mapStateToProps, mapActionsToProps)(SignUp);