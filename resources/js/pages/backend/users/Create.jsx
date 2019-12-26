import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RouteConst from '../../../constants/Route';
import UsersRequests from '../../../requests/backend/UsersRequests';
import RoleHelper from '../../../helpers/RoleHelper';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: '',
                email: '',
                address: '',
                phone_number: '',
                role: '0',
                username: '',
                password: '',
                password_confirm: '',
                description: '',
            },
            formData: new FormData(),
            messageError: '',
        };
    }

    handleOnChange = event => {
        let { form } = this.state;
        form = { ...form, ...{ [event.target.name]: event.target.value}}
        this.setState({ form })
    }

    onChangeFile = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let fileTmp = e.target.files[0];

        if (fileTmp) {
            reader.readAsDataURL(fileTmp);

            reader.onloadend = () => {
                let formData = new FormData();
                formData.append('image', fileTmp);
                this.setState({ formData })
            };
        }
    };

    submitForm = event => {
        event.preventDefault();
        let { formData, form } = this.state;
        formData.append('name', form.name);
        formData.append('username', form.username);
        formData.append('role', form.role);
        formData.append('password', form.password);
        formData.append('address', form.address);
        formData.append('phone_number', form.phone_number);
        formData.append('password_confirm', form.password_confirm);
        formData.append('email', form.email);
        formData.append('description', form.description);

        UsersRequests.create(formData).then((response) => {
            if (response.meta.status === 201) {
                if (response.data.id) {
                    this.props.history.push(`${RouteConst.backEnd.users.index.path}/${response.data.id}`);
                } else {
                    this.props.history.push(RouteConst.backEnd.users.index.path);
                }
            } else {
                this.state.messageError = response.meta.message;
            }
        });
    }

    render() {
        const roleUser=RoleHelper.getRole();
        let roles = {}
        if(roleUser<3) {
            roles = [0,1]
        } else {
            roles = [0,1,2]
        }
        const breadcrumbElement = (
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to={RouteConst.backEnd.home.index.path}>Home</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to={RouteConst.backEnd.users.index.path}>Users</Link>
                </li>
                <li className="breadcrumb-item active">Create</li>
            </ol>
        );

        const formElement = (
            <div>
                <div className="form-group">
                    <label htmlFor="name">Role</label>
                    <select name="role" id="role" className="form-control" required="required" onChange={this.handleOnChange} value={this.state.form.role}>
                        {
                        roles.map((item, index) => {
                            return(
                                <option key={index} name="role" value={item}>{item==0?"Donor":item==1?"Charity":"Admin"}</option>
                            )
                        })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name"
                        name="name" onChange={this.handleOnChange}  />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Phone number</label>
                    <input type="text" className="form-control" id="phone_number"
                        name="phone_number" onChange={this.handleOnChange}  />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Address</label>
                    <input type="text" className="form-control" id="address"
                        name="address" onChange={this.handleOnChange}  />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input type="text" className="form-control" id="email"
                        name="email" onChange={this.handleOnChange}  />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Username</label>
                    <input type="text" className="form-control" id="username"
                        name="username" onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" name="password"
                        required onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password Confirm</label>
                    <input type="password" id="password_confirm" className="form-control" name="password_confirm"
                        required onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="file" className="form-control" id="image" accept="image/*"
                        name="image" onChange={this.onChangeFile}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description"
                        name="description" onChange={this.handleOnChange} value={this.state.form.description != null ? this.state.form.description : "" } />
                </div>
                <button type="button" className="btn btn-primary"
                    onClick={this.submitForm}>Submit</button>
            </div>
        );

        return (
            <div>
                {breadcrumbElement}

                <div className="card mb-3">
                    <div className="card-header">
                        <i className="fas fa-table"></i> Create category
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-12">
                                {formElement}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
