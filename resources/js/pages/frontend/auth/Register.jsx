import React from 'react'
import AuthRequests from '../../../requests/backend/AuthRequests';
import AuthHelper from '../../../helpers/AuthHelperBackEnd';
import Route from '../../../constants/Route';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            formData: {
                username: '',
                password: '',
            },
            meta: {
                message: '',
                errors: [],
            }
        };
    }

    OnChange=event => {
        let {formData}=this.state;
        formData={...formData,...{[event.target.name]: event.target.value}}
        this.setState({formData})
    }

    onSumbit=event => {
        event.preventDefault();
        AuthRequests.login(this.state.formData).then((response) => {
            if(response.meta.status===200) {
                AuthHelper.setToken(response.data);
                window.location.href=Route.backEnd.home.index.path;
            } else {
                const meta={
                    message: response.meta.message,
                    errors: Object.values(response.data)
                };
                this.setState({meta});
                AuthHelper.removeToken();
            }
        });
    };

    render() {
        return (
            <div>
                <div className="modal fade" id="signup">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <form method="POST" onSubmit={this.onSubmit}>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-hidden="true"
                                    >
                                        ×
                  </button>
                                    <legend>Register</legend>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="username"
                                            value={this.state.username}
                                            name="username"
                                            onChange={this.onChange}
                                            required
                                        />
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="password"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                            name="password"
                                            required
                                        />
                                        <label>Password confirm</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="password confirm"
                                            value={this.state.password_confirm}
                                            name="password_confirm"
                                            onChange={this.onChange}
                                            required
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        data-dismiss="modal"
                                    >
                                        Close
                  </button>
                                    <button type="submit" className="btn btn-primary">
                                        Submit
                  </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
