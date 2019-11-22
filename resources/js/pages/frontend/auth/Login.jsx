import React from 'react';
import AuthRequests from '../../../requests/backend/AuthRequests';
import AuthHelper from '../../../helpers/AuthHelperBackEnd';
import Route from '../../../constants/Route';

export const statusCode={
    OK: 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
};

class Login extends React.Component {
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

    onSubmit=event => {
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
        let {username,password}=this.state;
        return (
            <div>
                <div className="modal fade" id="login">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <form
                                    method="POST"
                                    onSubmit={
                                        this
                                            .onSubmit
                                    }
                                >
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-hidden="true"
                                    >
                                        &times;
                                                                                          </button>
                                    <legend>
                                        Login
                                                                                          </legend>
                                    <div className="form-group">
                                        <label>
                                            Username
                                                                                                    </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={
                                                username
                                            }
                                            name="username"
                                            placeholder="username"
                                            required
                                            onChange={
                                                this
                                                    .onChange
                                            }
                                        />
                                        <label>
                                            Password
                                                                                                    </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            value={
                                                password
                                            }
                                            name="password"
                                            placeholder="password"
                                            required
                                            onChange={
                                                this
                                                    .onChange
                                            }
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        data-dismiss="modal"
                                    >
                                        Close
                                                                                          </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Submit
                                                                                          </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
