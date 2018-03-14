import { Component } from 'react';
import * as React from 'react';

import './SignUp.css';

export class SignUp extends Component {
    render() {
        return (
            <div>
                <div className="sign-up-container">
                    <div className="sign-up-form">
                        <h3>Sign Up</h3>
                        <div className="form-data-input">
                            <span>Name:</span>
                            <input className="form-control" type="text" placeholder="Name" />
                        </div>
                        <div className="form-data-input">
                            <span>Email:</span>
                            <input className="form-control" type="text" placeholder="Email" />
                        </div>
                        <div className="form-data-input">
                            <span>Password:</span>
                            <input className="form-control" type="text" placeholder="Password" />
                        </div>
                        <div className="form-data-input">
                            <span>Camp:</span>
                            <select className="form-control">
                                <option value="" disabled={true} selected={true}>Select a camp</option>
                                <option>camp 1</option>
                                <option>camp 2</option>
                                <option>camp 3</option>
                            </select>
                        </div>
                        <button type="button" className="btn btn-outline-success">Sign Up</button>
                    </div>
                </div>
            </div>
        );
    }
}