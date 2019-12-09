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
        AuthRequests.register(this.state.formData).then((response) => {
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
            <div className="modal fade" id="signup">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form className="form-signin" onSubmit={this.submitForm}>
                                <div className="text-center mb-4">
                                    <img className="mb-4" src="http://lophoctiengnhat.edu.vn/images/2016/04/01/0-cach-phat-am-am-g-tieng-nhat.png"
                                        alt="" width="150" height="150" />
                                    <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                                </div>

                                {this.state.meta.errors.length>0&&(
                                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                        {this.state.meta.errors.map((item,index) => {
                                            console.log(item)
                                            return (
                                                <li key={index}>{item}</li>
                                            );
                                        })}
                                    </div>
                                )}

                                <div className="form-label-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" id="username" className="form-control" name="username"
                                        placeholder="Username" required onChange={this.handleOnChange} />
                                </div>

                                <div className="form-label-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" className="form-control" name="password"
                                        placeholder="Password" required onChange={this.handleOnChange} />
                                </div>

                                <div className="form-label-group">
                                    <label htmlFor="password">Password Confirm</label>
                                    <input type="password" id="password_confirm" className="form-control" name="password_confirm"
                                        placeholder="Password" required onChange={this.handleOnChange} />
                                </div>
                                <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
