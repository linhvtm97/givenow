import React,{Component} from 'react';
import AuthRequests from '../../../requests/backend/AuthRequests';
import AuthHelper from '../../../helpers/AuthHelperBackEnd';
import Route from '../../../constants/Route';

export default class extends Component {
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

    handleOnChange=event => {
        let {formData}=this.state;
        formData={...formData,...{[event.target.name]: event.target.value}}
        this.setState({formData})
    }

    submitForm=event => {
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
    }

    render() {
        return (
            <form className="form-signin" onSubmit={this.submitForm}>
                <div className="text-center mb-4">
                    <img className="mb-4" src="http://lophoctiengnhat.edu.vn/images/2016/04/01/0-cach-phat-am-am-g-tieng-nhat.png"
                        alt="" width="150" height="150" />
                    <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
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
                    <input type="text" id="username" className="form-control" name="username"
                        placeholder="Username" required onChange={this.handleOnChange} />
                    <label htmlFor="username">Username</label>
                </div>

                <div className="form-label-group">
                    <input type="password" id="password" className="form-control" name="password"
                        placeholder="Password" required onChange={this.handleOnChange} />
                    <label htmlFor="password">Password</label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted text-center">© 2019-2020</p>
            </form>
        );
    }
}
